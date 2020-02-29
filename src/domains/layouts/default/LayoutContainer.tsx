import React from "react";

import { LayoutPropsT } from "../types";

import { Wrapper, Header, Main, Footer } from "../styled";

export const LayoutContainer = ({ header, footer, children }: LayoutPropsT) => {
  return (
    <Wrapper>
      <Header>{header}</Header>
      <Main>{children}</Main>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};
