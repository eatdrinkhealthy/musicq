// @flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import NowPlayingContainer from "../NowPlayingContainer";

describe("<NowPlayingContainer />", function () {
  it("matches rendered snapshot", function () {
    const tree = renderer.create(<NowPlayingContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
