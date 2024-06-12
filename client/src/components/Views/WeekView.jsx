import { useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";
import { generateWeekCells } from "../../utils/cellGenerators";
import { BodyWrapper, Body } from "./WeekView.styles";

const WeekView = () => {
  const { currentDate, bookings, showBookingForm, openingHour, closingHour } =
    useContext(BookingContext);

  return (
    <BodyWrapper>
      <Body>
        {generateWeekCells(
          currentDate,
          bookings,
          showBookingForm,
          openingHour,
          closingHour
        )}
      </Body>
    </BodyWrapper>
  );
};

export default WeekView;
