// @flow
import React from "react";
import Player from "./Player";
import RequestsContainer from "../containers/RequestsContainer";

const NowPlaying = (): React$Element<*> => (
  <div>
    <br />
    <div className="row">
      <div className="eight columns offset-by-one">
        <Player />
      </div>
    </div>
    <div className="row">
      <div className="eight columns offset-by-one">
        <RequestsContainer />
      </div>
    </div>
  </div>
);

export default NowPlaying;
