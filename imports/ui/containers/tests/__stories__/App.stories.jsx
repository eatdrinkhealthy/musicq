// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import App from "../../App";
import Welcome from "../../../components/Welcome";
import Player from "../../../components/Player";

storiesOf("Pages", module)
  .add("App - Welcome", (): React$Element<*> => (
    <App>
      <Welcome />
    </App>
  ))
  .add("App - Player", (): React$Element<*> => (
    <App>
      <Player />
    </App>
  ));
