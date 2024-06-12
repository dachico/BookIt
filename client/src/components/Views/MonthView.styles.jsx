import styled from "styled-components";
import { responsive } from "../../styles/responsive";

export const Body = styled.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #5e5e5e;
  background: #ececec;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  padding: 1rem;
`;

export const BodyWrapper = styled.div`
  padding: 1rem;
  background-color: #e0e0e0;
  flex: 1;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

export const Number = styled.span`
  position: absolute;
  font-size: 0.8rem;
  line-height: 1;
  top: 0.75rem;
  right: 1rem;
  font-weight: 700;

  ${responsive.mobile`
    font-size: 0.7rem;
    height: 1rem;
    width: 1rem;
    top: 0.7rem;
    right: 0.3rem;
  `}
  ${responsive.tablet`
    font-size: 0.75rem;
    height: 1rem;
    width: 1rem;
    top: 0.75rem;
    right: 0.4rem;
  `}

  ${responsive.laptop`
    font-size:0.8rem;
    height: 1rem;
    width: 1rem;
    top: 0.75rem;
    right: 0.6rem;
  `}
`;

export const Cell = styled.div`
  flex-grow: 1;
  flex-basis: calc(100% / 7);
  max-width: calc(100% / 7);
  position: relative;
  height: 5rem;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;
  transition: 0.25s ease-out;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 5px;
  padding: 0.5rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #f9f9f9;
    transition: 0.5s ease-out;
  }

  color: ${(props) => (props.$isDisabled ? "#ccc" : "")};
  pointer-events: ${(props) => (props.$isDisabled ? "none" : "auto")};
  ${(props) =>
    props.$isSelected &&
    `
    position: relative;
    z-index: 1;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 10px;
      padding: 3px; /* adjust this to control the border width */
      background: linear-gradient(45deg, #1a8fff, #53cbf1);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      z-index: -1;
    }
  `}

  ${responsive.mobile`
    height: 3rem;
    padding: 0.3rem;
    font-size: 0.6rem;
  `}

  ${responsive.tablet`
    height: 4rem;
    padding: 0.4rem;
    font-size: 0.7rem;
  `}

  ${responsive.laptop`
    height: 5rem;
    min-width: 2rem
    padding: 0.5rem;
    font-size: 0.8rem;
  `}
`;

export const BookingBadge = styled.div`
  background: linear-gradient(to right, #007bff, #0096ff);
  border-radius: 50%;
  color: white;
  font-size: 0.8rem;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0.5rem;
  left: 0.65rem;

  ${responsive.mobile`
    font-size: 0.5rem;
    height: 0.8rem;
    width: 0.8rem;
    top: 1.7rem;
    left: 0.4rem;
  `}

  ${responsive.tablet`
    font-size: 0.6rem;
    height: 1rem;
    width: 1rem;
    top: 2.4rem;
    left: 0.4rem;
  `}


  ${responsive.laptop`
    height: 1rem;
    width: 1rem;
    font-size: 0.7rem;
    top: 0.6rem;
    left: 0.3rem;
  `}
`;

export const Bg = styled.span`
  font-weight: 700;
  line-height: 1;
  color: #1a8fff;
  opacity: 0;
  font-size: 8rem;
  position: absolute;
  top: -0.2rem;
  right: -0.05rem;
  transition: 0.25s ease-out;
  letter-spacing: -0.07rem;

  &:hover {
    opacity: 0.05;
    transition: 0.5s ease-in;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;
