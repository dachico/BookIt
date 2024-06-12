import { useState } from "react";
import { getUserOpeningClosingHours } from "../api";

export const useOpeningHours = () => {
  const [openingHour, setOpeningHour] = useState(7);
  const [closingHour, setClosingHour] = useState(19);

  const fetchOpeningClosingHours = async (userId) => {
    try {
      const userHours = await getUserOpeningClosingHours(userId);
      setOpeningHour(userHours.openingHour || 7);
      setClosingHour(userHours.closingHour || 19);
    } catch (error) {
      console.error("Failed to fetch user opening/closing hours", error);
    }
  };

  return {
    openingHour,
    setOpeningHour,
    closingHour,
    setClosingHour,
    fetchOpeningClosingHours,
  };
};
