import React from "react";
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from "react-router";
import App from "../ui/containers/App";
import Welcome from "../ui/components/Welcome";
import NowPlaying from "../ui/components/NowPlaying";

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="/now-playing" component={NowPlaying} />
    </Route>
  </Router>
);

export default Routes;
