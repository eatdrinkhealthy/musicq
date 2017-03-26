// @flow
import React, {
  Component,
} from "react";
import type { IRequest } from "../../data/sampleRequests";

type IRequestProps = {
  request: IRequest,
  nowPlaying: boolean,
  handleSelectRequest: (nextReqUrl: string) => void,
};

export class Request extends Component {
  props: IRequestProps;

  handleSelectRequest(requestUrl: string) {
    this.props.handleSelectRequest(requestUrl);
  }

  render() {  // eslint-disable-line flowtype/require-return-type
    const request = this.props.request;

    const displayString = (this.props.nowPlaying) ?
      `>> ${request.artist} - ${request.title} <<` :
      `${request.artist} - ${request.title}`;

    return (
      <div>
        <input
          type="button"
          className="request"
          onClick={(): void => this.handleSelectRequest(request.songUrl)}
          value={displayString}
        />
      </div>
    );
  }
}

type IRequestsProps = {
  requests: Array<IRequest>,
  handleSelectRequest: (nextReqUrl: string) => void,
};

// TODO - set nowPlaying flag based on if current request is playing
const Requests = (props: IRequestsProps): React$Element<*> => (
  <div>
    <h4>Requests</h4>
    <ul>
      {props.requests.map((request: IRequest): React$Element<*> =>
        (<Request
          key={request.id}
          request={request}
          nowPlaying={false}
          handleSelectRequest={props.handleSelectRequest}
        />))
      }
    </ul>
  </div>
);

export default Requests;
