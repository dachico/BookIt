import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/bookit-logo.png";
import { logout } from "../../api";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Wrapper,
  Navbar,
  Logo,
  LogoImg,
  SearchContainer,
  SearchInput,
  SearchResults,
  SearchResultItem,
  NavLinks,
  StyledLink,
  LogoutButton,
} from "./NavBar.styles";

const navLogo = logo;

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim()) {
        try {
          const response = await axios.get(
            `/api/v1/users/search?name=${searchQuery}`
          );
          setSearchResults(response.data.data.users);
        } catch (error) {
          console.error("Search failed:", error);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleUserClick = (userId) => {
    navigate(`/user-calendar/${userId}`);
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (err) {
      toast.error("Failed to logout");
    }
  };

  return (
    <Wrapper>
      <Navbar>
        <Logo>
          <Link to="/calendar">
            <LogoImg src={navLogo} alt="logo" />
          </Link>
        </Logo>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchResults.length > 0 && (
            <SearchResults>
              {searchResults.map((user) => (
                <SearchResultItem
                  key={user._id}
                  onClick={() => handleUserClick(user._id)}
                >
                  {user.name}
                </SearchResultItem>
              ))}
            </SearchResults>
          )}
        </SearchContainer>
        <NavLinks>
          <StyledLink to="/me">Profile</StyledLink>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </NavLinks>
      </Navbar>
    </Wrapper>
  );
}

export default NavBar;
