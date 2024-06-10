import { CreateSystemContainer, Content, Form, InputDiv } from "./styles";

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

const MAX_FILE_SIZE = 10000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/jfif"];

const createSystemFormSchema = z.object({
  name: z.string().min(3, "O nome é obrigatório"),
  img_url: z.any()
  .refine((files) => files?.length == 1, "Escolha uma imagem por favor.")
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Tamanho máximo da imagem é de: 10MB.`)
  .refine(
    (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
    "Os arquivos aceitos são .jpg, .jpeg, .png .jfif e .webp."
  ),
});

export function CreateSystem() {
  const navigate = useNavigate();
  const [ systemName, setSystemName] = useState("");
  const [ systemImage, setSystemImage] = useState(null);

  const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm({
    resolver: zodResolver(createSystemFormSchema)
  });

  async function handleCreate() {
    try {
      if(systemImage) {
        const fileUploadForm = new FormData();
        
        fileUploadForm.append('name', systemName);        
        fileUploadForm.append('system', systemImage); 
        
        try {
          
          await api.post("/systems", fileUploadForm);
        } catch (error) {
          return alert(e.response.data.message)
        
        }
      }
    } catch (e) {
      if(e.response) {
        return alert(e.response.data.message)
      } else {
        return ("Não foi possível criar o sistema, tente novamente.")
      }
    }

    toast.success("Sistema criado com sucesso!")
    navigate(-1);
  }

  async function handleSystemImage(e) {
    const file = e.target.files[0];
    setSystemImage(file);
  }

  return (
    <CreateSystemContainer>
      <Header />

      <Content>
        <HeaderPage page="Criar Sistema" />
        
        <Form onSubmit={handleSubmit(handleCreate)} >
          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="name" 
              htmlFor="name"
              placeholder=" "
              {...register("name", {
                onChange: (e) => setSystemName(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="name">Nome</label>
            {errors.name && <span className="danger">{errors.name.message}</span>}
          </InputDiv>

          <InputDiv>
            <input
              className="form-input" 
              type="file" 
              id="img_url" 
              htmlFor="img_url"
              {...register("img_url", {
                onChange: handleSystemImage,
              })}
            />
            <label className="form-label" htmlFor="img_url">Imagem</label>
            {errors.img_url && <span className="danger">{errors.img_url.message}</span>}
          </InputDiv>

          <Button title="Criar" />
        </Form>
      </Content>
    </CreateSystemContainer>
  );
}