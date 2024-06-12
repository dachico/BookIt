import { useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";
import MonthView from "../Views/MonthView";
import WeekView from "../Views/WeekView";
import DayView from "../Views/DayView";
import { BodyWrapper } from "./CalendarBody.styles";

const CalendarBody = () => {
  const { currentView } = useContext(BookingContext);

  const renderView = () => {
    switch (currentView) {
      case "month":
        return <MonthView />;
      case "week":
        return <WeekView />;
      case "day":
        return <DayView />;
      default:
        return <MonthView />;
    }
  };

  return <BodyWrapper>{renderView()}</BodyWrapper>;
};

export default CalendarBody;
