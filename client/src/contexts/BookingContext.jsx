import { createContext, useContext, useState } from "react";
import { useBooking } from "../utils/useBooking";
import { useBookingForm } from "../utils/useBookingForm";
import { useSocket } from "../utils/useSocket";
import { useOpeningHours } from "../utils/useOpeningHours";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [targetedUserBookings, setTargetedUserBookings] = useState([]);
  const [targetedUserId, setTargetedUserId] = useState(null);

  const {
    bookings,
    setBookings,
    awaitingBookings,
    currentDate,
    currentView,
    arrayOfDays,
    setCurrentDate,
    setCurrentView,
    fetchBookings,
    createBooking,
    updateBooking,
    deleteBooking,
  } = useBooking(user);

  const {
    showForm,
    setShowForm,
    showBookingForm,
    newBooking,
    setNewBooking,
    editingBooking,
    setEditingBooking,
  } = useBookingForm(bookings);

  const { openingHour, closingHour, setOpeningHour, setClosingHour } =
    useOpeningHours(user);

  useSocket(user, setBookings, fetchBookings);

  return (
    <BookingContext.Provider
      value={{
        bookings,
        setBookings,
        awaitingBookings,
        currentDate,
        currentView,
        arrayOfDays,
        setCurrentDate,
        setCurrentView,
        fetchBookings,
        createBooking,
        updateBooking,
        deleteBooking,
        showForm,
        setShowForm,
        showBookingForm,
        newBooking,
        setNewBooking,
        editingBooking,
        setEditingBooking,
        openingHour,
        closingHour,
        setOpeningHour,
        setClosingHour,
        selectedSlot,
        setSelectedSlot,
        targetedUserBookings,
        setTargetedUserBookings,
        targetedUserId,
        setTargetedUserId,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

BookingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BookingContext, BookingProvider };
