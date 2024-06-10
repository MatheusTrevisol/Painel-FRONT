import { EditBannerContainer, Content, Form, InputDiv } from "./styles";

import { useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";

import { handleSaveUpdatedAtInDb } from "../../../helpers/helpers";

import { Header } from "../../../components/Header";
import { HeaderPage } from "../../../components/HeaderPage";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";

import { toast } from "react-toastify";

export function EditBanner() {
  const navigate = useNavigate();
  const params = useParams();

  const [ banner, setBanner] = useState({});

  const [ bannerTitle, setBannerTitle] = useState("");
  const [ bannerText, setBannerText] = useState("");
  const [ bannerVideo, setBannerVideo] = useState("");

  const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm({});

  async function handleUpdate() {
    const updated_at = handleSaveUpdatedAtInDb();

    const banner = {
      title: bannerTitle,
      text: bannerText,
      video_url: bannerVideo,
      updated_at
    }

    try {
      await api.put(`/banners/${params.id}`, banner);

      toast.success("Banner atualizado com sucesso!");
      navigate(-1);
    } catch(e) {
      if(e.response) {
        alert(e.response.data.message)
      } else {
        toast.error("Não foi possível atualizar o banner, tente novamente");
      }
    }
  }

  useEffect(() => {
    async function fetchBanner() {
      const response = await api.get(`/banners/${params.id}`)
      const banner = response.data;

      setBanner(banner);
      setBannerTitle(banner.title);
      setBannerText(banner.text);
      setBannerVideo(banner.video_url);
    }

    fetchBanner();    
  }, [])
  return (
    <EditBannerContainer>
      <Header />

      <Content>
        <HeaderPage page="Editar Banner" />

        <Form onSubmit={handleSubmit(handleUpdate)} >
          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="title" 
              htmlFor="title"
              placeholder=" "
              value={bannerTitle}
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
              value={bannerText}
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
              id="video" 
              htmlFor="video"
              placeholder=" "
              value={bannerVideo}
              {...register("video_url", {
                onChange: (e) => setBannerVideo(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="video">Vídeo</label>
            {errors.video && <span className="danger">{errors.video.message}</span>}
          </InputDiv>

          <Button title="Salvar" />
        </Form>
      </Content>
    </EditBannerContainer>
  );
}