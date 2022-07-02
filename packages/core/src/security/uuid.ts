import { CHARS } from '../constant'

const v1 = (): string => {
  const chars = CHARS.split('')
  const uuid: string[] = []
  let i = 0
  let r = 0
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
  uuid[14] = '4'
  while (i < 36) {
    if (!uuid[i]) {
      r = 0 | Math.random() * 16
      uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r]
    }
    i++
  }
  return uuid.join('')
}

export const getUuid = (): string => {
  try {
    return crypto?.randomUUID?.()
  }
  catch (e) {
    return v1()
  }
}
