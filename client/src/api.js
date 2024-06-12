import axios from "axios";
import io from "socket.io-client";

const url = import.meta.env.VITE_BASE_API_URL;

const socket = io(`${url}`);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = `${url}`;

export const createBookingsForUsers = async (bookingData) => {
  try {
    const response = await axios.post("/api/v1/bookings/both", bookingData);
    const { currentUserBooking, targetedUserBooking } = response.data.data;

    socket.emit("newBooking", currentUserBooking);
    socket.emit("newBooking", targetedUserBooking);

    return response.data.data;
  } catch (error) {
    console.error("Failed to create booking for both users:", error);
    throw error;
  }
};

export const checkLoggedIn = async () => {
  try {
    const response = await axios.get("/api/v1/users/me");
    return response.data.data.user;
  } catch (err) {
    console.warn("You are not logged in", err);
    throw err;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post("/api/v1/users/login", {
      email,
      password,
    });
    return response.data.data.user;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await axios.post("/api/v1/users/signup", {
      name,
      email,
      password,
    });
    return response.data.data.user;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await axios.get("/api/v1/users/logout");
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const response = await axios.post("/api/v1/users/refreshtoken");
    return response.data.data.accessToken;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const fetchBookings = async (userId) => {
  try {
    const response = await axios.get(`/api/v1/bookings?userId=${userId}`);
    return response.data.data.bookings;
  } catch (error) {
    console.error("Failed to fetch bookings:", error);
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post("/api/v1/bookings", bookingData);
    return response.data.data.booking;
  } catch (error) {
    console.error("Failed to create booking:", error);
    throw error;
  }
};

export const updateBooking = async (bookingId, updatedBooking) => {
  try {
    const response = await axios.patch(
      `/api/v1/bookings/${bookingId}`,
      updatedBooking
    );
    return response.data.data.booking;
  } catch (error) {
    console.error("Failed to update booking:", error);
    throw error;
  }
};

export const deleteBooking = async (bookingId) => {
  try {
    await axios.delete(`/api/v1/bookings/${bookingId}`);
  } catch (error) {
    console.error("Failed to delete booking:", error);
    throw error;
  }
};

export const updateUserDetails = async (data) => {
  try {
    const response = await axios.patch("/api/v1/users/updateMe", data);
    return response.data.data.user;
  } catch (error) {
    console.error("Failed to update user details:", error);
    throw error;
  }
};

export const updateUserPassword = async (data) => {
  try {
    const response = await axios.patch("/api/v1/users/updateMyPassword", data);
    return response.data.data.user;
  } catch (error) {
    console.error("Failed to update user password:", error);
    throw error;
  }
};

export const sendForgotPasswordEmail = async (email) => {
  try {
    await axios.post("/api/v1/users/forgotPassword", { email });
  } catch (error) {
    console.error("Failed to send forgot password email:", error);
    throw error;
  }
};

export const resetPassword = async (token, password) => {
  try {
    const response = await axios.patch(`/api/v1/users/resetPassword/${token}`, {
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to reset password:", error.response.data);
    throw error;
  }
};

export const updateUserSettings = async (data) => {
  try {
    const response = await axios.patch("api/v1/users/updateUserSettings", data);
    return response.data.data.user;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to update settings");
  }
};

export const getUserOpeningClosingHours = async (userId) => {
  try {
    const res = await axios.get(`/api/v1/users/${userId}/hours`);
    return res.data.hours;
  } catch (err) {
    console.error("Err getting hours", err);
    throw err;
  }
};
