import styled from "styled-components";
import { responsive } from "../../styles/responsive";

export const Body = styled.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #5e5e5e;
  background: #f1f1f1;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
`;

export const BodyWrapper = styled.div`
  padding: 1rem;
  background-color: #e0e0e0;
  flex: 1;
  border-radius: 1rem;
  border-top-right-radius: 0rem;
  border-top-left-radius: 0rem;
`;

export const DaysCol = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  justify-content: center;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;

  ${responsive.mobile`
    font-size: 0.8rem;
  `}

  ${responsive.tablet`
    font-size: 1rem;
  `}

  ${responsive.laptop`
    font-size: 1.1rem;
    margin: 1px;
  `}
`;

export const TimeCol = styled.div`
  width: 4rem;
  margin-left: 0.25rem;
  font-weight: 500;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ccc;

  ${responsive.mobile`
    width: 3rem;
    font-size: 0.7rem;
  `}

  ${responsive.tablet`
    width: 3.5rem;
    font-size: 0.8rem;
  `}

  ${responsive.laptop`
    width: 4rem;
    font-size: 1rem;
  `}
`;

export const WeekRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ccc;
  &:first-child {
    border-top: 1px solid black;
  }
  &:last-child {
    border-bottom: none;
  }

  ${responsive.mobile`
    font-size: 0.6rem;
  `}

  ${responsive.tablet`
    font-size: 0.8rem;
  `}

  ${responsive.laptop`
    font-size: 1rem;
  `}
`;

export const WeekCell = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;

  &:last-child {
    border-right: none;
  }

  ${responsive.mobile`
    height: 3rem;
  `}

  ${responsive.tablet`
    height: 4rem;
  `}

  ${responsive.laptop`
    height:  5rem;
  `}
`;

export const WeekSlot = styled.div`
  width: calc(50% - 4px);
  height: calc(50% - 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$isBooked ? "#28a745" : "#fff")};
  color: #000;
  border: 1px solid #ddd;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 2px;
  border-radius: 1rem;

  &:hover {
    background-color: #a4ebb4;
  }

  ${responsive.mobile`
    font-size: 0.6rem;
    width: calc(50% - 2px);
    height: calc(50% - 2px);
  `}

  ${responsive.tablet`
    font-size: 0.7rem;
    width: calc(50% - 3px);
    height: calc(50% - 3px);
  `}

  ${responsive.laptop`
    font-size: 0.7rem;
    width: calc(50% - 4px);
    height: calc(50% - 4px);
    border-radius: 1rem;
  `}
`;

export const DaysRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #3a3a3a;
  padding: 0.75rem 0;
  border-bottom: 1px solid lightgrey;

  ${responsive.mobile`
    font-size: 0.7rem;
  `}

  ${responsive.tablet`
    font-size: 0.8rem;
  `}

  ${responsive.laptop`
    font-size: 1rem;
  `}
`;
