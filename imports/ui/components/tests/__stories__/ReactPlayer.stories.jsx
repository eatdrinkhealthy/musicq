// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import { text, boolean } from "@kadira/storybook-addon-knobs";
import ReactPlayer from "react-player";
import Player from "../../NowPlaying";

storiesOf("Components", module)
  .add("ReactPlayer - with controls", (): React$Element<*> => (
    <ReactPlayer
      url={text("URL", "https://www.youtube.com/watch?v=uUcEGOLfUTE")}
      playing={boolean("Playing", false)}
      controls
    />
  ))
  .add("ReactPlayer - without controls", (): React$Element<*> => (
    <ReactPlayer
      url={text("URL", "https://www.youtube.com/watch?v=uUcEGOLfUTE")}
      playing={boolean("Playing", false)}
      controls={false}
    />
  ))
.add("ReactPlayer - in flexbox", (): React$Element<*> => (
  <Player />
));
