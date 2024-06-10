import { DefaultLayoutContainer } from "./styles";

import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';

import { Sidebar } from "../../components/Sidebar";

export function DefaultLayout() {
  const [ isCollapsed, setIsCollapsed ] = useState(false);
  const links = document.querySelectorAll("h5");

  useEffect(() => {
    if(isCollapsed) {
      links.forEach(link => {
        link.style.display = "none";
      })

      return
    }

    links.forEach(link => {
      link.style.display = "block";
    })    
  }, [isCollapsed])

  return (
    <DefaultLayoutContainer>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <Outlet />
    </DefaultLayoutContainer>
  )
}