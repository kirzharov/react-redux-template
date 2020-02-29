import React from "react";

import { MySpan, MyDiv } from "./styled";

export const MyBlock = ({ text }: { text: string }) => {
  const isShort = text.length > 3;

  return (
    <MyDiv>
      <MySpan isShort={isShort}>{text}</MySpan>
      <MySpan isShort={false}>{text}</MySpan>
    </MyDiv>
  );
};
