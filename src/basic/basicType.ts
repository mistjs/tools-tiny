// check is string
export const isString = (val: unknown): val is string => typeof val === 'string'

// check is number
export const isNumber = (val: unknown): val is number => typeof val === 'number'

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
