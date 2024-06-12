import styled, { keyframes } from "styled-components";
import { responsive } from "../../styles/responsive";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
  padding: 1.1rem 2.1rem;
  font-size: 1rem;
  border: none;
  border-radius: 2rem;
  background: linear-gradient(to right, #007bff, #0096ff);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  text-decoration: none;

  &:hover {
    background: linear-gradient(to right, #0011ff, #0096ff);
    transform: scale(1.05);
  }
  ${responsive.mobile`
    padding: 10px 20px;
    font-size: 0.9em;
  `}
`;

export const Span = styled.span`
  color: #007bff;
`;

export const SecHeader = styled.h2`
  font-size: 1.7rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
  ${responsive.mobile`
    font-size: 1.8rem;
  `}
  ${responsive.tablet`
    font-size: 1.7rem;
  `}
`;

export const LogoImg = styled.img`
  height: 2.5rem;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7fa;
  height: 100vh;
  font-family: "Arial", sans-serif;
  animation: ${fadeIn} 1s ease-out;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-top: 20px;
  animation: ${slideUp} 1s ease-out;
  ${responsive.mobile`
    width: 90%;
    padding: 15px 20px;
  `}
  ${responsive.tablet`
    width: 85%;
    padding: 15px 25px;
  `}
  ${responsive.laptop`
    width: 80%;
    padding: 20px 30px;
  `}
  ${responsive.desktop`
    width: 70%;
    padding: 20px 40px;
  `}
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #007bff;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  font-size: 1em;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  padding: 5px 10px;
  border-radius: 0.8rem;
  background: #007bff;
  padding: 0.7rem 1rem;

  &:hover {
    color: #007bff;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  width: 80%;
  margin-top: 2rem;
  ${responsive.mobile`
    grid-template-columns: 1fr;
    width: 90%;
    margin-top: 30px;
  `}
  ${responsive.tablet`
    grid-template-columns: 1fr;
    width: 85%;
    margin-top: 40px;
  `}
  ${responsive.laptop`
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin-top: 20px;
  `}
  ${responsive.desktop`
    grid-template-columns: 1fr 1fr;
    width: 70%;
    margin-top: 20px;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  animation: ${slideUp} 1s ease-out;
  ${responsive.mobile`
    align-items: center;
    text-align: center;
  `}
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.3rem;
  font-weight: 600;
  ${responsive.mobile`
    font-size: 2em;
  `}
  ${responsive.tablet`
    font-size: 2.2em;
  `}
`;

export const Secondary = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 2.5rem;
  max-width: 80%;
  ${responsive.mobile`
    font-size: 1em;
    max-width: 90%;
  `}
  ${responsive.tablet`
    font-size: 1.1em;
    max-width: 85%;
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Illustration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${responsive.mobile`
    width: 100%;
    margin-bottom: 30px;
  `}
  ${responsive.tablet`
    width: 100%;
    margin-bottom: 30px;
  `}
`;
