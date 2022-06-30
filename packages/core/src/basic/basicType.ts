// check is string
export const isString = (val: unknown): val is string => typeof val === 'string'

// check is number
export const isNumber = (val: unknown): val is number => typeof val === 'number'

// check is numeric
export const isNumeric = (val: unknown): val is number => isNumber(val) && !isNaN(val)

// check is boolean
export const isBool = (val: unknown): val is boolean => typeof val === 'boolean'

// check is Object
export const isObject = <T>(val: T): val is T => Object.prototype.toString.call(val) === '[object Object]'

// check is Array
export const isArray = (val: any): val is any[] => Array.isArray(val) && Object.prototype.toString.call(val) === '[object Array]'

// check is basic Symbol
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

// check is function
export const isFunction = <T extends Function>(val: unknown): val is T => typeof val === 'function'

// check is undefined
export const isUndefined = (val: unknown): val is undefined => typeof val === 'undefined'

// check is null
export const isNull = (val: unknown): val is null => val === null

// check has data
export const hasData = (val: any): boolean => {
  if (isString(val))
    return val.length > 0
  if (isNumeric(val))
    return true
  if (isBool(val))
    return true
  if (isObject(val))
    return Object.keys(val).length > 0
  if (Array.isArray(val))
    return (val as any[]).length > 0
  if (isFunction(val))
    return true
  return !!isSymbol(val)
}

// check is mobile
export const isMobile = (val: unknown): boolean => {
  if (isString(val))
    return /^1[3456789]\d{9}$/.test(val)
  return false
}

// check is email
export const isEmail = (val: unknown): boolean => {
  if (isString(val))
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(val)
  return false
}

// check is url
export const isUrl = (val: unknown): boolean => {
  if (isString(val))
    return /^(http|https):\/\/[^\s]+$/.test(val)
  return false
}

// check is ip
export const isIpv4 = (val: unknown): boolean => {
  if (isString(val))
    return /^(?:(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:1[0-9][0-9]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:2[0-4][0-9])|(?:25[0-5])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))$/.test(val)
  return false
}

// check is ipv6
export const isIpv6 = (val: unknown): boolean => {
  if (isString(val))
    return /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(val)
  return false
}

// check is ssl
export const isSsl = (val: unknown): boolean => {
  if (isString(val))
    return /^https:\/\/[^\s]+$/.test(val)
  return false
}

// check is port
export const isPort = (val: unknown): boolean => {
  if (isString(val) || isNumber(val))
    return /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(String(val))
  return false
}

// check is qq
export const isQq = (val: unknown): boolean => {
  if (isString(val) || isNumber(val))
    return /^[1-9]\d{4,10}$/.test(String(val))
  return false
}

// check is english
export const isEnglish = (val: unknown): boolean => {
  if (isString(val))
    return /^[a-zA-Z]+$/.test(val)
  return false
}

// check is chinese
export const isChinese = (val: unknown): boolean => {
  if (isString(val))
    return /^[\u4E00-\u9FA5]+$/.test(val)
  return false
}

// check is contains special character
export const isContainsSpecialCharacter = (val: unknown): boolean => {
  const en = /[(\s)(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/
  const zh = /[(\·)(\~)(\！)(\￥)(\%)(\……)(\&)(\*)(\（)(\）)(\——)(\【)(\】)(\；)(\：)(\”)(\“)(\’)(\，)(\《)(\。)(\》)(\？)(\、)(\‘)(\’)]+/
  if (isString(val))
    return en.test(val) || zh.test(val)
  return false
}

// check is telephone
export const isTelephone = (val: unknown): boolean => {
  if (isString(val))
    return /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(val)
  return false
}

// check is credit card
export const isCreditCard = (val: unknown): boolean => {
  if (!isString(val)) return false
  const pat = /^[0-9A-Z]+$/
  if (val.length !== 18 || !pat.test(val)) { return false }
  else {
    let ancode
    let ancodevalue
    let total = 0
    const weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]// 加权因子
    const str = '0123456789ABCDEFGHJKLMNPQRTUWXY'
    for (let i = 0; i < val.length - 1; i++) {
      ancode = str.substring(i, i + 1)
      ancodevalue = str.indexOf(ancode)
      total += ancodevalue * weightedfactors[i]
    }
    let logiccheckcode: string | number = 31 - total % 31
    if (logiccheckcode === 31) logiccheckcode = 0
    const Str = '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y'
    const arr = Str.split(',')
    logiccheckcode = arr[logiccheckcode]
    const checkcode = val.substring(17, 18)
    return logiccheckcode === checkcode
  }
}

// check is bank card
export const isBankCard = (val: unknown): boolean => {
  if (!isString(val)) return false
  const lastNum = val.substring(val.length - 1, 1)
  const first15Num = val.substring(0, val.length - 1)
  const newArr = []
  for (let i = first15Num.length - 1; i > -1; i--)
    newArr.push(first15Num.substring(i, 1))

  const arrJiShu = []
  const arrJiShu2 = []
  const arrOuShu = []
  for (let j = 0; j < newArr.length; j++) {
    if ((j + 1) % 2 === 1) {
      if (parseInt(newArr[j]) * 2 < 9)
        arrJiShu.push(parseInt(newArr[j]) * 2)
      else
        arrJiShu2.push(parseInt(newArr[j]) * 2)
    }
    else {
      arrOuShu.push(newArr[j])
    }
  }
  const jishuChild1 = []
  const jishuChild2 = []
  for (let h = 0; h < arrJiShu.length; h++) {
    jishuChild1.push(arrJiShu[h] % 10)
    jishuChild2.push(Math.floor(arrJiShu[h] / 10))
  }
  let sumJiShu = 0
  let sumOuShu = 0
  let sumJiShuChild1 = 0
  let sumJiShuChild2 = 0
  let sumTotal = 0
  for (let m = 0; m < arrJiShu.length; m++)
    sumJiShu += arrJiShu[m]

  for (let n = 0; n < arrOuShu.length; n++)
    sumOuShu += parseInt(arrOuShu[n])

  for (let p = 0; p < jishuChild1.length; p++) {
    sumJiShuChild1 += jishuChild1[p]
    sumJiShuChild2 += jishuChild2[p]
  }
  sumTotal = sumJiShu + sumOuShu + sumJiShuChild1 + sumJiShuChild2
  const k = sumTotal % 10 === 0 ? 10 : sumTotal % 10
  const luhm = 10 - k
  return lastNum === luhm.toString()
}

// check is id card
export const isIdCard = (val: unknown, gender?: 0| 1 | undefined): boolean => {
  if (!isString(val)) return false
  const checker = () => {
    const factorArr = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
    const parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
    const varArray: (string | number)[] = []
    let lngProduct = 0
    let intCheckDigit
    const intStrLen = val.length
    const idNumber = val
    // initialize
    if ((intStrLen !== 15) && (intStrLen !== 18))
      return false

    // check and set value
    for (let i = 0; i < intStrLen; i++) {
      varArray[i] = idNumber.charAt(i)
      if ((varArray[i] < '0' || varArray[i] > '9') && (i !== 17))
        return false
      else if (i < 17)
        varArray[i] = Number(varArray[i]) * factorArr[i]
    }

    if (intStrLen === 18) {
      // check date
      const date8 = idNumber.substring(6, 14)

      if (!/^[0-9]{8}$/.test(date8))
        return false

      const year = Number(date8.substring(0, 4))
      const month = Number(date8.substring(4, 6))
      const day = Number(date8.substring(6, 8))
      const iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (year < 1700 || year > 2500) return false
      if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) iaMonthDays[1] = 29
      if (month < 1 || month > 12) return false
      if (day < 1 || day > iaMonthDays[month - 1]) return false

      // calculate the sum of the products
      for (let i = 0; i < 17; i++)
        lngProduct = lngProduct + Number(varArray[i])

      // calculate the check digit
      intCheckDigit = parityBit[lngProduct % 11]
      // check last digit
      if (varArray[17] !== intCheckDigit)
        return false
    }
    // length is 15
    else {
      // check date
      const date6 = idNumber.substring(6, 12)

      if (!/^[0-9]{6}$/.test(date6))
        return false

      const year = Number(date6.substring(0, 2))
      const month = Number(date6.substring(2, 4))
      const day = Number(date6.substring(4, 6))
      if (!/^\d{2}$/.test(String(year))) return false
      if (month < 1 || month > 12) return false
      if (day < 1 || day > 31) return false
    }
    return true
  }
  if (val && checker()) {
    if (gender === 0 || gender === 1) {
      let sexStr
      let tmp = 0
      if (val.length === 15)
        tmp = Number(val.substring(val.length - 1, val.length))
      else if (val.length === 18)
        tmp = Number(val.substring(val.length - 2, 1))

      if (tmp % 2 === 0)
        sexStr = 0
      else
        sexStr = 1

      if (gender !== sexStr) return false
    }
    return true
  }
  return false
}
