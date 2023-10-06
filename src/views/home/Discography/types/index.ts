interface ISong {
  name: string
  credits: string
}

export interface IDiscographyData {
  coverObjectIDs: Array<string>
  name: string
  releaseDate: string
  song: Array<ISong>
  stprLink: string
}
