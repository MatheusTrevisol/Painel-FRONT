import styled from "styled-components";

export const PaginationContainer = styled.nav`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
    
  .page-item {
    background: white;
  }
  
  .page-link {
    padding: 1rem;
    display: flex;
    
    border: 1px solid gray;

    color: black;
  }

  .active {
    background: gray;
  }
`;