import { useState } from "react";
import { PaginationContainer } from "./styles";

export function Pagination({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itensPerPage = 10;
  const lastIndex = currentPage * itensPerPage;
  const firstIndex = lastIndex - itensPerPage;
  const itens = data.slice(firstIndex, lastIndex);
  const numbersPages = Math.ceil(data.length / itensPerPage);
  const numbers = [...Array(numbersPages + 1).keys()].slice(1);
  
  function prevPage() {
    if(currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if(currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <PaginationContainer>
       <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prevPage}>Prev</a>
              </li>
              {
                numbers.map((number, index) => (
                  <li className={`page-item ${currentPage === number ? "active" : ""}`}>
                    <a href="#" className="page-link" onClick={() => changePage(number)}>{number}</a>
                  </li>
                ))
              }
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>Next</a>
              </li>
            </ul>
    </PaginationContainer>
  );
}