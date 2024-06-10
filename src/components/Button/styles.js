import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 3.2rem;

  
  background-color: ${({theme}) => theme.COLORS.GREEN_600};
  border-radius: 6px;
  
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: ${({theme}) => theme.COLORS.PRIMARY_400};
  text-transform: uppercase;
`;