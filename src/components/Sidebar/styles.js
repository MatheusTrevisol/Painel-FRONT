import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: relative;
  height: 100vh;
  min-width: ${(props) => (props.isCollapsed ? "10rem" : "21rem")};
  background: ${({ theme }) => theme.COLORS.PRIMARY_400};

  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;

  padding: ${(props) => (props.isCollapsed ? "2rem 0" : "2rem 3rem")};

  overflow-x: auto;
`;

export const NavContainer = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: column;
  
  ul {
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: ${(props) => (props.isCollapsed ? "center" : "flex-start")};


    gap: 3rem;

    h4 {
      line-height: 130%;
      color: ${({ theme }) => theme.COLORS.PRIMARY_300};
      font-size: 1.4rem;
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;

      gap: 2rem;
    }
  }
`;

export const LiItens = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  
  justify-content: ${(props) => (props.isCollapsed ? "center" : "flex-start")};
  padding: ${(props) => (props.isCollapsed ? "0" : "0 0 0 1.5rem")};
    
  a { 
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;
    
    font-size: 1.6rem;
    line-height: 130%;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    transition: all 0.2s ease-in;

    &:hover,
    &.active {
      color: ${({ theme }) => theme.COLORS.BLUE_400};
    }   
  }
`;
