import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

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

const App: React.FC = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
