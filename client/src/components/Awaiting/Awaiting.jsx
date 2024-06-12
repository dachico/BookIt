import dayjs from "dayjs";
import { useEffect, useState, useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";
import { filterBookings } from "./utils/filterBookings";
import { calcTime } from "./utils/calcTime";
import {
  AwaitingWrapper,
  Header,
  HeaderText,
  ClientsList,
  Client,
  ClientName,
  ClientTime,
  ClientTimeRemaining,
  ClientTimerMessage,
} from "./Awaiting.styles";

const Awaiting = () => {
  const { awaitingBookings, currentView, currentDate } =
    useContext(BookingContext);
  const [remainingTimes, setRemainingTimes] = useState({});
  const [timerMessages, setTimerMessages] = useState({});
  const [notifiedBookings, setNotifiedBookings] = useState({});
  const [clearedBookings, setClearedBookings] = useState(() => {
    return JSON.parse(localStorage.getItem("clearedBookings")) || {};
  });

  const filteredAwaitingBookings = filterBookings(
    awaitingBookings,
    currentView,
    currentDate
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const { newRemainingTimes, newTimerMessages, newNotifiedBookings } =
        calcTime(
          filteredAwaitingBookings,
          now,
          notifiedBookings,
          clearedBookings,
          handleCheckClick
        );

      setRemainingTimes(newRemainingTimes);
      setTimerMessages(newTimerMessages);
      setNotifiedBookings(newNotifiedBookings);
    }, 1000);

    return () => clearInterval(interval);
  }, [filteredAwaitingBookings, notifiedBookings, clearedBookings]);

  const handleCheckClick = (bookingId) => {
    setClearedBookings((prevCleared) => {
      const updatedCleared = { ...prevCleared, [bookingId]: true };
      localStorage.setItem("clearedBookings", JSON.stringify(updatedCleared));
      return updatedCleared;
    });
  };

  return (
    <AwaitingWrapper>
      <Header>
        <HeaderText>Awaiting Clients</HeaderText>
      </Header>
      <ClientsList>
        {filteredAwaitingBookings.map((booking, index) => (
          <Client key={index} cleared={clearedBookings[booking._id]}>
            <ClientName>{booking.clientName}</ClientName>
            <ClientTime>
              {dayjs(booking.time).format("DD/MM/YYYY HH:mm")}
            </ClientTime>
            {remainingTimes[booking.time] && (
              <ClientTimeRemaining>
                {remainingTimes[booking.time]}
              </ClientTimeRemaining>
            )}
            {timerMessages[booking.time] && (
              <ClientTimerMessage>
                {timerMessages[booking.time]}
              </ClientTimerMessage>
            )}
          </Client>
        ))}
      </ClientsList>
    </AwaitingWrapper>
  );
};

export default Awaiting;
