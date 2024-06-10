import { CreateDepoimentContainer, Content, Form, InputDiv } from "./styles";

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

const createDepoimentFormSchema = z.object({
  author: z.string().min(3, "O autor é obrigatório"),
  text: z.string().min(3, "O texto é obrigatório"),
  role: z.string().min(3, "O cargo é obrigatório"),
});

export function CreateDepoiment() {
  const navigate = useNavigate();
  const [ depoimentAuthor, setDepoimentAuthor] = useState("");
  const [ depoimentText, setDepoimentText] = useState("");
  const [ depoimentRole, setDepoimentRole] = useState("");
  const [ depoimentImage, setDepoimentImage] = useState(null);

  const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm({
    resolver: zodResolver(createDepoimentFormSchema)
  });

  async function handleCreate() {
    try {
      const fileUploadForm = new FormData();
      
      fileUploadForm.append('author', depoimentAuthor); 
      fileUploadForm.append('text', depoimentText); 
      fileUploadForm.append('role', depoimentRole); 
      fileUploadForm.append('depoiment', depoimentImage); 

      await api.post("/depoiments", fileUploadForm);
    } catch (e) {
      if(e.response) {
        return alert(e.response.data.message)
      } else {
        return ("Não foi possível criar o depoimento, tente novamente.")
      }
    }

    toast.success("Depoimento criado com sucesso!")
    navigate(-1);
  }

  async function handleDepoimentImage(e) {
    const file = e.target.files[0];
    setDepoimentImage(file);
  }

  return (
    <CreateDepoimentContainer>
      <Header />

      <Content>
        <HeaderPage page="Criar Depoimento" />
        
        <Form onSubmit={handleSubmit(handleCreate)} >
          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="author" 
              htmlFor="author"
              placeholder=" "
              {...register("author", {
                onChange: (e) => setDepoimentAuthor(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="author">Autor</label>
            {errors.author && <span className="danger">{errors.author.message}</span>}
          </InputDiv>

          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="text" 
              htmlFor="text"
              placeholder=" "
              {...register("text", {
                onChange: (e) => setDepoimentText(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="text">Texto</label>
            {errors.text && <span className="danger">{errors.text.message}</span>}
          </InputDiv>

          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="role" 
              htmlFor="role"
              placeholder=" "
              {...register("role", {
                onChange: (e) => setDepoimentRole(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="role">Cargo</label>
            {errors.role && <span className="danger">{errors.role.message}</span>}
          </InputDiv>

          <InputDiv>
            <input
              className="form-input" 
              type="file" 
              id="img_url" 
              htmlFor="img_url"
              {...register("img_url", {
                onChange: handleDepoimentImage,
              })}
            />
            <label className="form-label" htmlFor="img_url">Imagem</label>
            {errors.img_url && <span className="danger">{errors.img_url.message}</span>}
          </InputDiv>

          <Button title="Criar" />
        </Form>
      </Content>
    </CreateDepoimentContainer>
  );
}