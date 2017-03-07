// @flow
import React from "react";
import { defaultPageStyle } from "../styles";

const Home = () => (
  <div className={defaultPageStyle.className}>
    <h1>Home</h1>
  </div>
);

let a: number = 5;
let b: number = "this and that";
let c: number = a + b;

export default Home;
