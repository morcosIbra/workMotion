import styled from "styled-components/macro";

export const EmployeesListWrapper = styled.div`
  margin: auto;
  width: 100%;
  overflow-x:auto;
  > * {
  margin: auto;
  }
`;

export const ErrorMsg = styled.div`
color: ${({ theme }) => theme.colors.error}
`;
