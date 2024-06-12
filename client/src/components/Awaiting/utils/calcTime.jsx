import dayjs from "dayjs";
import { toast } from "react-hot-toast";
import { NewNotification, CheckBtn } from "../Awaiting.styles";
import { FaCircleCheck } from "react-icons/fa6";

export const calcTime = (
  bookings,
  now,
  notifiedBookings,
  clearedBookings,
  handleCheckClick
) => {
  const newRemainingTimes = {};
  const newTimerMessages = {};
  const newNotifiedBookings = { ...notifiedBookings };

  bookings.forEach((booking) => {
    if (clearedBookings[booking._id]) {
      newRemainingTimes[booking.time] = null;
      newTimerMessages[booking.time] = null;
    } else {
      const bookingTime = dayjs(booking.time);
      const diff = bookingTime.diff(now, "second");

      if (diff > 0) {
        const days = Math.floor(diff / (3600 * 24));
        const hours = Math.floor((diff % (3600 * 24)) / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;

        if (days > 0) {
          newRemainingTimes[
            booking.time
          ] = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
          newRemainingTimes[booking.time] = `${hours}h ${minutes}m ${seconds}s`;
        }
      } else {
        newRemainingTimes[booking.time] = null;
        newTimerMessages[booking.time] = (
          <div style={{ display: "flex", alignItems: "center" }}>
            {`${booking.clientName} is waiting for your call`}
            <FaCircleCheck
              onClick={() => handleCheckClick(booking._id)}
              style={{
                marginLeft: "1rem",
                cursor: "pointer",
                fontSize: "2rem",
              }}
            />
          </div>
        );

        if (!notifiedBookings[booking.time]) {
          toast.custom(
            (t) => (
              <NewNotification>
                <div style={{ flex: 1 }}>
                  <strong>{booking.clientName}</strong> is waiting for your
                  call.
                </div>
                <CheckBtn
                  onClick={() => {
                    handleCheckClick(booking._id);
                    toast.dismiss(t.id);
                  }}
                >
                  <FaCircleCheck />
                </CheckBtn>
              </NewNotification>
            ),
            { duration: Infinity }
          );
          newNotifiedBookings[booking.time] = true;
        }
      }
    }
  });

  return { newRemainingTimes, newTimerMessages, newNotifiedBookings };
};
