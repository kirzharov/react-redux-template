import React from "react";

import { Book } from "../Book";

import { Wrapper } from "./styled";

export type BooksListProps = {
  books: BookT[];
};

export const BooksList: React.FC<BooksListProps> = ({ books }) => (
  <Wrapper>
    {books.map(book => (
      <Book {...book} />
    ))}
  </Wrapper>
);
