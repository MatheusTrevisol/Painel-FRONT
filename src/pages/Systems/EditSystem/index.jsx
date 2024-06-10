import { EditSystemContainer, Content, Form, InputDiv } from "./styles";

import { useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";

import { handleSaveUpdatedAtInDb } from "../../../helpers/helpers";

import { Header } from "../../../components/Header";
import { HeaderPage } from "../../../components/HeaderPage";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";

import { toast } from "react-toastify";

export function EditSystem() {
  const navigate = useNavigate();
  const params = useParams();

  const [ system, setSystem] = useState({});

  const [ systemName, setSystemName] = useState('');
  const [ systemImage, setSystemImage] = useState([]);
  const [ systemImageToShow, setSystemImageToShow] = useState("");

  const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm({});

  async function handleUpdate() {
    const updated_at = handleSaveUpdatedAtInDb();

    const fileUploadForm = new FormData();
    fileUploadForm.append('name', systemName);
    fileUploadForm.append('system', systemImage);
    fileUploadForm.append('updated_at', updated_at);

    try {
      await api.put(`/systems/${params.id}`, fileUploadForm);

      toast.success("Sistema atualizado com sucesso!");
      navigate(-1);
    } catch(e) {
      if(e.response) {
        alert(e.response.data.message)
      } else {
        toast.error("Não foi possível atualizar o sistema, tente novamente");
      }
    }
  }

  async function handleSystemImage(e) {
    const file = e.target.files[0];

    setSystemImage(file);
  }

  useEffect(() => {
    async function fetchSystem() {
      const response = await api.get(`/systems/${params.id}`)
      const system = response.data;

      setSystem(system);
      setSystemName(system.name);
      setSystemImageToShow(system.img_url);
    }

    fetchSystem();    
  }, [])
  return (
    <EditSystemContainer>
      <Header />

      <Content>
        <HeaderPage page="Editar Sistema" />

        <Form onSubmit={handleSubmit(handleUpdate)} >
          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="name" 
              htmlFor="name"
              placeholder=" "
              value={systemName}
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

          <div className="images-button">
            <div className="images-container">
              {
                <div className="image-item">
                  <img src={`${api.defaults.baseURL}/files/systems/${systemImageToShow}`} />
                </div>
              }
            </div>

            <Button title="Salvar" />
          </div>
        </Form>
      </Content>
    </EditSystemContainer>
  );
}