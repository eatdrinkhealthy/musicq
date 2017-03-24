// @flow
import React from "react";
import ReactPlayer from "react-player";

const Player = (): React$Element<*> => (
  <div className="flex-video player">
    <ReactPlayer url="https://www.youtube.com/watch?v=uUcEGOLfUTE" playing={false} controls />
  </div>
);

export default Player;
