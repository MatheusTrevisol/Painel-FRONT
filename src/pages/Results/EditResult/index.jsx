import { EditResultContainer, Content, Form, InputDiv } from "./styles";

import { useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";

import { handleSaveUpdatedAtInDb } from "../../../helpers/helpers";

import { Header } from "../../../components/Header";
import { HeaderPage } from "../../../components/HeaderPage";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";

import { toast } from "react-toastify";

export function EditResult() {
  const navigate = useNavigate();
  const params = useParams();

  const [ result, setResult] = useState("");
  const [ resultTitle, setResultTitle] = useState("");
  const [ resultText, setResultText] = useState("");

  const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm({});

  async function handleUpdate() {
    const updated_at = handleSaveUpdatedAtInDb();

    const result = {
      title: resultTitle,
      text: resultText,
      updated_at
    }

    try {
      await api.put(`/results/${params.id}`, result);

      toast.success("Resultado atualizado com sucesso!");
      navigate(-1);
    } catch(e) {
      if(e.response) {
        alert(e.response.data.message)
      } else {
        toast.error("Não foi possível atualizar o resultado, tente novamente");
      }
    }
  }

  useEffect(() => {
    async function fetchResult() {
      const response = await api.get(`/results/${params.id}`)
      const result = response.data;

      setResult(result);
      setResultTitle(result.title);
      setResultText(result.text);
    }

    fetchResult();    
  }, [])
  return (
    <EditResultContainer>
      <Header />

      <Content>
        <HeaderPage page="Editar Resultado" />

        <Form onSubmit={handleSubmit(handleUpdate)} >
          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="title" 
              htmlFor="title"
              placeholder=" "
              value={resultTitle}
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
              value={resultText}
              {...register("text", {
                onChange: (e) => setResultText(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="text">Texto</label>
            {errors.text && <span className="danger">{errors.text.message}</span>}
          </InputDiv>

          <Button title="Salvar" />
        </Form>
      </Content>
    </EditResultContainer>
  );
}