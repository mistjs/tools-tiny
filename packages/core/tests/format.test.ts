import { describe, expect, it } from 'vitest'
import { pathToHump } from '../src/format/path-to-hump'
describe('format test', () => {
  it('format', () => {
    expect(pathToHump('a/b/c')).toBe('ABC')
  })
})
