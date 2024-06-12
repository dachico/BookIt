import styled from "styled-components";
import { Link } from "react-router-dom";
import { responsive } from "../../styles/responsive";

export const Space = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  color: #0096ff;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  margin-top: 1rem;
  font-size: 0.9rem;
  margin-left: 2px;
  color: grey;
  cursor: pointer;
  text-decoration: none;
`;

export const Par = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  margin-left: 2px;
`;

export const PTwo = styled(Par)`
  color: grey;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.div`
  height: 5rem;
  width: 5rem;
  margin-bottom: 3rem;
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 20px;

  ${responsive.mobile`
    flex-direction: column;
    padding: 10px;
    height: auto;
  `}

  ${responsive.tablet`
    flex-direction: column;
    padding: 10px;
    height: auto;
  `}
`;

export const Card = styled.div`
  display: flex;
  background-color: white;
  background-color: transparent;
  border-radius: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  height: auto;

  ${responsive.mobile`
    flex-direction: column;
    width: 100%;
    align-items: center;
  `}

  ${responsive.tablet`
    flex-direction: column;
    width: 100%;
    align-items: center;
  `}

  ${responsive.laptop`
    flex-direction: row;
    width: 90%;
  `}

  ${responsive.desktop`
    flex-direction: row;
  `}
`;

export const Img = styled.img`
  border-radius: 2rem;
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${responsive.mobile`
    width: 100%;
    padding: 10px;
    order: 2;
  `}

  ${responsive.tablet`
    width: 100%;
    padding: 10px;
    order: 2;
  `}

  ${responsive.laptop`
    width: 50%;
  `}

  ${responsive.desktop`
    width: 50%;
  `}
`;

export const FormSection = styled.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${responsive.mobile`
    width: 90%;
    padding: 2rem;
    order: 1;
  `}

  ${responsive.tablet`
    width: 90%;
    padding: 2rem;
    order: 1;
  `}

  ${responsive.laptop`
    width: 50%;
  `}

  ${responsive.desktop`
    width: 50%;
  `}
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: 24px;
  color: #333;

  ${responsive.mobile`
    font-size: 20px;
    margin-bottom: 2rem;
  `}

  ${responsive.tablet`
    font-size: 22px;
    margin-bottom: 2.5rem;
  `}
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-width: 100%;

  ${responsive.mobile`
    font-size: 0.9rem;
    padding: 0.8rem;
  `}

  ${responsive.tablet`
    font-size: 1rem;
    padding: 0.9rem;
  `}
`;

export const Button = styled.button`
  padding: 15px;
  font-size: 18px;
  color: white;
  background: linear-gradient(to right, #007bff, #0096ff);
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  max-width: 100%;

  &:hover {
    background: #24afff;
  }

  ${responsive.mobile`
    font-size: 16px;
    padding: 12px;
  `}

  ${responsive.tablet`
    font-size: 17px;
    padding: 14px;
  `}
`;
