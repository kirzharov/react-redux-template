import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./App.css";

import { Default, SecondLayout } from "./domains/layouts";
import { MenuList } from "./domains/menu";
import { Button } from "./domains/body/Button";
import { BooksList } from "./domains/body/BooksList";

const App: React.FC = () => {
  const [layoutMode, setLayoutMode] = useState(false);

  const Layout = layoutMode ? Default : SecondLayout;

  const bookList = useSelector<RootStore, BookT[]>(state => state.bookList);

  return (
    <div className="App">
      <Layout
        header={<MenuList menuOptions={["one", "two"]} />}
        footer="This is a footer"
      >
        <button onClick={() => setLayoutMode(!layoutMode)}>
          switch layout
        </button>

        <Button />

        {bookList && <BooksList books={bookList} />}
      </Layout>
    </div>
  );
};

export default App;
