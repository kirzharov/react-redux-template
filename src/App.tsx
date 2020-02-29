import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";

import { Default, SecondLayout } from "./domains/layouts";
import { MenuList } from "./domains/menu";

import {
  List,
  ClassComponent,
  FunctionalComponent,
  Navigation,
  NotFound
} from "./lesson";

type PrivateRoutePropsT = {
  path: string;
  predicate: (args: any) => boolean;
  valueToBeChecked: any;
  SuccessRoute: any;
  FailureRoute: any;
};

const PrivateRoute = ({
  path,
  predicate,
  valueToBeChecked,
  SuccessRoute,
  FailureRoute
}: PrivateRoutePropsT) => {
  return (
    <Route path={path}>
      {predicate(valueToBeChecked) ? <SuccessRoute /> : <FailureRoute />}
    </Route>
  );
};

const coolTheme = { red: "red", green: "green" };

const App: React.FC = () => {
  const [layoutMode, setLayoutMode] = useState(false);

  const Layout = layoutMode ? Default : SecondLayout;

  return (
    <div className="App">
      <Layout
        header={<MenuList menuOptions={["one", "two"]} />}
        footer="This is a footer"
      >
        <button onClick={() => setLayoutMode(!layoutMode)}>
          switch layout
        </button>
        <ThemeProvider theme={coolTheme}>
          <Router>
            <Navigation />
            <Switch>
              <Route path="/list">
                <ClassComponent text="text prop" />
                <List text="routered" />
              </Route>

              <PrivateRoute
                path="/fc/:id"
                predicate={arg => arg === "auth"}
                valueToBeChecked={localStorage.getItem("isAuth")}
                SuccessRoute={() => (
                  <FunctionalComponent text="I am the functional component" />
                )}
                FailureRoute={() => <NotFound />}
              />

              <Route path="*" children={<NotFound />} />
            </Switch>
          </Router>
        </ThemeProvider>
      </Layout>
    </div>
  );
};

export default App;
