import { AuthProvider } from "./contexts/AuthContext";
import { BookingProvider } from "./contexts/BookingContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import ProtectedRoute from "./components/ProtectedRoute";

import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Calendar from "./pages/Calendar/Calendar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import UserCalendar from "./pages/UserCalendar/UserCalendar";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

const App = () => {
  return (
    <Router>
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      <AuthProvider>
        <BookingProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/resetPassword/:token" element={<ResetPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/me" element={<Profile />} />
              <Route path="/user-calendar/:userId" element={<UserCalendar />} />
              <Route path="/calendar" element={<Calendar />} />
            </Route>
          </Routes>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
