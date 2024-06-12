import { useContext } from "react";
import {
  Row as MonthRowWrapper,
  Cell as MonthCell,
  Number,
  BookingBadge,
  Bg,
} from "../../components/Views/MonthView.styles";
import { BookingContext } from "../../contexts/BookingContext";
import { getBookingDetailsForDay } from "../../utils/checkBookings";
import dayjs from "dayjs";

const MonthCells = () => {
  const { currentDate, bookings, setCurrentDate, setCurrentView, arrayOfDays } =
    useContext(BookingContext);
  const rows = [];
  let days = [];
  const now = dayjs();

  if (!Array.isArray(arrayOfDays)) {
    return null;
  }

  arrayOfDays.forEach((week, index) => {
    week.dates.forEach((d, i) => {
      const isCurrentMonth = d.month === currentDate.month();
      const { isDayBooked, bookingsCount } = isCurrentMonth
        ? getBookingDetailsForDay(bookings, d.year, d.month, d.day)
        : { isDayBooked: false, bookingsCount: 0 };

      days.push(
        <MonthCell
          key={i}
          $isDisabled={!d.isCurrentMonth}
          $isSelected={now.date() === d.day && now.month() === d.month}
          $isBooked={isDayBooked}
          onClick={() => {
            if (isCurrentMonth) {
              setCurrentDate(currentDate.date(d.day));
              setCurrentView("day");
            }
          }}
        >
          <Number>{d.day}</Number>
          {isDayBooked && <BookingBadge>{bookingsCount}</BookingBadge>}
          <Bg>{d.day}</Bg>
        </MonthCell>
      );
    });
    rows.push(<MonthRowWrapper key={index}>{days}</MonthRowWrapper>);
    days = [];
  });

  return rows;
};

export default MonthCells;
