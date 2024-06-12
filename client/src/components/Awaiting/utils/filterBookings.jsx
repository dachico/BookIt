import dayjs from "dayjs";

export const filterBookings = (bookings, currentView, currentDate) => {
  return bookings.filter((booking) => {
    const bookingTime = dayjs(booking.time);

    if (currentView === "month") {
      return (
        bookingTime.month() === currentDate.month() &&
        bookingTime.year() === currentDate.year()
      );
    } else if (currentView === "week") {
      const startOfWeek = currentDate.startOf("week");
      const endOfWeek = currentDate.endOf("week");
      return (
        bookingTime.isAfter(startOfWeek) && bookingTime.isBefore(endOfWeek)
      );
    } else if (currentView === "day") {
      return bookingTime.isSame(currentDate, "day");
    }
    return false;
  });
};
