import { useState, useEffect } from "react";
import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";
import * as api from "../api";

dayjs.extend(weekdayPlugin);
dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);

export const useBooking = (user) => {
  const [bookings, setBookings] = useState([]);
  const [awaitingBookings, setAwaitingBookings] = useState([]);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [currentView, setCurrentView] = useState("month");
  const [arrayOfDays, setArrayOfDays] = useState([]);

  useEffect(() => {
    if (user) {
      fetchBookings(user._id);
    }
  }, [user]);

  useEffect(() => {
    setAwaitingBookings(
      bookings.sort((a, b) => (dayjs(a.time).isBefore(dayjs(b.time)) ? -1 : 1))
    );
  }, [bookings]);

  useEffect(() => {
    const getAllDays = () => {
      let current = currentDate.startOf("month").weekday(0);
      const nextMonth = currentDate.add(1, "month").month();

      let allDates = [];
      let weekDates = [];
      let weekCounter = 1;

      while (current.weekday(0).toObject().months !== nextMonth) {
        const formatted = formatDateObject(current);
        weekDates.push(formatted);

        if (weekCounter === 7) {
          allDates.push({ dates: weekDates });
          weekDates = [];
          weekCounter = 0;
        }

        weekCounter++;
        current = current.add(1, "day");

        if (current.month() === nextMonth && current.weekday() === 0) {
          break;
        }
      }

      setArrayOfDays(allDates);
    };

    getAllDays();
  }, [currentDate]);

  const fetchBookings = async (userId) => {
    try {
      const bookingData = await api.fetchBookings(userId);
      setBookings(bookingData);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  const createBooking = async (newBooking) => {
    try {
      const bookingData = {
        ...newBooking,
        time: dayjs(newBooking.time).format(),
        user: user._id,
      };
      const booking = await api.createBooking(bookingData);
      setBookings((prev) => [...prev, booking]);
    } catch (error) {
      console.error("Failed to create booking:", error);
    }
  };

  const updateBooking = async (bookingId, updatedBooking) => {
    try {
      const booking = await api.updateBooking(bookingId, updatedBooking);
      setBookings((prev) =>
        prev.map((b) => (b._id === bookingId ? booking : b))
      );
    } catch (error) {
      console.error("Failed to update booking:", error);
    }
  };

  const deleteBooking = async (bookingId) => {
    try {
      await api.deleteBooking(bookingId);
      setBookings((prev) =>
        prev.filter((booking) => booking._id !== bookingId)
      );
    } catch (error) {
      console.error("Failed to delete booking:", error);
    }
  };

  const formatDateObject = (date) => {
    const clonedObject = { ...date.toObject() };

    return {
      minute: clonedObject.minutes,
      hour: clonedObject.hours,
      day: clonedObject.date,
      month: clonedObject.months,
      year: clonedObject.years,
      isCurrentMonth: clonedObject.months === currentDate.month(),
      isCurrentDay: clonedObject.date === currentDate.date(),
    };
  };

  return {
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
  };
};
