import { useEffect } from "react";
import dayjs from "dayjs";

export const useInterval = (newBooking) => {
  useEffect(() => {
    if (newBooking?.time) {
      const interval = setInterval(() => {
        const now = dayjs();
        const bookingTime = dayjs(newBooking.time);
        const diff = bookingTime.diff(now, "second");

        if (diff <= 0) {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [newBooking?.time]);
};
