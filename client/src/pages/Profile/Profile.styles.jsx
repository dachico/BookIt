import styled from "styled-components";
import { responsive } from "../../styles/responsive";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7fa;
  height: 100vh;
  font-family: "Arial", sans-serif;
`;

export const Main = styled.div`
  display: flex;
  width: 80%;
  margin-top: 20px;

  ${responsive.mobile`
    flex-direction: column;
    align-items: center;
    width: 90%;
  `}

  ${responsive.tablet(`
    flex-direction: column;
    align-items: center;
    width: 90%;
  `)}
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(to right, #007bff, #0096ff);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${responsive.mobile`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  `}

  ${responsive.tablet(`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  `)}
`;

export const SidebarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #d4d4d4;
  }
`;

export const Content = styled.div`
  flex: 1;
  background-color: #fff;
  margin-left: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${responsive.mobile`
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  `}

  ${responsive.tablet(`
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  `)}
`;

export const Header = styled.h2`
  font-size: 1.5em;
  color: #007bff;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 1em;
  color: #333;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:read-only {
    background-color: #f0f0f0;
  }
`;

export const EditIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  color: #007bff;
`;

export const Select = styled.select`
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const SaveButton = styled.button`
  padding: 15px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background: linear-gradient(to right, #007bff, #0096ff);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(to right, #0051ff, #0066ff);
  }
`;
