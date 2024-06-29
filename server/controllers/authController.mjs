import { promisify } from "util";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import validator from "validator";
import User from "../models/userModel.mjs";
import catchAsync from "../utils/catchAsync.mjs";
import AppError from "../utils/appError.mjs";
import Email from "../utils/email.mjs";

const signToken = (id, expiresIn) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn });
};

const accessTokenExpiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRATION;
const refreshTokenExpiresIn = process.env.JWT_REFRESH_TOKEN_EXPIRATION;

const createSendToken = async (user, statusCode, res) => {
  const accessToken = signToken(user._id, accessTokenExpiresIn);
  const refreshToken = signToken(user._id, refreshTokenExpiresIn);

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  const cookieOptions = {
    expires: new Date(
      Date.now() + parseInt(refreshTokenExpiresIn) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    secure: true,
    sameSite: "none",
  };
  // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("refreshToken", refreshToken, cookieOptions);
  res.cookie("jwt", accessToken, {
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    secure: true,
    sameSite: "none",
  });

  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    accessToken,
    data: {
      user,
    },
  });
};

export const signup = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new AppError("Please provide all the details", 400));
  }
  if (name.length < 3) {
    return next(new AppError("Name must have at least 3 characters", 400));
  }

  if (!validator.isEmail(email)) {
    return next(new AppError("Please provide a valid email", 400));
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(
      new AppError("Email already in use. Please use a different email.", 400)
    );
  }

  const newUser = await User.create({ name, email, password });
  const url = `${req.protocol}://${req.get("host")}/me`;
  await new Email(newUser, url).sendWelcome();
  await createSendToken(newUser, 201, res);
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  await createSendToken(user, 200, res);
});

export const logout = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  if (!userId) {
    return next(new AppError("User not found", 400));
  }

  await User.findByIdAndUpdate(userId, { refreshToken: null });

  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 5 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.clearCookie("refreshToken");
  res.status(200).json({ status: "Congrats you logged out!" });
});

export const protect = catchAsync(async (req, res, next) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return next(new AppError("Please login to get access", 401));
  }

  const decoded = await promisify(jwt.verify)(
    refreshToken,
    process.env.JWT_SECRET
  );
  const user = await User.findById(decoded.id).select("+refreshToken");

  if (!user || user.refreshToken !== refreshToken) {
    return next(new AppError("Invalid refresh token", 401));
  }

  const accessToken = signToken(user._id, accessTokenExpiresIn);
  res.cookie("jwt", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  req.user = user;
  next();
});

export const refreshingToken = catchAsync(async (req, res, next) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    return next(new AppError("No token provided!", 403));
  }
  const decoded = await promisify(jwt.verify)(
    refreshToken,
    process.env.JWT_SECRET
  );
  const user = await User.findById(decoded.id).select("+refreshToken");
  if (!user || user.refreshToken !== refreshToken) {
    return next(new AppError("Invalid refresh token", 401));
  }
  await createSendToken(user, 200, res);
});

export const forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("No user with that email", 404));
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  try {
    const resetURL = `${process.env.CLIENT_URL}/resetPassword/${resetToken}`;
    const message = `Forgot your password? Submit a patch request with your new password to: ${resetURL}.\n If you didnt forget your password, please ignore this email.`;
    // console.log(`Reset URL: ${resetURL}`);

    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    console.error("Err sending email", err);
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new AppError("There was an error sending the email", 500));
  }
});

export const resetPassword = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError("Token is invalid or expired", 400));
  }

  if (!req.body.password) {
    return next(new AppError("Please provide a new password", 400));
  }

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  createSendToken(user, 200, res);
});

export const updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Your password is wrong.", 401));
  }

  user.password = req.body.password;
  await user.save();

  createSendToken(user, 200, res);
});
