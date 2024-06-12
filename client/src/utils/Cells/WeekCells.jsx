import { useContext } from "react";
import {
  WeekRow,
  TimeCol as WeekTimeCol,
  WeekCell,
  WeekSlot,
  DaysRowWrapper as WeekRowWrapper,
  DaysCol as WeekDaysCol,
} from "../../components/Views/WeekView.styles";
import { BookingContext } from "../../contexts/BookingContext";
import { getBookingsAndStatusForTimeSlot } from "../../utils/checkBookings";

const WeekCells = () => {
  const { currentDate, bookings, showBookingForm, openingHour, closingHour } =
    useContext(BookingContext);
  const startOfWeek = currentDate.startOf("week");
  const days = Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));

  return (
    <>
      <WeekRowWrapper>
        <WeekTimeCol style={{ visibility: "hidden" }} />{" "}
        {/* Invisible placeholder */}
        {days.map((day, index) => (
          <WeekDaysCol key={index}>{day.format("dddd")}</WeekDaysCol>
        ))}
      </WeekRowWrapper>
      {Array.from({ length: closingHour - openingHour + 1 }, (_, i) => {
        const hour = openingHour + i;
        return (
          <WeekRow key={i}>
            <WeekTimeCol>{`${String(hour).padStart(2, "0")}:00`}</WeekTimeCol>
            {days.map((day, index) => (
              <WeekCell key={index}>
                {Array.from({ length: 4 }, (_, k) => {
                  const minute = 15 * k;
                  const { isSlotBooked, bookingsForSlot } =
                    getBookingsAndStatusForTimeSlot(
                      bookings,
                      day.year(),
                      day.month(),
                      day.date(),
                      hour,
                      minute
                    );
                  return (
                    <WeekSlot
                      key={k}
                      $isBooked={isSlotBooked}
                      onClick={() =>
                        isSlotBooked
                          ? showBookingForm(bookingsForSlot[0], true)
                          : showBookingForm({
                              time: day.hour(hour).minute(minute).toISOString(),
                            })
                      }
                    >
                      {`${String(hour).padStart(2, "0")}:${String(
                        minute
                      ).padStart(2, "0")}`}
                    </WeekSlot>
                  );
                })}
              </WeekCell>
            ))}
          </WeekRow>
        );
      })}
    </>
  );
};

export default WeekCells;
