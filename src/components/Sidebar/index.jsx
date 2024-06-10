import { SidebarContainer, NavContainer, LiItens } from "./styles";

import { Logo } from "./Logo";
import { MenuHamburguer } from "../MenuHamburguer";

import { NavLink } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { FaFlag  } from "react-icons/fa";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { FaArrowUpRightDots  } from "react-icons/fa6";
import { BsChatSquareText } from "react-icons/bs";

export function Sidebar({ isCollapsed, setIsCollapsed }) {
  function handleMenuCollapse() {
    setIsCollapsed(!isCollapsed)
  }
  
  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      <MenuHamburguer onClick={() => handleMenuCollapse()} />
      
      <Logo isCollapsed={isCollapsed} />

      <NavContainer isCollapsed={isCollapsed} >
        <ul>
          <div>
            <h4>Pages</h4>
            <LiItens isCollapsed={isCollapsed}>
              <NavLink to="/">
                <CgProfile size={20} />
                <h5>Home</h5>
              </NavLink>
            </LiItens>
            <LiItens isCollapsed={isCollapsed}>              
              <NavLink to="/banners">
                <FaFlag size={20} />
                <h5>Banners</h5>                
              </NavLink>              
            </LiItens>
            <LiItens isCollapsed={isCollapsed}>              
              <NavLink to="/systems">
                <MdSettingsSystemDaydream  size={20} />
                <h5>Sistemas</h5>                
              </NavLink>
            </LiItens>
            <LiItens isCollapsed={isCollapsed}>              
              <NavLink to="/results">
                <FaArrowUpRightDots size={20} />
                <h5>Resultados</h5>                
              </NavLink>
            </LiItens>
            <LiItens isCollapsed={isCollapsed}>              
              <NavLink to="/depoiments">
                <BsChatSquareText size={20} />
                <h5>Depoimentos</h5>                
              </NavLink>
            </LiItens>
          </div>
         
          {/* <div>
            <h4>Clientes</h4>
            <LiItens isCollapsed={isCollapsed}>              
              <NavLink to="/clients">
                <IoMdPeople size={20} />
                <h5>Clientes</h5>                
              </NavLink>
            </LiItens>
            <LiItens isCollapsed={isCollapsed}>              
              <NavLink to="/contact">
                <MdEmail size={20} />
                <h5>Contato</h5>                
              </NavLink>
            </LiItens>
          </div>         */}
        </ul>
      </NavContainer>
    </SidebarContainer>
  );
}