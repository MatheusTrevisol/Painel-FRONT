import styled from "styled-components";

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;
`;

export const Header = styled.header`
  width: 100%;
  padding: 4rem;
  background: ${({ theme }) => theme.COLORS.PRIMARY_500};
`;

export const Form = styled.form`
  width: 100%;
  max-width: 56rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateY(-10rem);

  gap: 1rem;
  padding: 0 6rem;

  div:nth-child(3) {
    margin-bottom: 2rem;
  }

  > button {
    align-self: flex-start;
    margin-top: 1rem;
  }
`;

export const Avatar = styled.div`
  width: 14rem;
  height: 14rem;
  position: relative;
  border-radius: 999px;
  background: ${({ theme }) => theme.COLORS.PRIMARY_400};

  margin-bottom: 3rem;

  img {
    width: 14rem;
    height: 14rem;
    border-radius: 999px;
    object-fit: contain;
  }

  label {
    position: absolute;
    bottom: 6px;
    right: -6px;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.PRIMARY_400};
    background: ${({ theme }) => theme.COLORS.PRIMARY_300};

    padding: 1rem;
    border-radius: 999px;

    cursor: pointer;
    > input {
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
    }
  }
`;