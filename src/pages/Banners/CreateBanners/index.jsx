import { CreateBannersContainer, Content, Form, InputDiv } from "./styles";

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

const createBannerFormSchema = z.object({
  title: z.string().min(6, "O título é obrigatório"),
  text: z.string().min(6, "O texto é obrigatório"),
  video_url: z.string().min(10, "O vídeo é obrigatório, deve conter no mínimo 10 caracteres"),
});

export function CreateBanners() {
  const navigate = useNavigate();
  const [ bannerTitle, setBannerTitle] = useState("");
  const [ bannerText, setBannerText] = useState("");
  const [ bannerVideo, setBannerVideo] = useState("");

  const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm({
    resolver: zodResolver(createBannerFormSchema)
  });

  async function handleCreate() {
    try {
      await api.post("/banners", {
        title: bannerTitle,
        text: bannerText,
        video_url: bannerVideo,
      })
    } catch (e) {
      if(e.response) {
        return alert(e.response.data.message)
      } else {
        return ("Não foi possível criar o banner, tente novamente.")
      }
    }

    toast.success("Banner criado com sucesso!")
    navigate(-1);
  }

  return (
    <CreateBannersContainer>
      <Header />

      <Content>
        <HeaderPage page="Criar Banner" />
        
        <Form onSubmit={handleSubmit(handleCreate)} >
          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="title" 
              htmlFor="title"
              placeholder=" "
              {...register("title", {
                onChange: (e) => setBannerTitle(e.target.value),
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
                onChange: (e) => setBannerText(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="text">Texto</label>
            {errors.text && <span className="danger">{errors.text.message}</span>}
          </InputDiv>

          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="video_url" 
              htmlFor="video_url"
              placeholder=" "
              {...register("video_url", {
                onChange: (e) => setBannerVideo(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="video_url">Vídeo</label>
            {errors.video_url && <span className="danger">{errors.video_url.message}</span>}
          </InputDiv>
          <Button title="Criar" />
        </Form>
      </Content>
    </CreateBannersContainer>
  );
}