// @flow
import React from "react";

// <img src="/images/music_note.png" alt="music note" />
const Header = (): React.Element<*> => (
  <div>
    <h1>MusicQ</h1>
    <div className="row">
      <div className="six columns">Side A</div>
      <div className="six columns">Side B</div>
    </div>
  </div>
);

export default Header;
