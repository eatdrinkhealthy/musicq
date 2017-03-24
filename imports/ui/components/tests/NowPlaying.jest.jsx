// @flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import NowPlaying from "../NowPlaying";

describe("<NowPlaying />", function () {
  it("matches rendered snapshot", function () {
    const tree = renderer.create(<NowPlaying />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
