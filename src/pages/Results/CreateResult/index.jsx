import { CreateResultContainer, Content, Form, InputDiv } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { Header } from "../../../components/Header";
import { HeaderPage } from "../../../components/HeaderPage";
import { Button } from "../../../components/Button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../services/api";

import { toast } from "react-toastify";

const createResultFormSchema = z.object({
  title: z.string().min(2, "O título é obrigatório"),
  text: z.string().min(2, "O texto é obrigatório"),
});

export function CreateResult() {
  const navigate = useNavigate();
  const [ resultTitle, setResultTitle] = useState("");
  const [ resultText, setResultText] = useState("");

  const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm({
    resolver: zodResolver(createResultFormSchema)
  });

  async function handleCreate() {
    try {
      await api.post("/results", {
        title: resultTitle,
        text: resultText,
      })
    } catch (e) {
      if(e.response) {
        return alert(e.response.data.message)
      } else {
        return ("Não foi possível criar o resultado, tente novamente.")
      }
    }

    toast.success("Resultado criado com sucesso!")
    navigate(-1);
  }

  return (
    <CreateResultContainer>
      <Header />

      <Content>
        <HeaderPage page="Criar Resultado" />
        
        <Form onSubmit={handleSubmit(handleCreate)} >
          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="title" 
              htmlFor="title"
              placeholder=" "
              {...register("title", {
                onChange: (e) => setResultTitle(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="title">Título</label>
            {errors.title && <span className="danger">{errors.title.message}</span>}
          </InputDiv>

          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="text" 
              htmlFor="text"
              placeholder=" "
              {...register("text", {
                onChange: (e) => setResultText(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="text">Texto</label>
            {errors.text && <span className="danger">{errors.text.message}</span>}
          </InputDiv>
        
          <Button title="Criar" />
        </Form>
      </Content>
    </CreateResultContainer>
  );
}