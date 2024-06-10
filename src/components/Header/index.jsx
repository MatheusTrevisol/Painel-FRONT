import { Container, Content, Navbar, Avatar } from "./styles";

import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { InputLabel } from "../InputLabel";
import { DropdownProfile } from "../DropdownProfile";

import { BiSolidBell, BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const logoUrl = user.avatar ? `${api.defaults.baseURL}/files/avatar/${user.avatar}` : avatarPlaceholder; 


  function handleDropdownMenu() {
    setOpen(!open);
  }

  return (
    <Container>
      <Content>
        <InputLabel 
          icon={BsSearch}
          id="searchInput"
          type="text"
          placeholder="Buscar por itens"
        />

        <Navbar id="navbar">   
          <a href="#">
            <BiSolidBell size={26} />
          </a>

          <Avatar open={open} >
            <div id="logoWrapper">
              <img src={logoUrl} alt="Logo da marca" />
            </div>
            <BiChevronDown id="menuChevron" onClick={handleDropdownMenu} />
              
            <DropdownProfile open={open} />
          </Avatar>
        </Navbar>
      </Content>
    </Container>
  )
}