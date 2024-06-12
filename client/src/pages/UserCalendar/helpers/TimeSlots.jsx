import { useContext } from "react";
import dayjs from "dayjs";
import { BookingContext } from "../../../contexts/BookingContext";
import { TimeSlot, TimeSlotsHeader } from "../UserCalendar.styles";

const TimeSlots = () => {
  const {
    currentDate,
    bookings,
    openingHour,
    closingHour,
    setSelectedSlot,
    targetedUserBookings,
  } = useContext(BookingContext);

  const selectedDate = currentDate;

  const generateTimeSlots = () => {
    const slots = [];
    const now = dayjs();
    const combinedBookings = [...bookings, ...targetedUserBookings];

    for (let hour = openingHour; hour < closingHour; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const slot = selectedDate.hour(hour).minute(minute);
        if (slot.isAfter(now)) {
          const formattedSlot = slot.format("HH:mm");
          const isBooked = combinedBookings.some(
            (booking) => dayjs(booking.time).format("HH:mm") === formattedSlot
          );
          if (!isBooked) {
            slots.push(formattedSlot);
          }
        }
      }
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <>
      <TimeSlotsHeader>{selectedDate.format("ddd DD")}</TimeSlotsHeader>
      {timeSlots.map((slot, index) => (
        <TimeSlot key={index} onClick={() => setSelectedSlot(slot)}>
          {slot}
        </TimeSlot>
      ))}
    </>
  );
};

export default TimeSlots;
