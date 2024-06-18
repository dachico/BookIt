import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import * as api from "../api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const checkAndRefreshToken = async () => {
    setLoading(true);
    try {
      const currentUser = await api.checkLoggedIn();
      setUser(currentUser);
      setLoading(false);
    } catch (err) {
      try {
        const newAccessToken = await api.refreshToken();
        if (newAccessToken) {
          const currentUser = await api.checkLoggedIn();
          setUser(currentUser);
          setLoading(false);
        }
      } catch (refreshError) {
        console.warn("Couldnt refresh your token, log in", refreshError);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAndRefreshToken();
  }, []);

  const login = async (email, password) => {
    try {
      const loggedInUser = await api.login(email, password);
      setUser(loggedInUser);
      toast.success("Login Successful. Welcome!");
      navigate("/calendar");
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message || error.message);
      }
      console.error("Login failed:", error);
    }
  };

  const signup = async (name, email, password) => {
    try {
      const newUser = await api.signup(name, email, password);
      setUser(newUser);
      toast.success("Signup Successful. Welcome!");
      navigate("/login");
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message || error.message);
      }
      console.error("Signup failed:", error);
    }
  };

  const logout = async () => {
    try {
      await api.logout();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
