import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 8px;

  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  img {
    width: ${(props) => (props.isCollapsed ? "5rem" : "10rem")};
    height: ${(props) => (props.isCollapsed ? "5rem" : "10rem")};
    width: 100%;
    object-fit: contain;
  }

  div > span {
    color: ${({ theme }) => theme.COLORS.GREEN_600};
  }

  h1, span {
    display: ${(props) => (props.isCollapsed ? "none" : "block")};
  }
`;