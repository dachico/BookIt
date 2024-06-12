import dayjs from "dayjs";

export const getBookingsForTimeSlot = (
  bookings,
  year,
  month,
  date,
  hour,
  minute
) => {
  return bookings.filter((booking) => {
    const bookingDate = dayjs(booking.time);
    return (
      bookingDate.year() === year &&
      bookingDate.month() === month &&
      bookingDate.date() === date &&
      bookingDate.hour() === hour &&
      bookingDate.minute() === minute
    );
  });
};

export const getBookingsAndStatusForTimeSlot = (
  bookings,
  year,
  month,
  date,
  hour,
  minute
) => {
  const bookingsForSlot = getBookingsForTimeSlot(
    bookings,
    year,
    month,
    date,
    hour,
    minute
  );
  return {
    isSlotBooked: bookingsForSlot.length > 0,
    bookingsForSlot,
  };
};

export const getBookingDetailsForDay = (bookings, year, month, date) => {
  const bookingsForDay = bookings.filter((booking) => {
    const bookingDate = dayjs(booking.time);
    return (
      bookingDate.year() === year &&
      bookingDate.month() === month &&
      bookingDate.date() === date
    );
  });
  return {
    isDayBooked: bookingsForDay.length > 0,
    bookingsCount: bookingsForDay.length,
    bookingsForDay,
  };
};
