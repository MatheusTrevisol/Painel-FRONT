import styled from "styled-components";

export const InputLabelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background: none;
  border-radius: 6px;
  background: ${({theme}) => theme.COLORS.PRIMARY_400};

  padding: 10px;
  gap: 1.5rem;

  input {
    width: 100%;

    position: relative;
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.LIGHT_200};

    border-radius: 6px;
    background: transparent;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
  }

  svg {
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    margin-left: 1rem;
  }
  
  label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;