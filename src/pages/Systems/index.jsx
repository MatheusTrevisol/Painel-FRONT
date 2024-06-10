import { Container } from "./styles";
import { Header } from "../../components/Header";
import { TableInterface } from "../../components/TableInterface";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api"; 

export function Systems() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const columns = ["id", "name", "img_url"];

  useEffect(() => {
    async function fetchSystems() {
      const result = await api.get("/systems");
      setData(result.data)
    }

    fetchSystems();
  }, []);

  const handleEditSystem = (id) => {
    navigate(`/systems/edit-system/${id}`)
  };

  return (
    <Container >
      <Header />
      
      <TableInterface title="systems" data={data} columns={columns} handleEdit={handleEditSystem}/>
    </Container>
  );
};