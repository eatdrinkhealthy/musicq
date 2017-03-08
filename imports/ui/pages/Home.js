// @flow
import React from "react";
import ReactPlayer from "react-player";
import { defaultPageStyle } from "../styles";

const Home = () => (
  <div className={defaultPageStyle.className}>
    <h1>MusicQ</h1>
    <ReactPlayer url="https://www.youtube.com/watch?v=uUcEGOLfUTE" playing={false} controls />
  </div>
);

export default Home;
