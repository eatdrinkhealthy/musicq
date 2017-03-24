// @flow
import React, {
  Component,
} from "react";
import Player from "../components/Player";
import RequestsContainer from "./RequestsContainer";

type IState = {
  nowPlayingUrl: string,
};

class NowPlayingContainer extends Component {
  constructor() {
    super();
    this.state = {
      nowPlayingUrl: "",
    };
  }

  state: IState;

  render() {  // eslint-disable-line flowtype/require-return-type
    return (
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
  }
}

export default NowPlayingContainer;
