import AppError from "../utils/appError.mjs";
import User from "../models/userModel.mjs";
import catchAsync from "../utils/catchAsync.mjs";

export const getUserByName = catchAsync(async (req, res, next) => {
  const { name } = req.query;

  if (!name) {
    return next(new AppError("No user found", 400));
  }

  const users = await User.find();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  res.status(200).json({
    status: "Success",
    results: filteredUsers.length,
    data: {
      users: filteredUsers,
    },
  });
});

export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "Success",
    results: users.length,
    data: {
      users,
    },
  });
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

export const getMe = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new AppError("No user found", 400));
  }

  res.status(200).json({
    status: "Success",
    data: {
      user,
    },
  });
});

export const updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password) {
    return next(new AppError("This route is not for password updates", 400));
  }

  const filteredBody = filterObj(req.body, "name", "email");
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

export const deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "Success",
    data: null,
  });
});

export const updateHours = catchAsync(async (req, res, next) => {
  const { openingHour, closingHour } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { openingHour, closingHour },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

export const updateUserSettings = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      openingHour: req.body.openingHour,
      closingHour: req.body.closingHour,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

export const getUserHours = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id).select(
    "openingHour closingHour"
  );
  if (!user) {
    return next(new AppError("No user found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    hours: {
      openingHour: user.openingHour,
      closingHour: user.closingHour,
    },
  });
});
