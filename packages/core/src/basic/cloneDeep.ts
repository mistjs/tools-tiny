// deep clone an object
export const cloneDeep = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object')
    return obj

  const clone = Object.create(Object.getPrototypeOf(obj))

  for (const key in obj)
    clone[key] = cloneDeep(obj[key])

  return clone
}
