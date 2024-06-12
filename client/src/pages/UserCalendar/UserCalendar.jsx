import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  getUserOpeningClosingHours,
  fetchBookings as fetchTargetedUserBookings,
} from "../../api";
import { BookingContext } from "../../contexts/BookingContext";
import UserBooking from "../../components/UserBooking/UserBooking";
import io from "socket.io-client";
import {
  Container,
  CalendarContainer,
  TimeSlotsContainer,
} from "./UserCalendar.styles";
import CalHeader from "./helpers/CalHeader";
import CalendarDays from "./helpers/CalendarDays";
import TimeSlots from "./helpers/TimeSlots";
import NavBar from "../../components/NavBar/NavBar";

const url = import.meta.env.VITE_BASE_API_URL;
const socket = io(`${url}`);

const UserCalendar = () => {
  const {
    setOpeningHour,
    setClosingHour,
    selectedSlot,
    setSelectedSlot,
    setTargetedUserBookings,
    setTargetedUserId,
  } = useContext(BookingContext);
  const { userId } = useParams();

  useEffect(() => {
    setTargetedUserId(userId);

    const fetchUserDetails = async () => {
      try {
        const userHours = await getUserOpeningClosingHours(userId);
        setOpeningHour(userHours.openingHour || 7);
        setClosingHour(userHours.closingHour || 19);
      } catch (error) {
        console.error("Failed to fetch user opening/closing hours", error);
      }
    };

    fetchUserDetails();
  }, [userId, setOpeningHour, setClosingHour, setTargetedUserId]);

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const bookingsData = await fetchTargetedUserBookings(userId);
        setTargetedUserBookings(bookingsData || []);
      } catch (err) {
        console.error("Failed to fetch targeted user bookings", err);
        setTargetedUserBookings([]);
      }
    };

    fetchUserBookings();
  }, [userId, setTargetedUserBookings]);

  useEffect(() => {
    const handleNewBooking = (newBooking) => {
      setTargetedUserBookings((prevBookings) => [...prevBookings, newBooking]);
    };

    socket.emit("join", userId);
    socket.on("newBooking", handleNewBooking);

    return () => {
      socket.emit("leave", userId);
      socket.off("newBooking", handleNewBooking);
    };
  }, [userId, setTargetedUserBookings]);

  const handleCloseBookingForm = () => {
    setSelectedSlot(null);
  };

  return (
    <>
      <NavBar />
      <Container>
        <CalendarContainer>
          <CalHeader />
          <CalendarDays />
        </CalendarContainer>
        <TimeSlotsContainer>
          <TimeSlots />
        </TimeSlotsContainer>
        {selectedSlot && <UserBooking onClose={handleCloseBookingForm} />}
      </Container>
    </>
  );
};

export default UserCalendar;
