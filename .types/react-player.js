// Hand creating react-player libdef

declare module "react-player" {
  declare type ReactPlayerProps = {
    url: string,
    playing?: boolean,
    loop?: boolean,
    controls?: boolean,
    volume?: number,
    playbackRate?: number,
    width?: number,
    height?: number,
    hidden?: boolean,
    className?: string,
    style?: Object,
    progressFrequency?: number,
    onReady?: Function,
    onStart?: Function,
    onPlay?: Function,
    onProgress?: Function,
    onDuration?: Function,
    onPause?: Function,
    onBuffer?: Function,
    onEnded?: Function,
    onError?: Function,
    soundcloudConfig?: Object,
    vimeoConfig?: Object,
    youtubeConfig?: Object,
    fileConfig?: Object,
  };

  declare export default class ReactPlayer extends React$Component {
  props: ReactPlayerProps;
  }
}
