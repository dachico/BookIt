import CalendarBody from "../../components/CalendarBody/CalendarBody";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import Booking from "../../components/Booking/Booking";
import Awaiting from "../../components/Awaiting/Awaiting";
import NavBar from "../../components/NavBar/NavBar";
import { useContext, useEffect } from "react";
import { BookingContext } from "../../contexts/BookingContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Container, CalendarWrapper, AwaitingWrapper } from "./Calendar.styles";

const Calendar = () => {
  const { setOpeningHour, setClosingHour } = useContext(BookingContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;

    setOpeningHour(user.openingHour);
    setClosingHour(user.closingHour);
  }, [user, setOpeningHour, setClosingHour]);

  return (
    <>
      <NavBar />
      <Container>
        <CalendarWrapper>
          <CalendarHeader />
          <CalendarBody />
          <Booking />
        </CalendarWrapper>
        <AwaitingWrapper>
          <Awaiting />
        </AwaitingWrapper>
      </Container>
    </>
  );
};

export default Calendar;
