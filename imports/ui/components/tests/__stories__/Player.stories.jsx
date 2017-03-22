// @flow
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import Player from "../../Player";

storiesOf("Page Sections", module)
  .add("Player", (): React$Element<*> => (<Player />));
