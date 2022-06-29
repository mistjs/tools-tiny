import { describe, expect, it } from 'vitest'
import { isString } from '../src'
describe('basic test', () => {
  it('string type', () => {
    expect(isString('')).toBe(true)
    expect(isString('123')).toBe(true)
    expect(isString('abc')).toBe(true)
    expect(isString(false)).toBe(false)
    expect(isString(1)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
  })
})
