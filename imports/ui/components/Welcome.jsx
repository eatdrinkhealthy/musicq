import React from "react";
import { Link } from "react-router";

const Welcome = () => (
  <div>
    <h5>Welcome</h5>
    <Link to="/player">
      <span className="button">Player</span>
    </Link>
    <div className="row">
      <div className="five columns offset-by-three">
        <img src="images/music_note.png" alt="Music Note" className="u-max-full-width" />
      </div>
    </div>
  </div>
);

export default Welcome;
