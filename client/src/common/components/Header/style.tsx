import styled from "styled-components/macro";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  display: inline-block;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h1`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
