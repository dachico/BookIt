import { useState } from "react";
import { sendForgotPasswordEmail } from "../../api";
import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Message,
} from "./ForgotPassword.styles";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendForgotPasswordEmail(email);
      setMessage(
        "Reset URL has been sent to your email. Only valid for 10 minutes."
      );
    } catch (error) {
      setMessage("Error sending reset email. Please try again.");
    }
  };

  return (
    <Container>
      <Title>Reset Password</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit">Send</Button>
      </Form>
      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default ForgotPassword;
