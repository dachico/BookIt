import express from "express";
import * as bookingController from "../controllers/bookingController.mjs";
import * as authController from "../controllers/authController.mjs";

const router = express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router.route("/both").post(bookingController.createBookingForBothUsers);

router
  .route("/:id")
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

export default router;
