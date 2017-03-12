// @flow
import React from "react";
import Header from "./Header";

type IProps = {
  children: React.Element<*>,
};

const Main = (props: IProps): React.Element<*> => (
  <div>
    <Header />
    { React.cloneElement(props.children) }
  </div>
);

export default Main;

