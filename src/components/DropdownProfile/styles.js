import styled from "styled-components";

export const DropdownProfileContainer = styled.div`
  position: absolute;

  background: ${({ theme }) => theme.COLORS.LIGHT_100};
  bottom: -9rem;
  right: 0;
  z-index: 999;

  border-radius: 2px;

  &.inactive {
    transform: translateY(-1rem);
    visibility: hidden;
    max-height: 0;
    transition: transform 0.5s ease;
  }

  &.active {
    transform: translateY(0);
    visibility: visible;
    max-height: none;
    transition: transform 0.5s ease;
  }

  &::before {
    content: "";
    position: absolute;
    height: 6px;
    width: 6px;
    background: white;
    top: -3px;
    right: 6px;
    background: ${({ theme }) => theme.COLORS.LIGHT_100};

    transform: rotate(45deg);
  }

  ul {
    width: 12rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.2rem 2rem;

    gap: 1rem;

    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.BLUE_600};

      &:hover {
        font-size: 1.6rem;
        transition: font-size 0.1s ease-in;
      }
    }
  }
`;