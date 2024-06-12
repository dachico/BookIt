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
    font-size: 0.9rem;
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
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ccc;
    justify-content: center;
    font-size: 0.8rem;
  `}
`;

export const WeekRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

export const DayRow = styled(WeekRow)`
  height: 3rem;

  ${responsive.mobile`
    height: auto;
    flex-direction: column;
    align-items: center;
  `}
`;

export const DayCell = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 4px;
  ${responsive.mobile`
    width: 100%;
    padding: 0;
  `}
`;

export const DaySlot = styled.div`
  width: calc(25% - 8px);
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$isBooked ? "#28a745" : "#fff")};
  color: #000;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #a4ebb4;
  }
  margin: 2px;

  ${responsive.mobile`
    width: calc(100% - 4px);
    height: 20%;
    margin: 2px 0;
  `}
`;

export const DaysRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #3a3a3a;
  padding: 0.75rem 0;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  ${responsive.mobile`
    flex-direction: column;
  `}
`;
