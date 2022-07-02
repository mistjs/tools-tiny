import { CHARS } from '../constant'

export const randomBetween = (min?: number, max?: number): number => {
  if (min && max)
    return min + Math.floor(Math.random() * (max - min + 1))
  else if (min)
    return min + Math.floor(Math.random() * 100000)
  else
    return Math.floor(Math.random() * 100000)
}

export const random = (len?: number): number => {
  let flag = true
  const length = len || 5
  while (flag) {
    const tmp = Math.random()
    if (tmp > 0.1) {
      flag = false
      return Math.floor(tmp * Math.pow(10, length))
    }
  }
  return Math.floor(Math.random() * Math.pow(10, length))
}

export const randomString = (len?: number): string => {
  const chars = CHARS.split('')
  const length = len || 5
  let str = ''
  for (let i = 0; i < length; i++)
    str += chars[Math.floor(Math.random() * chars.length)]

  return str
}
