import React from "react";

import { LayoutPropsT } from "../types";

import { Wrapper, Header, Main, Footer } from "../styled";

export const LayoutContainer: React.FC<LayoutPropsT> = ({
  header,
  footer,
  children
}) => (
  <Wrapper>
    <Header>{header}</Header>
    <Main>{children}</Main>
    <Footer>{footer}</Footer>
  </Wrapper>
);
