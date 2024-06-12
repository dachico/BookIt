import styled from "styled-components";
import { responsive } from "../../styles/responsive";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${responsive.mobile`
    min-width: 100%;
  `}

  ${responsive.tablet`
    min-width: 100%;

  `}
`;

export const LogoImg = styled.img`
  height: 2.5rem;
  ${responsive.mobile`
  height: 1.5rem
  `}
  ${responsive.tablet`
    height: 2rem;
  `}
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 2rem 3rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin-top: 0.5rem;
  height: 0px;
  z-index: 100;

  ${responsive.mobile`
    width: 80%;
    padding: 1.5rem 2rem;
    gap: 10px;
  `}

  ${responsive.tablet`
    width: 60%;
    padding: 1.5rem 2.5rem;
  `}
  ${responsive.laptop`
    width: 80%;
    padding: 2rem 3rem;
  `}
  ${responsive.desktop`
    width: 70%;
    padding: 2rem 4rem;
  `}
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #007bff;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

export const StyledLink = styled(Link)`
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  color: #ffffff;
  background: #007bff;

  &:hover {
    color: #007bff;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  ${responsive.mobile`
        padding: 0.3rem;
    font-size: 0.9rem;
  `}
  ${responsive.tablet`
    padding: 0.5rem;
    font-size: 0.9rem;
  `}
`;

export const LogoutButton = styled.button`
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  color: #ffffff;
  background: #007bff;
  border: none;

  &:hover {
    color: #007bff;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  ${responsive.mobile`
        padding: 0.3rem;
    font-size: 0.9rem;
  `}
  ${responsive.tablet`
    padding: 0.3rem;
    font-size: 0.9rem;
  `}
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 30%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;

  ${responsive.mobile`
    width: 60%;
    padding: 0.5rem;
  `}
  ${responsive.tablet`
    width: 60%;
    padding: 0.7rem;
  `}
  ${responsive.laptop`
    width: 90%;
  `}
  ${responsive.desktop`
    width: 100%;
  `}

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const SearchResults = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;

  ${responsive.mobile`
    width: 50%;
  `}
  ${responsive.tablet`
    width: 40%;
  `}
  ${responsive.laptop`
    width: 95%;
  `}
  ${responsive.desktop`
    width: 100%;
  `}
`;

export const SearchResultItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;
