import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    margin-left: -25px;
    border-radius: 50%;
    border: 5px solid #ccc;
    border-top-color: #000;
    animation: ${spin} 0.6s linear infinite;
  }
`;

export default Spinner;
