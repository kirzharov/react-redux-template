import React from "react";

import { Wrapper } from "./styled";

export const Book: React.FC<BookT> = ({
  id,
  title,
  description,
  author,
  year,
  pages,
  isFavorite
}) => (
  <Wrapper>
    <h2>Title: {title}</h2>
    <p>{id}</p>
    <p>{description}</p>
    <p>{author}</p>
    <p>{year}</p>
    <p>{pages}</p>
    <p>{isFavorite}</p>
  </Wrapper>
);
