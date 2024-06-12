import styled from "styled-components";
import { FaCircleCheck } from "react-icons/fa6";
import { responsive } from "../../styles/responsive";

export const CheckBtn = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const NewNotification = styled.div`
  display: flex;
  align-items: center;
  background: #28a745;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

export const AwaitingWrapper = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;

  ${responsive.mobile`
    padding: 0.5rem;
  `}
  ${responsive.tablet`
    padding: 0.75rem;
  `}
  ${responsive.laptop`
    padding: 1rem;
  `}
`;

export const Header = styled.div`
  background: linear-gradient(to right, #007bff, #0096ff);
  color: white;
  padding: 1rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${responsive.mobile`
    padding: 0.5rem;
  `}
  ${responsive.tablet`
    padding: 0.75rem;
  `}
  ${responsive.laptop`
    padding: 1rem;
  `}
`;

export const HeaderText = styled.div`
  font-weight: 700;
  font-size: 1.5rem;

  ${responsive.mobile`
    font-size: 1rem;
  `}
  ${responsive.tablet`
    font-size: 1.25rem;
  `}
  ${responsive.laptop`
    font-size: 1.5rem;
  `}
`;

export const ClientsList = styled.div`
  padding: 1rem;
  background-color: #f9f9f9;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  max-height: 75vh;
  overflow-y: auto;

  ${responsive.mobile`
    padding: 0.5rem;
  `}
  ${responsive.tablet`
    padding: 0.75rem;
  `}
  ${responsive.laptop`
    padding: 1rem;
  `}

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #8f8f8f;
  }
`;

export const Client = styled.div`
  background-color: ${(props) => (props.cleared ? "#c2c2c2" : "#fff")};
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  ${responsive.mobile`
    padding: 0.25rem 0.5rem;
  `}
  ${responsive.tablet`
    padding: 0.5rem 0.75rem;
  `}
  ${responsive.laptop`
    padding: 0.5rem 1rem;
  `}
`;

export const ClientName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.6rem;

  ${responsive.mobile`
    font-size: 0.75rem;
  `}
  ${responsive.tablet`
    font-size: 0.875rem;
  `}
  ${responsive.laptop`
    font-size: 1rem;
  `}
`;

export const ClientTime = styled.div`
  color: #888;
  margin-bottom: 0.4rem;

  ${responsive.mobile`
    font-size: 0.75rem;
  `}
  ${responsive.tablet`
    font-size: 0.875rem;
  `}
  ${responsive.laptop`
    font-size: 1rem;
  `}
`;

export const ClientTimeRemaining = styled.div`
  color: #ff0000;
  font-weight: 600;

  ${responsive.mobile`
    font-size: 0.75rem;
  `}
  ${responsive.tablet`
    font-size: 0.875rem;
  `}
  ${responsive.laptop`
    font-size: 1rem;
  `}
`;

export const ClientTimerMessage = styled.div`
  color: #28a745;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${responsive.mobile`
    font-size: 0.75rem;
  `}
  ${responsive.tablet`
    font-size: 0.875rem;
  `}
  ${responsive.laptop`
    font-size: 1rem;
  `}
`;

export const CheckIcon = styled(FaCircleCheck)`
  color: #28a745;
  cursor: pointer;
  margin-left: 1rem;

  height: 5rem;

  ${responsive.mobile`
    font-size: 0.75rem;
  `}
  ${responsive.tablet`
    font-size: 0.875rem;
  `}
  ${responsive.laptop`
    font-size: 1rem;
  `}

  &:hover {
    color: #218838;
  }
`;
