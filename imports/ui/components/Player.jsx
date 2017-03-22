// @flow
import React from "react";
import ReactPlayer from "react-player";

const Player = (): React$Element<*> => (
  <div>
    <div className="row">
      <div className="eight columns">
        <div className="flex-video">
          <ReactPlayer url="https://www.youtube.com/watch?v=uUcEGOLfUTE" playing={false} controls />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="eight columns">
        <h4>Requests</h4>
      </div>
    </div>
  </div>
);

export default Player;
