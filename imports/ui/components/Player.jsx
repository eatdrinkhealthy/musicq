// @flow
import React from "react";
import ReactPlayer from "react-player";

const Player = (): React$Element<*> => (
  <div>
    <div className="flex-video">
      <ReactPlayer url="https://www.youtube.com/watch?v=uUcEGOLfUTE" playing={false} controls />
    </div>
    <h3>Requests</h3>
  </div>
);

export default Player;
