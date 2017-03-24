// @flow
import React from "react";
import requests from "../../data/sampleRequests";
import Requests from "../components/Requests";

const RequestsContainer = (): React$Element<*> => (
  <div>
    <Requests requests={requests} />
  </div>
);

export default RequestsContainer;
