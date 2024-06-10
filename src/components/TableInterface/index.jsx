import { Container, Row } from "./styles";
import { useState } from "react";

import { Button }  from "../Button";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

import { toast } from "react-toastify";
import { api } from "../../services/api";

export function TableInterface({ title, data, columns, handleEdit }) {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set());

  /**PAGINATION */
  const [currentPage, setCurrentPage] = useState(1);
  const itensPerPage = 8;
  const lastIndex = currentPage * itensPerPage;
  const firstIndex = lastIndex - itensPerPage;
  const numbersPages = Math.ceil(items.length / itensPerPage);
  const numbers = [...Array(numbersPages + 1).keys()].slice(1);

  function prevPage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if(currentPage !== numbersPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  /**END PAGINATION */
  
  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = new Set(prevSelectedItems);

      if (newSelectedItems.has(id)) {
        newSelectedItems.delete(id);
      } else {
        newSelectedItems.add(id);
      }
      return newSelectedItems;
    });
  };

  async function handleDeleteOne(id) {
    const confirmDelete = confirm("Você tem certeza que deseja deletar o item selecionado?");

    if(confirmDelete) {
      await api.delete(`/${title}/${id}`)

      setItems((prevItems) => prevItems.filter(item => item.id !== id));  
      setSelectedItems(new Set());
    
      return toast.success("Item excluído com sucesso.")
    }
  };

  async function handleDeleteMany() {
    const confirmDelete = confirm("Você tem certeza que deseja deletar os items selecionados?");

    if(confirmDelete) {
      /* se houver apenas um selecionado */
      if(selectedItems.size === 1) {
        const id = selectedItems.values().next().value;

        setItems((prevItems) => prevItems.filter(item => !selectedItems.has(item.id)));  
        setSelectedItems(new Set());

        await api.delete(`/${title}/${id}`)

        /* se houver mais de um */
      } else {
        let idsArray = Array.from(selectedItems);

        await api.delete(`/${title}/multiple/${idsArray}`)
  
        setItems((prevItems) => prevItems.filter(item => !selectedItems.has(item.id)));  
        setSelectedItems(new Set());
      }

      return toast.success("Itens excluídos com sucesso.")
    }
  };

  function handleCreateNew() {
    navigate(`/${title}/create`)
  }

  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <Container>
      <div className="mainHeader">
        <h1>{title}</h1>

        <div className="create-delete">
          <Button id="delete-btn" title="Deletar Selecionados" className={selectedItems.size > 0 ? 'show' : 'hide'} onClick={handleDeleteMany} />
          {
            title &&
            <Button title="Criar Novo" onClick={handleCreateNew} />
          }
        </div>
      </div>
      
      <div className="content">
        <table>
          <thead>
            <tr>
              <th className="checkbox-th">#</th>
              {
                columns.map((column, index) => (
                  <th key={String(index)}>{column}</th>
                ))
              }
              <th className="actions-th">actions</th>
            </tr>
          </thead>
          
          <tbody>
            {
              items &&
              items.slice(firstIndex, lastIndex).map(item => (
                <Row key={String(item.id)} className={selectedItems.has(item.id) ? 'selected' : ''}>
                  <td>
                    <input
                      type="checkbox"
                      className="input"
                      checked={selectedItems.has(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                  {
                    columns.map((column, index) => {
                     return (                      
                      <td key={String(index)}>
                        {item[column]}
                      </td>                      
                     )
                    })
                  }
                  <td className="actions-td">
                    <button className="edit-btn" type="button" onClick={() => handleEdit(item.id)}>
                      <FaPencil size={20} />
                    </button>
                    <button className="delete-btn" type="button" onClick={() => handleDeleteOne(item.id)}>
                      <FaTrash size={20} />
                    </button>
                  </td>
                </Row>
              ))
            }
          </tbody>
        </table>

        {
          numbersPages > 1 &&
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prevPage}>Prev</a>
              </li>
              {
                numbers.map((number, index) => (
                  <li className={`page-item ${currentPage === number ? "active" : ""}`} key={String(index)}>
                    <a href="#" className="page-link" onClick={() => changePage(number)}>{number}</a>
                  </li>
                ))
              }
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>Next</a>
              </li>
            </ul>
          </nav>
        }
      </div>
    </Container>
  );
}