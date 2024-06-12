import { useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";
import { useInterval } from "./utils/useInterval";
import { useBookingHandlers } from "./utils/useBookingHandlers";
import {
  BookingFormContainer,
  BookingForm,
  FormWrapper,
  Label,
  Input,
  TextArea,
  ButtonContainer,
  SubmitButton,
  CancelButton,
  DeleteButton,
} from "./Booking.styles";

const Booking = () => {
  const { showForm, newBooking, setNewBooking, editingBooking } =
    useContext(BookingContext);

  useInterval(newBooking);

  const { handleBookingSubmit, handleCancelBooking, handleDeleteBooking } =
    useBookingHandlers();

  if (!newBooking) return null;

  return (
    <>
      {showForm && (
        <BookingFormContainer>
          <BookingForm>
            <FormWrapper onSubmit={(e) => handleBookingSubmit(e, newBooking)}>
              <Label>
                Client Name:
                <Input
                  type="text"
                  value={newBooking.clientName}
                  onChange={(e) =>
                    setNewBooking({ ...newBooking, clientName: e.target.value })
                  }
                />
              </Label>
              <Label>
                Phone:
                <Input
                  type="text"
                  value={newBooking.phone}
                  onChange={(e) =>
                    setNewBooking({ ...newBooking, phone: e.target.value })
                  }
                />
              </Label>
              <Label>
                Email:
                <Input
                  type="text"
                  value={newBooking.email}
                  onChange={(e) =>
                    setNewBooking({ ...newBooking, email: e.target.value })
                  }
                />
              </Label>
              <Label>
                Description:
                <TextArea
                  value={newBooking.description}
                  onChange={(e) =>
                    setNewBooking({
                      ...newBooking,
                      description: e.target.value,
                    })
                  }
                />
              </Label>
              <ButtonContainer>
                <SubmitButton type="submit">
                  {editingBooking ? "Save" : "Submit"}
                </SubmitButton>
                <CancelButton type="button" onClick={handleCancelBooking}>
                  Cancel
                </CancelButton>
                {editingBooking && (
                  <DeleteButton type="button" onClick={handleDeleteBooking}>
                    Delete
                  </DeleteButton>
                )}
              </ButtonContainer>
            </FormWrapper>
          </BookingForm>
        </BookingFormContainer>
      )}
    </>
  );
};

export default Booking;
