export enum SpecialSetTypes {
  WarmUp = "WarmUp",
  DropSet = "DropSet",
  Failure = "Failure"
}

export const specialSetTypesTitlesMap: {[key: string]: string} = {
  [SpecialSetTypes.WarmUp]: 'Warm up',
  [SpecialSetTypes.DropSet]: 'Drop set',
  [SpecialSetTypes.Failure]: 'Failure',
}

export const specialSetTypesAbbreviationsMap: {[key: string]: string} = {
  [SpecialSetTypes.WarmUp]: 'W',
  [SpecialSetTypes.DropSet]: 'D',
  [SpecialSetTypes.Failure]: 'F',
}

export const specialTypesAsArray = Object.values(SpecialSetTypes);