import styled from "styled-components";
import { responsive } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #f1f1f1;
  padding: 1rem;
  width: 80%;
  margin: 0 auto;

  ${responsive.mobile`
    flex-direction: column;
    width: 90%;
  `}

  ${responsive.laptop`
    flex-direction: row;
  `}
`;

export const CalendarWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  flex: 5;

  ${responsive.mobile`
    padding: 0.5rem;
    margin-bottom: 1rem;
  `}

  ${responsive.laptop`
    padding: 1rem;
  `}
`;

export const AwaitingWrapper = styled.div`
  flex: 1;
  margin-left: 1rem;

  ${responsive.mobile`
    display: none;
  `}

  ${responsive.tablet`
    display: block;
  `}

  ${responsive.laptop`
    display: block;
  `}
`;
