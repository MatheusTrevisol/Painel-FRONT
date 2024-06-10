import { MenuHamburguerContainer } from "./styles";
import { IoMenuOutline } from "react-icons/io5";

export function MenuHamburguer({ onClick }) {
  return (
    <MenuHamburguerContainer>
      <IoMenuOutline size={20} onClick={onClick} />
    </MenuHamburguerContainer>
  );
};