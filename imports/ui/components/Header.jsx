// @flow
import React from "react";
import { Link } from "react-router";

// <img src="/images/music_note.png" alt="music note" />
const Header = (): React$Element<*> => (
  <div className="row header">
    <div className="six columns">
      <h1>MusicQ</h1>
    </div>
    <div className="six columns">
      <Link to="/" className="u-pull-right">
        <div className="burger">
          <div className="burger-bar" />
          <div className="burger-bar" />
          <div className="burger-bar" />
        </div>
      </Link>
    </div>
  </div>
);

export default Header;
