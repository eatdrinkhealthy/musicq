// @flow
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import NowPlaying from "../../NowPlaying";

storiesOf("Page Sections", module)
  .add("Now Playing", (): React$Element<*> => (<NowPlaying />));
