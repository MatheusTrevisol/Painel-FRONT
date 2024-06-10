import { LogoContainer } from "./styles";

import { api } from "../../../services/api";

import { useAuth } from "../../../hooks/auth";
import avatarPlaceholder from "../../../assets/avatar_placeholder.svg"

export function Logo({ isCollapsed }) {
  const { user } = useAuth();

  const logoUrl = user.avatar ? `${api.defaults.baseURL}/files/avatar/${user.avatar}` : avatarPlaceholder; 

  return (
    <LogoContainer isCollapsed={isCollapsed} >
      <img src={logoUrl} />

      <div>
        <h1>{user ? user.name : 'oi'}</h1>
        <span>admin</span>
      </div>
    </LogoContainer>
  );
};