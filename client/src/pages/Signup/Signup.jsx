import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-hot-toast";

import {
  Container,
  Card,
  FormSection,
  Form,
  Logo,
  Img,
  ImageSection,
  Title,
  Input,
  Button,
  Par,
  Span,
} from "./Signup.styles";

import login from "../../images/login.png";
import logo from "../../images/bookit-logo.png";

const myLogo = logo;
const bg = login;

function Signup() {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("trying to signup", data);
      await signup(data.name, data.email, data.password);
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
      toast.error(err.response?.data || err.message || "Something went wrong");
      console.log(err);
    }
  };

  return (
    <Container>
      <Card>
        <FormSection>
          <Form onSubmit={handleSubmit}>
            <Logo>
              <Link to="/">
                <Img
                  src={myLogo}
                  alt="logo"
                  style={{ maxHeight: "4rem", width: "auto" }}
                />
              </Link>
            </Logo>
            <Title>Welcome!</Title>
            {error && <p>{error}</p>}
            <Input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              placeholder="Enter email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <Button type="submit">Signup</Button>
            <Par>
              Have an account?
              <Span onClick={() => navigate("/login")}> Login here</Span>
            </Par>
          </Form>
        </FormSection>
        <ImageSection>
          <Img
            src={bg}
            alt="working with a calendar"
            style={{ width: "100%", height: "auto" }}
          />
        </ImageSection>
      </Card>
    </Container>
  );
}

export default Signup;
