interface ISong {
  name: string,
  credits: string
}

export type DiscographyType = {
  releaseDate: string,
  name: string,
  coverObjectIDs: string[],
  stprLink: string,
  songs: ISong[]
}