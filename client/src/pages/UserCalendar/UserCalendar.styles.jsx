import styled from "styled-components";

export const CalendarHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #f1f1f1;
  max-width: 1200px;
  max-height: 70vh;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 1rem;
  height: 60vh;
`;

export const CalendarContainer = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const MonthYear = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavigationButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

export const DaysOfWeek = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Day = styled.div`
  flex: 1;
  text-align: center;
  padding: 0.5rem 0;
  font-weight: bold;
`;

export const DatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DateBox = styled.div`
  width: calc(100% / 7);
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0;
  background: ${(props) =>
    props.$isSelected ? "#000" : props.$isPast ? "transparent" : "#f9f9f9"};
  color: ${(props) => (props.$isSelected ? "#fff" : "#000")};
  border-radius: 0.5rem;
  cursor: ${(props) => (props.$isPast ? "default" : "pointer")};
  pointer-events: ${(props) => (props.$isPast ? "none" : "auto")};
  transition: background 0.2s;
  &:hover {
    background: ${(props) =>
      !props.$isPast && (props.$isSelected ? "#000" : "#5daafc")};
  }
`;

export const EmptyDateBox = styled.div`
  width: calc(100% / 7);
  height: 4rem;
`;

export const TimeSlotsContainer = styled.div`
  flex: 0.5;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-left: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 70vh;
`;

export const TimeSlotsHeader = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export const TimeSlots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const TimeSlot = styled.div`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #f9f9f9;
  }
`;
