// @flow
import React, {
  Component,
} from "react";
import classNames from "classnames";
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
    const requestClasses = classNames("request", { "now-playing": this.props.nowPlaying });

    return (

      <div>
        <input
          type="button"
          className={requestClasses}
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
