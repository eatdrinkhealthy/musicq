// @flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("<App />", function () {
  it("matches render snapshot - no children", function () {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches render snapshot - with children", function () {
    const tree = renderer.create(<App><div>hello.</div></App>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
