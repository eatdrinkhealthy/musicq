// @flow
import React from "react";
import ReactPlayer from "react-player";
import RequestsContainer from "../containers/RequestsContainer";

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
        <RequestsContainer />
      </div>
    </div>
  </div>
);

export default Player;
