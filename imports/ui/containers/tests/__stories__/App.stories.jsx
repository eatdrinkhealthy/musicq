// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import App from "../../App";
import Welcome from "../../../components/Welcome";

storiesOf("Pages", module)
  .add("App", (): React$Element<*> => (
    <App>
      <Welcome />
    </App>
  ));
