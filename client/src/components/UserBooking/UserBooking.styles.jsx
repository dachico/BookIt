import styled from "styled-components";
import { responsive } from "../../styles/responsive";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  ${responsive.mobile`
    width: 90%;
    height: 90%;
    padding: 1rem;
  `}
`;

export const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  max-width: 500px;

  ${responsive.mobile`
    padding: 1rem;
  `}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 600;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  height: 120px;
  resize: none;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${responsive.mobile`
    flex-direction: column;
    gap: 1rem;
  `}
`;

export const Button = styled.button`
  width: 45%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: ${({ $secondary }) => ($secondary ? "#f7c216" : "#007bff")};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ $secondary }) => ($secondary ? "#f7c216" : "#0056b3")};
  }

  ${responsive.mobile`
    width: 100%;
  `}
`;
