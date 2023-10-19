type TSong = {
  name: string;
  credits: string;
};

export type TDiscographyData = {
  coverObjectIDs: Array<string>;
  name: string;
  releaseDate: string;
  song: Array<TSong>;
  stprLink: string;
};
