import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

export const Message = styled.p`
  color: green;
  font-size: 16px;
`;

export const Error = styled.p`
  color: red;
  font-size: 16px;
`;
