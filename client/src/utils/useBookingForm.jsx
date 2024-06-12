import { useState } from "react";

export const useBookingForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [newBooking, setNewBooking] = useState({
    clientName: "",
    phone: "",
    email: "",
    description: "",
    time: null,
  });
  const [editingBooking, setEditingBooking] = useState(null);

  const showBookingForm = (booking, isEditing = false) => {
    if (isEditing) {
      setEditingBooking(booking);
      setNewBooking({ ...booking });
    } else {
      setEditingBooking(null);
      setNewBooking({
        clientName: "",
        phone: "",
        email: "",
        description: "",
        time: booking.time,
      });
    }
    setShowForm(true);
  };

  return {
    showForm,
    setShowForm,
    showBookingForm,
    newBooking,
    setNewBooking,
    editingBooking,
    setEditingBooking,
  };
};
