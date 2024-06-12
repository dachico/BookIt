import { useContext } from "react";
import {
  DayRow,
  TimeCol as DayTimeCol,
  DayCell,
  DaySlot,
  DaysRowWrapper as DayRowWrapper,
  DaysCol as DayDaysCol,
} from "../../components/Views/DayView.styles";
import { BookingContext } from "../../contexts/BookingContext";
import { getBookingsForTimeSlot } from "../../utils/checkBookings";

const DayCells = () => {
  const { currentDate, bookings, showBookingForm, openingHour, closingHour } =
    useContext(BookingContext);

  return (
    <>
      <DayRowWrapper>
        <DayDaysCol>{currentDate.format("dddd")}</DayDaysCol>
      </DayRowWrapper>
      {Array.from({ length: closingHour - openingHour + 1 }, (_, i) => {
        const hour = openingHour + i;
        return (
          <DayRow key={i}>
            <DayTimeCol>{`${String(hour).padStart(2, "0")}:00`}</DayTimeCol>
            <DayCell>
              {Array.from({ length: 4 }, (_, k) => {
                const minute = 15 * k;
                const bookingsForSlot = getBookingsForTimeSlot(
                  bookings,
                  currentDate.year(),
                  currentDate.month(),
                  currentDate.date(),
                  hour,
                  minute
                );
                const isSlotBooked = bookingsForSlot.length > 0;
                return (
                  <DaySlot
                    key={k}
                    $isBooked={isSlotBooked}
                    onClick={() =>
                      isSlotBooked
                        ? showBookingForm(bookingsForSlot[0], true)
                        : showBookingForm({
                            time: currentDate
                              .hour(hour)
                              .minute(minute)
                              .toISOString(),
                          })
                    }
                  >
                    {`${String(hour).padStart(2, "0")}:${String(
                      minute
                    ).padStart(2, "0")}`}
                  </DaySlot>
                );
              })}
            </DayCell>
          </DayRow>
        );
      })}
    </>
  );
};

export default DayCells;
