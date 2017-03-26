// @flow
import React from "react";
import Header from "../components/Header";

type IAppProps = {
  children?: React$Element<*>,
};

const App = (props: IAppProps): React$Element<*> => {
  const { children, ...otherProps } = props;
  const newChild = children && React.cloneElement(children, otherProps);

  return (
    <div className="container">
      <Header />
      {newChild}
    </div>
  );
};

App.defaultProps = { children: null };

export default App;

