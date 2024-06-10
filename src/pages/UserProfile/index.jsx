import { UserProfileContainer, Header, Form, Avatar } from "./styles";

import { useState } from "react";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { Button } from "../../components/Button";
import { InputLabel } from "../../components/InputLabel";

import { FiCamera, FiMail, FiLock, FiUser } from 'react-icons/fi';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useNavigate } from "react-router-dom";

export function UserProfile() {
  const navigate = new useNavigate();
  const { user,  updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/avatar/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdateProfile() {
    const updated = { 
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });

    setOldPassword("");
    setNewPassword("");
  }

  async function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const avatarPreview = URL.createObjectURL(file);
    setAvatar(avatarPreview)
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <UserProfileContainer>
      <Header>
        <Button title="Voltar" onClick={handleBack} />
      </Header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do Avatar" />

          <label htmlFor="avatarInput">
            <FiCamera size={24} />

            <input
              id="avatarInput"
              type="file"
              onChange={e => handleChangeAvatar(e)}
            />
          </label>
        </Avatar>

        <InputLabel 
          icon={FiUser}
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        
        <InputLabel 
          icon={FiMail}
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <InputLabel 
          icon={FiLock}
          type="password"
          placeholder="Senha"
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
        />

        <InputLabel 
          icon={FiLock}
          type="password"
          placeholder="Nova senha"          
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button
          type="button"
          title="Salvar"
          onClick={handleUpdateProfile}
        />
      </Form>
    </UserProfileContainer>
  )
}