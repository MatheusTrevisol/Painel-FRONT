import { Container } from "./styles";

import { useState, useEffect } from "react";

import { api } from "../../services/api";

export function Select({ labelText, ...rest }) {
  const [categoriesToShow, setCategoriesToShow] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("/products-categories");

      setCategoriesToShow(response.data);
    }

    fetchCategories();
  }, []);

  return (
    <Container>
      <label>
        {labelText}
      </label>
      <select {...rest}>
        <option value=""></option>
        {
          categoriesToShow &&
          categoriesToShow.map(category => (
            <option key={String(category.id)} value={category.name}>
              {category.name}
            </option>
          ))
        }
      </select>
    </Container>
  );
};