// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  storiesOf,
  action,
} from "@kadira/storybook";
import Requests, { Request } from "../../Requests";

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

storiesOf("Components", module)
  .add("Request", (): React$Element<*> => (<Request
    request={sampleRequests[0]}
    handleSelectRequest={action("clicked")}
  />))
  .add("Requests", (): React$Element<*> => (<Requests
    requests={sampleRequests}
    handleSelectRequest={action("clicked")}
  />));
