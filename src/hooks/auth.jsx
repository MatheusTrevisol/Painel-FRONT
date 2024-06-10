import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", {email, password});

      const { user, token } = response.data;

      localStorage.setItem("@admin-painel:user", JSON.stringify(user));
      localStorage.setItem("@admin-painel:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({user, token});
    } catch (error) {      
      if(error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    };
  };

  function signOut() {
    localStorage.removeItem("@admin-painel:user");
    localStorage.removeItem("@admin-painel:token");

    setData({});
  };

  async function updateProfile({ user, avatarFile }) {
    if(avatarFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("avatar", avatarFile);

      const response = await api.patch("users/avatar", fileUploadForm);
      user.avatar = response.data.avatar;
    }

    try {
      await api.put("/users", user);

      localStorage.setItem("@admin-painel:user", JSON.stringify(user))

      setData({ user, token: data.token});

      alert("Perfil atualizado com sucesso!")
    } catch(e) {
      if(e.response) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível atualizar o usuário");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@admin-painel:user");
    const token = localStorage.getItem("@admin-painel:token");

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        user: JSON.parse(user),
        token
      })
    };
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
};

export {
  AuthProvider,
  useAuth
}