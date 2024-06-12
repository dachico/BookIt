import { useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";
import { generateMonthCells } from "../../utils/cellGenerators";
import { BodyWrapper, Body } from "./MonthView.styles";

const MonthView = () => {
  const { currentDate, bookings, setCurrentDate, setCurrentView, arrayOfDays } =
    useContext(BookingContext);

  return (
    <BodyWrapper>
      <Body>
        {generateMonthCells(
          currentDate,
          bookings,
          setCurrentDate,
          setCurrentView,
          arrayOfDays
        )}
      </Body>
    </BodyWrapper>
  );
};

export default MonthView;
