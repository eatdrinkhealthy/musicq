// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import Welcome from "../../Welcome";

storiesOf("Page Sections", module)
  .add("Welcome", (): React$Element<*> => (<Welcome />));

