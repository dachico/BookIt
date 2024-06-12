import styled from "styled-components";
import { responsive } from "../../styles/responsive";

export const BookingFormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  ${responsive.mobile`
    padding: 1rem;
    max-width: 100%;
  `}

  ${responsive.tablet`
    padding: 1.5rem;
    max-width: 100%;
  `}
`;

export const BookingForm = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  z-index: 101;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;

  ${responsive.mobile`
    padding: 1rem;
    max-width: 70%;
  `}

  ${responsive.tablet`
    padding: 1.5rem;
    max-width: 65%;
  `}
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${responsive.mobile`
    padding: 1rem;
    max-width: 90%;
  `}

  ${responsive.tablet`
    padding: 1.5rem;
    max-width: 80%;
  `}
`;

export const Label = styled.label`
  font-weight: 600;
  color: #3a3a3a;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;

  ${responsive.mobile`
    font-size: 0.9rem;
  `}

  ${responsive.tablet`
    font-size: 0.95rem;
  `}
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  height: 100px;
  resize: none;

  ${responsive.mobile`
    font-size: 0.9rem;
  `}

  ${responsive.tablet`
    font-size: 0.95rem;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  ${responsive.mobile`
    flex-direction: column;
    gap: 0.5rem;
  `}

  ${responsive.tablet`
    flex-direction: column;
    gap: 0.75rem;
  `}
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  flex: 1;

  ${responsive.mobile`
    padding: 0.4rem 0.8rem;
  `}

  ${responsive.tablet`
    padding: 0.45rem 0.9rem;
  `}
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f7a91a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  flex: 1;

  ${responsive.mobile`
    padding: 0.4rem 0.8rem;
  `}

  ${responsive.tablet`
    padding: 0.45rem 0.9rem;
  `}
`;

export const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f73939;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  flex: 1;

  ${responsive.mobile`
    padding: 0.4rem 0.8rem;
  `}

  ${responsive.tablet`
    padding: 0.45rem 0.9rem;
  `}
`;
