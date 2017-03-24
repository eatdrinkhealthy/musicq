// @flow
import React from "react";
import ReactPlayer from "react-player";

type IPlayerProps = {
  nowPlayingUrl: string,
};

const Player = (props: IPlayerProps): React$Element<*> => (
  <div className="flex-video player">
    <ReactPlayer url={props.nowPlayingUrl} playing={false} controls />
  </div>
);

// Please Stand By video (for old time's sake)
Player.defaultProps = { nowPlayingUrl: "https://www.youtube.com/watch?v=dICT42L2gFY" };

export default Player;
