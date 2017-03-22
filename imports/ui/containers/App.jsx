// @flow
import React from "react";
import Header from "../components/Header";

type IAppProps = {
  children: React$Element<*>,
};

const App = (props: IAppProps): React$Element<*> => {
  const { children, ...otherProps } = props;
  const newChild = React.cloneElement(children, otherProps);

  return (
    <div>
      <Header />
      {newChild}
    </div>
  );
};

export default App;

