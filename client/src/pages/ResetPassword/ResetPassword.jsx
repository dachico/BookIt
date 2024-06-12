import { useState } from "react";
import { useParams } from "react-router-dom";
import { resetPassword } from "../../api";
import {
  Container,
  Form,
  Input,
  Error,
  Message,
  Button,
} from "./ResetPassword.styles";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, password);
      setMessage("Password reset successful!");
      setError("");
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("");

      setError("Failed to reset password");
    }
  };

  return (
    <Container>
      <h1>Reset Password</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Reset Password</Button>
      </Form>
      {message && <Message>{message}</Message>}
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default ResetPassword;
