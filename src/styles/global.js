import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: transparent;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  /**TRACK */
  ::-webkit-scrollbar-track {
    background: #e0e0e0;
  }
  
  /**HANDLE */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /**HANDLE ON HOVER */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  body {
    font-size: 1.6rem;
    font-family: "Inter", sans-serif;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_600};

    @media (max-width: 550px) {
      font-size: 1.2rem;
    }
  }

  body, button, input, textarea {
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  button, a {
    cursor: pointer;
    transition: filter 0.2s;    
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;