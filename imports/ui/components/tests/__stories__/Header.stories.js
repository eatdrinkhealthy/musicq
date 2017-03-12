// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import Header from "../../Header";

storiesOf("Page Sections", module)
  .add("Header", (): React.Element<*> => (<Header />));

