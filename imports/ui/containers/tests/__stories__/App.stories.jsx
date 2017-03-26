// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import App from "../../App";
import Welcome from "../../../components/Welcome";
import NowPlayingContainer from "../../../containers/NowPlayingContainer";

storiesOf("Pages", module)
  .add("App - Welcome", (): React$Element<*> => (
    <App>
      <Welcome />
    </App>
  ))
  .add("App - Now Playing", (): React$Element<*> => (
    <App>
      <NowPlayingContainer />
    </App>
  ));
