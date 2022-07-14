import React from "react";

import { Props } from "./types";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { MainContainer, LayoutWrapper } from "./style";

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header title={"Work Motion Challenge"} />
      <MainContainer>{children}</MainContainer>
      <Footer description={"@created by Morcos Daniel"} />
    </LayoutWrapper>
  );
};

export default Layout;
