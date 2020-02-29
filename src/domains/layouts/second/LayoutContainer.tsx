import React from "react";
import { Wrapper, Main, Footer } from "../styled";
import { LayoutPropsT } from "../types";

export const LayoutContainer = ({ footer, children }: LayoutPropsT) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};
