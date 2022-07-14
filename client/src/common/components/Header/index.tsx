import React from "react";
import { HeaderWrapper, Title } from "./style";
import { Props } from "./types";

const Header = ({ title }: Props) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};

export default Header;
