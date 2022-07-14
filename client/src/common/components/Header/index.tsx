import React from "react";

import { Props } from "./types";

import { HeaderWrapper, Title } from "./style";

const Header = ({ title }: Props) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};

export default Header;
