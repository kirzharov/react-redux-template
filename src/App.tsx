import React from "react";

import "./App.css";

import { List, ClassComponent, FunctionalComponent } from "./lesson";

const App: React.FC = () => {
  return (
    <div className="App">
      <ClassComponent text="text prop" />
      <FunctionalComponent text="text prop" />
      <List text="text prop" />
    </div>
  );
};

export default App;
