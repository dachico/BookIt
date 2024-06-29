import { useContext } from "react";
import { BookingContext } from "../../../contexts/BookingContext";

export const useBookingHandlers = () => {
  const {
    setShowForm,
    setNewBooking,
    editingBooking,
    setEditingBooking,
    createBooking,
    updateBooking,
    deleteBooking,
  } = useContext(BookingContext);

  const handleBookingSubmit = async (data) => {
    try {
      if (editingBooking) {
        await updateBooking(editingBooking._id, data);
      } else {
        await createBooking(data);
      }
    } catch (error) {
      console.error("Failed to save booking:", error);
    }
    setShowForm(false);
    setNewBooking({
      clientName: "",
      phone: "",
      email: "",
      description: "",
      time: null,
    });
  };

  const handleCancelBooking = () => {
    setNewBooking({
      clientName: "",
      phone: "",
      email: "",
      description: "",
      time: null,
    });
    setShowForm(false);
    setEditingBooking(null);
  };

  const handleDeleteBooking = async () => {
    if (editingBooking) {
      await deleteBooking(editingBooking._id);
      setEditingBooking(null);
      setNewBooking({
        clientName: "",
        phone: "",
        email: "",
        description: "",
        time: null,
      });
      setShowForm(false);
    }
  };

  return {
    handleBookingSubmit,
    handleCancelBooking,
    handleDeleteBooking,
  };
};
