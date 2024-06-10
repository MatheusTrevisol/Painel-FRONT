import { ButtonContainer } from "./styles";

export function Button({ onClick, title, ...rest }) {
  return (
    <ButtonContainer
      onClick={onClick}
      {...rest}
    >
      {title}
    </ButtonContainer>
  );
};