import { InputLabelContainer } from "./styles";

export function InputLabel({ icon: Icon, id: id, labelText, ...rest }) {
  return (
    <InputLabelContainer>
      <label 
        htmlFor={id}
      >
        {labelText}
      </label>

      {Icon && <Icon size={20} />}

      <input 
        id={id} 
        autoComplete="off"
        {...rest}
      />
    </InputLabelContainer>
  );
};