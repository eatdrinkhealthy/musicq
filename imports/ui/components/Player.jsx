// @flow
import React from "react";
import ReactPlayer from "react-player";

const Player = (): React$Element<*> => (
  <div>
    <br />
    <div className="row">
      <div className="eight columns offset-by-one">
        <div className="flex-video player">
          <ReactPlayer url="https://www.youtube.com/watch?v=uUcEGOLfUTE" playing={false} controls />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="eight columns offset-by-one">
        <h4>Requests</h4>
      </div>
    </div>
  </div>
);

export default Player;
