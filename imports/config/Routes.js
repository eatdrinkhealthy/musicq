import React from "react";
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from "react-router";
import App from "../ui/containers/App";
import Welcome from "../ui/components/Welcome";
import Player from "../ui/components/Player";

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="/player" component={Player} />
    </Route>
  </Router>
);

export default Routes;
