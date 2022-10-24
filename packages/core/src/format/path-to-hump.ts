export const normalizePath = (path: string): string => {
  let myPath = path.replace(/\/\//, '/')
  myPath = myPath.replace(/\\/, '/')
  return myPath
}

export const strToHump = (str: string): string => {
  return str.replace(/\_(\w)/g, (all, letter) => {
    return letter.toUpperCase()
  }).replace(/\-(\w)/g, (all, letter) => {
    return letter.toUpperCase()
  }).replace(/\//g, '_')
}

export const pathToDir = (path: string): string => {
  const myPath = normalizePath(path)
  const myPathArr = myPath.split('/')
  if (myPathArr[myPathArr.length - 1].endsWith('.') || myPathArr[myPathArr.length - 1] === '')
    myPathArr.pop()
  return myPathArr.join('/')
}

export const pathToHump = (path: string): string => {
  const myPath = pathToDir(path)
  const myPathArr = myPath.split('/')
  return myPathArr.reduce((prev, curr) => {
    return prev + curr.charAt(0).toUpperCase() + curr.slice(1)
  }, '')
}
