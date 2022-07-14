import styled from "styled-components/macro";

export const FooterWrapper = styled.footer`
  position: relative;
  height: 80px;
  width: 100%;
  display: inline-block;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
