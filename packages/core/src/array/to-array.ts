import { isArray } from '../basic'

export const toArray = <T>(list: T): T[] => {
  if (isArray(list)) return list
  const arr: T[] = []
  return arr
}
