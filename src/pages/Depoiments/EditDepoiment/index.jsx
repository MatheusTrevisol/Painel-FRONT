import { EditDepoimentContainer, Content, Form, InputDiv } from "./styles";

import { useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";

import { handleSaveUpdatedAtInDb } from "../../../helpers/helpers";

import { Header } from "../../../components/Header";
import { HeaderPage } from "../../../components/HeaderPage";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";

import { toast } from "react-toastify";

export function EditDepoiment() {
  const navigate = useNavigate();
  const params = useParams();

  const [ depoiment, setDepoiment] = useState({});

  const [ depoimentAuthor, setDepoimentAuthor] = useState("");
  const [ depoimentText, setDepoimentText] = useState("");
  const [ depoimentRole, setDepoimentRole] = useState("");
  const [ depoimentImage, setDepoimentImage] = useState(null);
  const [ depoimentImageToShow, setDepoimentImageToShow] = useState(null);

  const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm({});

  async function handleUpdate() {
    const updated_at = handleSaveUpdatedAtInDb();

    const fileUploadForm = new FormData();
    fileUploadForm.append('author', depoimentAuthor);
    fileUploadForm.append('text', depoimentText);
    fileUploadForm.append('role', depoimentRole);
    fileUploadForm.append('depoiment', depoimentImage);
    fileUploadForm.append('updated_at', updated_at);

    try {
      await api.put(`/depoiments/${params.id}`, fileUploadForm);

      toast.success("Depoimento atualizado com sucesso!");
      navigate(-1)
    } catch(e) {
      if(e.response) {
        alert(e.response.data.message)
      } else {
        toast.error("Não foi possível atualizar o depoimento, tente novamente");
      }
    }
  }

  async function handleDepoimentImage(e) {
    const file = e.target.files[0];

    setDepoimentImage(file);
  }

  useEffect(() => {
    async function fetchDepoiment() {
      const response = await api.get(`/depoiments/${params.id}`)
      const depoiment = response.data;

      setDepoiment(depoiment);
      setDepoimentAuthor(depoiment.author);
      setDepoimentText(depoiment.text);
      setDepoimentRole(depoiment.role);
      setDepoimentImageToShow(depoiment.img_url);
    }

    fetchDepoiment();    
  }, [])
  return (
    <EditDepoimentContainer>
      <Header />

      <Content>
        <HeaderPage page="Editar Depoimento" />

        <Form onSubmit={handleSubmit(handleUpdate)} >
          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="author" 
              htmlFor="author"
              placeholder=" "
              value={depoimentAuthor}
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
              value={depoimentText}
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
              value={depoimentRole}
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

          <div className="images-button">
            <div className="images-container">
              {
                depoimentImageToShow &&
                <div className="image-item">
                  <img src={`${api.defaults.baseURL}/files/depoiments/${depoimentImageToShow}`} />
                </div>
              }
            </div>

            <Button title="Salvar" />
          </div>
        </Form>
      </Content>
    </EditDepoimentContainer>
  );
}