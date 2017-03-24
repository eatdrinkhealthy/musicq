// @flow
import React from "react";
import type { IRequest } from "../../data/sampleRequests";

type IRequestProps = {
  request: IRequest,
};

export const Request = (props: IRequestProps): React$Element<*> => (
  <div>
    <span>{props.request.artist} - </span>
    <span>{props.request.title}</span>
  </div>
);


type IRequestsProps = {
  requests: Array<IRequest>,
};

const Requests = (props: IRequestsProps): React$Element<*> => (
  <div>
    <h4>Requests</h4>
    <ul>
      {props.requests.map((request: IRequest): React$Element<*> =>
        (<Request
          key={request.id}
          request={request}
        />))
      }
    </ul>
  </div>
);

export default Requests;
