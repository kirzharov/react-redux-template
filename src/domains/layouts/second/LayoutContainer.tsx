import React from "react";
import { Wrapper, Main, Footer } from "../styled";
import { LayoutPropsT } from "../types";

export const LayoutContainer: React.FC<LayoutPropsT> = ({
  footer,
  children
}: LayoutPropsT) => (
  <Wrapper>
    <Main>{children}</Main>
    <Footer>{footer}</Footer>
  </Wrapper>
);
