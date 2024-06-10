import { Container } from "./styles";
import { Header } from "../../components/Header";
import { TableInterface } from "../../components/TableInterface";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api"; 

export function Results() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const columns = ["id", "title", "text"];

  useEffect(() => {
    async function fetchResults() {
      const result = await api.get("/results");
      setData(result.data)
    }

    fetchResults();
  }, []);

  const handleEditResult = (id) => {
    navigate(`/results/edit-result/${id}`)
  };

  return (
    <Container >
      <Header />
      
      <TableInterface title="results" data={data} columns={columns} handleEdit={handleEditResult}/>
    </Container>
  );
};