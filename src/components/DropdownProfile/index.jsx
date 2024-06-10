import { DropdownProfileContainer } from "./styles";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

export function DropdownProfile({ open }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <DropdownProfileContainer className={`${open ? "active" : "inactive"}`}>
      <ul>
        <li>
          <NavLink to="/user/profile">Profile</NavLink>
        </li>
        {/* <li>
          <a href="">Settings</a>
        </li> */}
        <li>
          <a href="" onClick={handleSignOut}>Logout</a>
        </li>
      </ul>
    </DropdownProfileContainer>
  );
}