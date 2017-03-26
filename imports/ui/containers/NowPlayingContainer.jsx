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
      nowPlayingUrl: "https://www.youtube.com/watch?v=uUcEGOLfUTE",
    };
  }

  state: IState;

  handleSelectRequest(nextRequestUrl: string) {
    this.setState({ nowPlayingUrl: nextRequestUrl });
  }

  render() {  // eslint-disable-line flowtype/require-return-type
    return (
      <div>
        <br />
        <div className="row">
          <div className="eight columns offset-by-one">
            <Player nowPlayingUrl={this.state.nowPlayingUrl} />
          </div>
        </div>
        <div className="row">
          <div className="eight columns offset-by-one">
            <RequestsContainer
              handleSelectRequest={(snr: string): void => this.handleSelectRequest(snr)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NowPlayingContainer;
