import { Link } from "react-router-dom";
import homeImg from "../../images/home.jpg";
import logo from "../../images/bookit-logo.png";
import {
  ButtonLink,
  Container,
  Navbar,
  NavLinks,
  Logo,
  LogoImg,
  StyledLink,
  Main,
  Content,
  Header,
  Span,
  SecHeader,
  Secondary,
  Illustration,
  Img,
} from "./Home.styles";

const bg = homeImg;
const navLogo = logo;

const Home = () => {
  return (
    <Container>
      <Navbar>
        <Logo>
          <Link to="/">
            <LogoImg src={navLogo} alt="logo" />
          </Link>
        </Logo>
        <NavLinks>
          <StyledLink to="/signup">Signup</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </NavLinks>
      </Navbar>
      <Main>
        <Content>
          <Header>
            Welcome to <Span>BookIt</Span>
          </Header>
          <SecHeader>The Future of Bookings.</SecHeader>
          <Secondary>
            Our calendar app is specifically designed to fulfill the needs of
            marketing teams, customer service representatives, and phone
            salespersons. We understand the importance of timely communication
            and efficient scheduling, which is why our tool helps you manage
            your appointments effortlessly. Stay on top of your schedule and
            improve your client interactions with our calendar solution.
          </Secondary>
          <ButtonLink to="/login">Start Booking Now</ButtonLink>
        </Content>
        <Illustration>
          <Img src={bg} alt="background image" />
        </Illustration>
      </Main>
    </Container>
  );
};

export default Home;
