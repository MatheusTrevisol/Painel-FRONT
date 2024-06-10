import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  > div:first-child {
    min-width: 30rem;
    width: 50%;
  }
`;

export const Navbar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.4rem;

  > a {
    border-radius: 5px;
  }

  svg {
    color: ${({theme}) => theme.COLORS.LIGHT_200};
  }
`;

export const Avatar = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  gap: 1rem;
  position: relative;

  #logoWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 2rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    img {
      width: 5rem;
      height: 5rem;
      object-fit: contain;
    }
  }

  #menuChevron {
    cursor: pointer;
    transform: ${(props) => props.open ? " rotate(180deg)" : ""};
    transition: transform 70ms ease-in-out;
  }
`;