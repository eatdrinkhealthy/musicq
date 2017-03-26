// @flow
import React from "react";
import requests from "../../data/sampleRequests";
import Requests from "../components/Requests";

type IRequestsContainerProps = {
  handleSelectRequest: (nextReqUrl: string) => void,
};

const RequestsContainer = (props: IRequestsContainerProps): React$Element<*> => (
  <div>
    <Requests requests={requests} handleSelectRequest={props.handleSelectRequest} />
  </div>
);

export default RequestsContainer;
