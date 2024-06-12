import styled from "styled-components";
import { responsive } from "../../styles/responsive";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  padding: 1rem 0;
  background: linear-gradient(to right, #007bff, #0096ff);
  color: white;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;

  ${responsive.mobile`
  gap: 0;
  `}
`;

export const Col = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;

  ${responsive.mobile`
    flex-direction: column;
    gap: 0.5rem
  `}
`;

export const ColStart = styled(Col)`
  justify-content: flex-start;
  text-align: left;
  padding: 0 0.5rem;
  gap: 0.5rem;
  font-size: 1.2rem;

  ${responsive.mobile`
    font-size: 1rem;
    gap: 0.2rem;
    flex-direction: row;
  `}

  ${responsive.tablet`
    font-size: 1.1rem;
    gap: 0.4rem;
  `}
`;

export const ColCenter = styled(Col)`
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  padding-right: 0.5rem;

  ${responsive.mobile`
    font-size: 1.2rem;
  `}

  ${responsive.tablet`
    font-size: 1.3rem;
  `}
`;

export const ColEnd = styled(Col)`
  justify-content: flex-end;
  text-align: right;
  padding: 0 0.5rem;

  ${responsive.mobile`
    justify-content: center;
  `}
`;

export const Icon = styled.button`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  padding: 0.25rem;
  background-color: #ffffff;
  color: #0051ff;
  border-radius: 50%;
  border: none;
  line-height: 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  ${responsive.mobile`
    font-size: 0.8rem;
    padding: 0.2rem;
  `}

  ${responsive.tablet`
    font-size: 0.9rem;
    padding: 0.2rem;
  `}
`;

export const Button = styled.button`
  margin: 0 0.5rem;
  padding: 0.25rem 0.65rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.7rem;
  background: none;
  color: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  ${responsive.mobile`
    font-size: 0.8rem;
    margin: 0 0.3rem;
    padding: 0.2rem 0.5rem;
  `}

  ${responsive.tablet`
    font-size: 0.9rem;
    margin: 0 0.4rem;
    padding: 0.2rem 0.6rem;
  `}
`;

export const TodayBtn = styled(Button)`
  background-color: white;
  color: #007bff;
  font-weight: 700;
`;

export const MonthBtn = styled(Button)`
  background-color: #f73939;
`;
export const WeekBtn = styled(Button)`
  background-color: #f7a91a;

  ${responsive.tablet`
    display: none;
  `}

  ${responsive.mobile`
    display: none;
  `}
`;
export const DayBtn = styled(Button)`
  background-color: #21c221;
`;
