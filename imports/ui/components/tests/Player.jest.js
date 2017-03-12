// @flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import Player from "../Player";

describe("<Player />", function () {
  it("matches rendered snapshot", function () {
    const tree = renderer.create(<Player />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
