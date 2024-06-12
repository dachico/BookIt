import { useContext } from "react";
import { BookingContext } from "../../../contexts/BookingContext";
import {
  CalendarHeaderContainer,
  MonthYear,
  NavigationButton,
} from "../UserCalendar.styles";

const CalHeader = () => {
  const { currentDate, setCurrentDate } = useContext(BookingContext);

  const handlePreviousMonth = () => {
    const newDate = currentDate.subtract(1, "month");
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = currentDate.add(1, "month");
    setCurrentDate(newDate);
  };

  return (
    <CalendarHeaderContainer>
      <NavigationButton onClick={handlePreviousMonth}>{"<"}</NavigationButton>
      <MonthYear>{currentDate.format("MMMM YYYY")}</MonthYear>
      <NavigationButton onClick={handleNextMonth}>{">"}</NavigationButton>
    </CalendarHeaderContainer>
  );
};

export default CalHeader;
