import { useState, useContext } from "react";
import { createBookingsForUsers } from "../../api";
import { AuthContext } from "../../contexts/AuthContext";
import { BookingContext } from "../../contexts/BookingContext";
import { toast } from "react-hot-toast";
import dayjs from "dayjs";
import io from "socket.io-client";
import {
  Modal,
  Form,
  Label,
  Input,
  Textarea,
  Button,
  BtnWrapper,
} from "./UserBooking.styles";
import PropTypes from "prop-types";

const url = import.meta.env.VITE_BASE_API_URL;
const socket = io(`${url}`);

const UserBooking = ({ onClose }) => {
  const { user } = useContext(AuthContext);
  const { selectedSlot, currentDate, targetedUserId, fetchBookings } =
    useContext(BookingContext);
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  if (!user || !selectedSlot || !currentDate) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      targetedUserId,
      clientName: user.name,
      email: user.email,
      phone,
      time: dayjs(currentDate)
        .hour(selectedSlot.split(":")[0])
        .minute(selectedSlot.split(":")[1])
        .format(),
      description,
    };

    try {
      const newBooking = await createBookingsForUsers(bookingData);
      toast.success("Booking created successfully");
      socket.emit("newBooking", newBooking.currentUserBooking);
      socket.emit("newBooking", newBooking.targetedUserBooking);
      fetchBookings(user._id);
      onClose();
    } catch (error) {
      toast.error("Failed to create booking");
      console.error("Failed to create booking:", error);
    }
  };

  return (
    <Modal>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input type="text" value={user.name} disabled />
        </Label>
        <Label>
          Email:
          <Input type="email" value={user.email} disabled />
        </Label>
        <Label>
          Phone:
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Label>
        <Label>
          Description:
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Label>
        <BtnWrapper>
          <Button type="submit">Book</Button>
          <Button type="button" onClick={onClose} $secondary>
            Cancel
          </Button>
        </BtnWrapper>
      </Form>
    </Modal>
  );
};

UserBooking.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default UserBooking;
