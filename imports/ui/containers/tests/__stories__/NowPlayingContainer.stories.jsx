// @flow
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import NowPlayingContainer from "../../NowPlayingContainer";

storiesOf("Page Sections", module)
  .add("Now Playing", (): React$Element<*> => (<NowPlayingContainer />));
