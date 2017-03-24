// @flow
import React, {
  Component,
} from "react";
import type { IRequest } from "../../data/sampleRequests";

type IRequestProps = {
  request: IRequest,
  handleSelectRequest: (nextReqUrl: string) => void,
};

export class Request extends Component {
  props: IRequestProps;

  handleSelectRequest(requestUrl: string) {
    this.props.handleSelectRequest(requestUrl);
  }

  render() {  // eslint-disable-line flowtype/require-return-type
    const request = this.props.request;

    return (
      <div>
        <input
          type="button"
          className="request"
          onClick={(): void => this.handleSelectRequest(request.songUrl)}
          value={`${request.artist} - ${request.title}`}
        />
      </div>
    );
  }
}

type IRequestsProps = {
  requests: Array<IRequest>,
  handleSelectRequest: (nextReqUrl: string) => void,
};

const Requests = (props: IRequestsProps): React$Element<*> => (
  <div>
    <h4>Requests</h4>
    <ul>
      {props.requests.map((request: IRequest): React$Element<*> =>
        (<Request
          key={request.id}
          request={request}
          handleSelectRequest={props.handleSelectRequest}
        />))
      }
    </ul>
  </div>
);

export default Requests;
