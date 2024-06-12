import { useState, useEffect, useContext } from "react";
import { MdEdit } from "react-icons/md";
import NavBar from "../../components/NavBar/NavBar";
import {
  updateUserDetails,
  updateUserPassword,
  updateUserSettings,
} from "../../api";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import { BookingContext } from "../../contexts/BookingContext";
import {
  Main,
  Container,
  Content,
  SidebarLink,
  Sidebar,
  Header,
  Form,
  FormGroup,
  Label,
  InputWrapper,
  Input,
  EditIcon,
  Select,
  SaveButton,
} from "./Profile.styles";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setOpeningHour, setClosingHour } = useContext(BookingContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordCurrent, setpasswordCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [editField, setEditField] = useState(null);
  const [openingHour, setOpeningHourState] = useState(7);
  const [closingHour, setClosingHourState] = useState(19);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setOpeningHourState(user.openingHour || 7);
      setClosingHourState(user.closingHour || 19);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editField === "name" || editField === "email") {
        await updateUserDetails({ name, email });
        toast.success("Settings updated successfully");
      }

      if (passwordCurrent && password) {
        await updateUserPassword({ passwordCurrent, password });
        toast.success("Password updated successfully");
      }

      await updateUserSettings({ openingHour, closingHour });
      setUser({ ...user, openingHour, closingHour });
      setOpeningHour(openingHour);
      setClosingHour(closingHour);
      toast.success("Hours updated successfully");
    } catch (error) {
      toast.error("Failed to update settings");
    } finally {
      setEditField(null);
    }
  };

  return (
    <Container>
      <NavBar />
      <Main>
        <Sidebar>
          <SidebarLink to="#">MY SETTINGS</SidebarLink>
          <SidebarLink to="#">MY DETAILS</SidebarLink>
          <SidebarLink to="#">BILLING</SidebarLink>
        </Sidebar>
        <Content>
          <Header>YOUR ACCOUNT SETTINGS</Header>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Name</Label>
              <InputWrapper>
                <Input
                  type="text"
                  placeholder={name}
                  onChange={(e) => setName(e.target.value)}
                  readOnly={editField !== "name"}
                />
                {editField !== "name" && (
                  <EditIcon onClick={() => setEditField("name")}>
                    Change name <MdEdit />
                  </EditIcon>
                )}
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <Label>Email address</Label>
              <InputWrapper>
                <Input
                  type="email"
                  placeholder={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly={editField !== "email"}
                />
                {editField !== "email" && (
                  <EditIcon onClick={() => setEditField("email")}>
                    Change email <MdEdit />
                  </EditIcon>
                )}
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <Label>Current Password</Label>
              <Input
                type="password"
                value={passwordCurrent}
                onChange={(e) => setpasswordCurrent(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>New Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Opening Hour</Label>
              <Select
                value={openingHour}
                onChange={(e) => setOpeningHourState(Number(e.target.value))}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>
                    {`${String(i).padStart(2, "0")}:00`}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Closing Hour</Label>
              <Select
                value={closingHour}
                onChange={(e) => setClosingHourState(Number(e.target.value))}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>
                    {`${String(i).padStart(2, "0")}:00`}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <SaveButton type="submit">SAVE SETTINGS</SaveButton>
          </Form>
        </Content>
      </Main>
    </Container>
  );
};

export default Profile;
