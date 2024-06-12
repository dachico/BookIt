import { useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";
import { generateDayCells } from "../../utils/cellGenerators";
import { BodyWrapper, Body } from "./DayView.styles";

const DayView = () => {
  const { currentDate, bookings, showBookingForm, openingHour, closingHour } =
    useContext(BookingContext);

  return (
    <BodyWrapper>
      <Body>
        {generateDayCells(
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

export default DayView;
