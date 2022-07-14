import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MainContainer, LayoutWrapper } from "./style";
import { Props } from "./types";

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
