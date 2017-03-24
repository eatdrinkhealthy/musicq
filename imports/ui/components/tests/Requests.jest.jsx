// @flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import renderer from "react-test-renderer";
import Requests, { Request } from "../Requests";

const sampleRequests = [
  {
    id: "1",
    title: "Jeep's Blues",
    artist: "Duke Ellington",
    songUrl: "https://www.youtube.com/watch?v=uUcEGOLfUTE",
    submittedBy: "smarsh",
  },
  {
    id: "2",
    title: "Ya Mar",
    artist: "The Mustangs",
    songUrl: "https://www.youtube.com/watch?v=uwHR7Pji2cg",
    submittedBy: "smarsh",
  },
  {
    id: "3",
    title: "Gone",
    artist: "The Black Crowes",
    songUrl: "https://www.youtube.com/watch?v=31tXHtPUCUk",
    submittedBy: "smarsh",
  },
  {
    id: "4",
    title: "Franklin's Tower",
    artist: "Grateful Dead",
    songUrl: "https://www.youtube.com/watch?v=6J99HEY67hc",
    submittedBy: "smarsh",
  },
];

describe("<Request />", function () {
  it("matches render snapshot", function () {
    const handleSelectRequest = jest.fn();
    const tree = renderer.create(<Request
      request={sampleRequests[0]}
      nowPlaying={false}
      handleSelectRequest={handleSelectRequest}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<Requests />", function () {
  it("matches render snapshot", function () {
    const handleSelectRequest = jest.fn();
    const tree = renderer.create(<Requests
      requests={sampleRequests}
      handleSelectRequest={handleSelectRequest}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
