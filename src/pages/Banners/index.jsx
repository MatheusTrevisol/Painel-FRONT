import { Container } from "./styles";
import { Header } from "../../components/Header";
import { TableInterface } from "../../components/TableInterface";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api"; 

export function Banners() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const columns = ["id", "title", "text", "video_url"];

  useEffect(() => {
    async function fetchBanners() {
      const result = await api.get("/banners");

      setData(result.data)
    }

    fetchBanners();
  }, []);

  const handleEditBanner = (id) => {
    navigate(`/banners/edit-banner/${id}`)
  };

  return (
    <Container >
      <Header />
      
      <TableInterface title="banners" data={data} columns={columns} handleEdit={handleEditBanner}/>
    </Container>
  );
};