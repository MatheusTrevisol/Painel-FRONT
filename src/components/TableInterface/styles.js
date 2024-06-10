import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  gap: 3rem;
  overflow-y: auto;

  .mainHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      text-transform: capitalize;
    }

    .create-delete {
      display: flex;
      gap: 1rem;

      #delete-btn {
        background: ${({ theme }) => theme.COLORS.RED_600};;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        &.hide {
          display: none;
        }

        &.show {
          display: block;
        }
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${({ theme }) => theme.COLORS.PRIMARY_400};
    border-radius: 6px;
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
      
      &.selected {
        background-color: ${({ theme }) => theme.COLORS.BLUE_800};
      }
    }

    tbody > tr:hover {
      background: ${({ theme }) => theme.COLORS.BLUE_800};
    }

    th:nth-child(2),
    .checkbox-th {
      max-width: 4rem;
      width: 4rem;
    }

    .actions-th {
      max-width: 15rem;
      width: 15rem;
    }
  }


  /** PAGINATION */

  nav {
    margin-top: 3rem;
    padding: 1rem;
  }

  .pagination {
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
  }
`;

export const Row = styled.tr`
  background-color: ${(props) => (props.isSelected ? props.theme.COLORS.BLUE_800 : 'transparent')};

  .actions-td {
    display: flex;
    align-items: center;

    gap: 1rem;

    button {
      background: none;
      color: ${({ theme }) => theme.COLORS.PRIMARY_700};
    }
  }
`