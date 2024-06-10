import styled from "styled-components";

export const EditDepoimentContainer = styled.section`
  width: 100%;
  min-width: 50rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  padding: 2rem;
  gap: 3rem;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 120rem;
  
  gap: 1rem;
  border-radius: 6px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2.5rem;

  button {
    width: max-content;
    height: max-content;
  }

  .images-container {
    display: flex;

    flex-wrap: wrap;
    gap: 1rem;

  
    img {
      width: 10rem;
      height: 12rem;
    }
  }

  .images-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const InputDiv = styled.div`
  position: relative;
  width: 100%;
  height: 4.6rem;

  background: transparent;
  border: none;

  &:has(#img_url) {
    height: 5.2rem;
  }

  .form-input {
    position: absolute;
    width: 100%;

    padding: 1.2rem 0 1.2rem 1.0rem;
    
    font-size: 1.6rem;
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
    top: 1.2rem;

    font-size: 1.6rem;
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
    display: flex;
    position: absolute;
    bottom: -2rem;
  }
`;