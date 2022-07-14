import React from "react";
import { Props } from "./types";
import { FooterWrapper, Description } from "./style";

const Footer = ({ description }:Props) => (
  <FooterWrapper>
    <Description>{description}</Description>
  </FooterWrapper>
);

export default Footer;
