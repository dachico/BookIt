import { useContext, useState } from "react";
import { BookingContext } from "../../../contexts/BookingContext";
import dayjs from "dayjs";
import {
  DaysOfWeek,
  Day,
  DatesContainer,
  DateBox,
  EmptyDateBox,
} from "../UserCalendar.styles";

const CalendarDays = () => {
  const { currentDate, setCurrentDate } = useContext(BookingContext);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const today = dayjs();

  const handleDateClick = (day) => {
    const newDate = currentDate.date(day);
    setSelectedDate(newDate);
    setCurrentDate(newDate);
  };

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const daysInMonth = [];
  let day = startOfMonth.startOf("week");

  while (day.isBefore(startOfMonth)) {
    daysInMonth.push({
      day: day.date(),
      isCurrentMonth: false,
      isPast: day.isBefore(today, "day"),
    });
    day = day.add(1, "day");
  }

  day = startOfMonth;
  while (day.isBefore(endOfMonth.add(1, "day"))) {
    daysInMonth.push({
      day: day.date(),
      isCurrentMonth: true,
      isPast: day.isBefore(today, "day"),
    });
    day = day.add(1, "day");
  }

  day = endOfMonth.add(1, "day");
  while (day.weekday() !== 0) {
    daysInMonth.push({
      day: day.date(),
      isCurrentMonth: false,
      isPast: day.isBefore(today, "day"),
    });
    day = day.add(1, "day");
  }

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <DaysOfWeek>
        {daysOfWeek.map((day) => (
          <Day key={day}>{day}</Day>
        ))}
      </DaysOfWeek>
      <DatesContainer>
        {daysInMonth.map(({ day, isCurrentMonth, isPast }, index) => {
          if (!isCurrentMonth) return <EmptyDateBox key={index} />;

          const isSelected =
            selectedDate.date() === day &&
            selectedDate.month() === currentDate.month();
          return (
            <DateBox
              key={index}
              $isSelected={isSelected}
              $isPast={isPast}
              onClick={() => !isPast && handleDateClick(day)}
            >
              {day}
            </DateBox>
          );
        })}
      </DatesContainer>
    </>
  );
};

export default CalendarDays;
