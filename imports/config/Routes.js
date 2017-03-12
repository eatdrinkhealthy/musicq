import React from "react";
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from "react-router";
import Main from "../ui/components/Main";
import Welcome from "../ui/components/Welcome";
import Player from "../ui/components/Player";

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Welcome} />
      <Route path="/player" component={Player} />
    </Route>
  </Router>
);

export default Routes;
