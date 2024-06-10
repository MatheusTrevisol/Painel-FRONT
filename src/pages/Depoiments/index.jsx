import { Container } from "./styles";
import { Header } from "../../components/Header";
import { TableInterface } from "../../components/TableInterface";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api"; 

export function Depoiments() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const columns = ["id", "author", "text", "img_url", "role"];

  useEffect(() => {
    async function fetchDepoiments() {
      const result = await api.get("/depoiments");
      setData(result.data)
    }

    fetchDepoiments();
  }, []);

  const handleEditDepoiment = (id) => {
    navigate(`/depoiments/edit-depoiment/${id}`)
  };

  return (
    <Container >
      <Header />
      
      <TableInterface title="depoiments" data={data} columns={columns} handleEdit={handleEditDepoiment}/>
    </Container>
  );
};