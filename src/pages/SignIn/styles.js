import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100%;
  min-width: 28rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 10rem;
  
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10rem 2rem;
  
  @media (min-width: 500px) {
    width: 39.5rem;
  };

  .input-separator {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3.2rem;
  }

  > button {
    margin-top: 3.2rem;
  }

  a {
    margin-top: 3.2rem;
    
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;

    outline: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  margin-bottom: 5rem;
  text-align: center;

  > h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > img {
    overflow: visible;
    border-radius: 99px;
  }
`;

export const InputDiv = styled.div`
  position: relative;
  width: 100%;
  height: 5.5rem;

  background: transparent;
  border: none;

  .form-input {
    position: absolute;
    width: 100%;

    padding: 1.5rem 0 1.5rem 1.5rem;
    
    font-size: 1.8rem;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
    
    border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_400};
    
    border-radius: 6px;
    background: transparent;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    &:focus {
      border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
  
  .form-label {
    position: absolute;
    left: 1rem;
    top: 1.6rem;

    font-size: 1.8rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    padding: 0 0.6rem;
    background: ${({theme}) => theme.COLORS.PRIMARY_600};
    transition: 
      top 200ms ease-in,
      left 200ms ease-in,
      font-size 200ms ease-in;
  }

  .form-input:focus ~ .form-label,
  .form-input:not(:placeholder-shown).form-input:not(:focus) ~ .form-label {
    top: -0.9rem;
    font-size: 1.2rem;
  }

  span {
    color: ${({theme}) => theme.COLORS.RED_600};
    position: absolute;
    bottom: -2rem;
  }
`;