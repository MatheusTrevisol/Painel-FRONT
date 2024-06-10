import { HeaderPageContainer } from "./styles";

import { Button } from "../Button";

import { useNavigate } from "react-router-dom";

export function HeaderPage({ page }) {  
  const navigate = new useNavigate();
  
  function handleBack() {
    navigate(-1);
  }

  return (
    <HeaderPageContainer>
      <h1>{page}</h1>

      <Button title="Voltar" onClick={handleBack} />
    </HeaderPageContainer>
  );
}