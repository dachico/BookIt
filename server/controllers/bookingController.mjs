import Booking from "../models/bookingModel.mjs";
import AppError from "../utils/appError.mjs";
import User from "../models/userModel.mjs";
import catchAsync from "../utils/catchAsync.mjs";
import { notifyNewBooking } from "../socket.mjs";

export const createBookingForBothUsers = catchAsync(async (req, res, next) => {
  const { targetedUserId, clientName, phone, email, time, description } =
    req.body;

  try {
    const targetedUser = await User.findById(targetedUserId);

    if (!targetedUser) {
      return next(new AppError("User not found", 404));
    }

    const newBookingForCurrentUser = await Booking.create({
      user: req.user._id,
      clientName: targetedUser.name,
      phone,
      email: targetedUser.email,
      time,
      description,
    });

    const newBookingForTargetedUser = await Booking.create({
      user: targetedUserId,
      clientName: req.user.name,
      phone,
      email: req.user.email,
      time,
      description,
    });

    notifyNewBooking(newBookingForCurrentUser, req.user._id);
    notifyNewBooking(newBookingForTargetedUser, targetedUserId);

    res.status(201).json({
      status: "Success",
      data: {
        currentUserBooking: newBookingForCurrentUser,
        targetedUserBooking: newBookingForTargetedUser,
      },
    });
  } catch (err) {
    console.error("Error creating booking:", err);
    return next(new AppError("Error creating booking", 500));
  }
});

export const getAllBookings = catchAsync(async (req, res, next) => {
  const userId = req.query.userId;

  const bookings = await Booking.find({ user: userId });
  if (!bookings) {
    return next(new AppError("No bookings found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      bookings,
    },
  });
});

export const getBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    return next(new AppError("No booking found with that ID", 404));
  }

  res.status(200).json({
    status: "Success",
    data: {
      booking,
    },
  });
});

export const createBooking = catchAsync(async (req, res, next) => {
  try {
    const newBooking = await Booking.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({
      status: "Success",
      data: {
        booking: newBooking,
      },
    });
  } catch (err) {
    console.error("Error creating booking:", err);
    next(new AppError("Error creating booking", 500));
  }
});

export const updateBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!booking) {
    return next(new AppError("No booking found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      booking,
    },
  });
});

export const deleteBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.findByIdAndDelete(req.params.id);

  if (!booking) {
    return next(new AppError("No booking found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
