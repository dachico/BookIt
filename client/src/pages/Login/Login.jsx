import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import login from "../../images/login.png";
import logo from "../../images/bookit-logo.png";
import {
  Button,
  Container,
  Card,
  Form,
  FormSection,
  Logo,
  Img,
  Title,
  Input,
  Space,
  Par,
  Span,
  StyledLink,
  ImageSection,
} from "./Login.styles";

const myLogo = logo;
const bg = login;

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({
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
      await login(data.email, data.password);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
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
              type="email"
              placeholder="Enter email"
              name="email"
              value={data.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <Button type="submit">Log in</Button>
            <Space>
              <Par>
                No account yet?{" "}
                <Span onClick={() => navigate("/signup")}>Register here</Span>
              </Par>
              <StyledLink to="/forgot-password">
                Forgot your password?
              </StyledLink>
            </Space>
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

export default Login;
