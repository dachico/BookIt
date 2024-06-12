import { useEffect } from "react";
import io from "socket.io-client";

const url = import.meta.env.VITE_BASE_API_URL;
const socket = io(url);

export const useSocket = (user, setBookings, fetchBookings) => {
  useEffect(() => {
    if (!user || !setBookings || !fetchBookings) return;

    socket.emit("join", user._id);

    socket.on("newBooking", (newBooking) => {
      fetchBookings(user._id);
      setBookings((prevBookings) => [...prevBookings, newBooking]);
    });

    return () => {
      socket.emit("leave", user._id);
      socket.off("newBooking");
      // socket.disconnect();
    };
  }, [user, setBookings, fetchBookings]);

  return socket;
};
