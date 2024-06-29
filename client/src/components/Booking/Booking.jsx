import { useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

const schema = yup.object().shape({
  clientName: yup.string().required("Client name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .required("Phone number is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  description: yup.string(),
});

const Booking = () => {
  const { showForm, newBooking, setNewBooking, editingBooking } =
    useContext(BookingContext);

  useInterval(newBooking);

  const { handleBookingSubmit, handleCancelBooking, handleDeleteBooking } =
    useBookingHandlers();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: newBooking,
  });

  useEffect(() => {
    reset(newBooking);
  }, [newBooking, reset]);

  if (!newBooking) return null;

  const onSubmit = (data) => {
    handleBookingSubmit({ ...data, time: newBooking.time });
  };

  return (
    <>
      {showForm && (
        <BookingFormContainer>
          <BookingForm>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <Label>
                Client Name:
                <Controller
                  name="clientName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || newBooking.clientName}
                      onChange={(e) => {
                        field.onChange(e);
                        setNewBooking({
                          ...newBooking,
                          clientName: e.target.value,
                        });
                      }}
                    />
                  )}
                />
                {errors.clientName && <p>{errors.clientName.message}</p>}
              </Label>
              <Label>
                Phone:
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || newBooking.phone}
                      onChange={(e) => {
                        field.onChange(e);
                        setNewBooking({ ...newBooking, phone: e.target.value });
                      }}
                    />
                  )}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </Label>
              <Label>
                Email:
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value || newBooking.email}
                      onChange={(e) => {
                        field.onChange(e);
                        setNewBooking({ ...newBooking, email: e.target.value });
                      }}
                    />
                  )}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </Label>
              <Label>
                Description:
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      value={field.value || newBooking.description}
                      onChange={(e) => {
                        field.onChange(e);
                        setNewBooking({
                          ...newBooking,
                          description: e.target.value,
                        });
                      }}
                    />
                  )}
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
