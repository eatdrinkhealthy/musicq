// @flow

export type IRequest = {
  id: string,
  title: string,
  artist: string,
  songUrl: string,
  submittedBy: string,
};

const sampleRequests: Array<IRequest> = [
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

export default sampleRequests;
