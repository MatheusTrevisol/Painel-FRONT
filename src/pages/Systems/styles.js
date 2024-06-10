import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-width: 90rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  padding: 2rem;
  gap: 3rem;

  .mainHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  table {
    border-collapse: collapse;

    text-align: left;
    white-space: nowrap;


    thead {
      background: ${({ theme }) => theme.COLORS.BLUE_700};
    }

    th, td {
      min-width: 5rem;      
      max-width: 15rem;
      padding: 2rem;

      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      overflow: hidden;
    }

    tr {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    }

    tbody > tr:hover {
      background: ${({ theme }) => theme.COLORS.BLUE_800};
    }
  }
`;