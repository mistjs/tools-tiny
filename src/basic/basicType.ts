// check is string
export const isString = (val: unknown): val is string => typeof val === 'string'

// check is number
export const isNumber = (val: unknown): val is number => typeof val === 'number'

// check is numeric
export const isNumeric = (val: unknown): val is number => isNumber(val) && !isNaN(val)

// check is boolean
export const isBool = (val: unknown): val is boolean => typeof val === 'boolean'

// check is Object
export const isObject = <T extends object>(val: unknown): val is T => Object.prototype.toString.call(val) === '[Object Object]'

// check is Array
export const isArray = <T extends unknown[]>(val: unknown): val is T => Array.isArray(val) && Object.prototype.toString.call(val) === '[Object Array]'

// check is basic Symbol
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

// check is function
export const isFunction = <T extends Function>(val: unknown): val is T => typeof val === 'function'

// check is undefined
export const isUndefined = (val: unknown): val is undefined => typeof val === 'undefined'

// check is null
export const isNull = (val: unknown): val is null => val === null

// check has data
export const hasData = <T>(val: T): val is T => {
  if (isString(val))
    return val.length > 0
  if (isNumeric(val))
    return true
  if (isBool(val))
    return true
  if (isObject(val))
    return true
  if (isArray(val))
    return val.length > 0
  if (isFunction(val))
    return true
  if (isSymbol(val))
    return true
  return false
}
