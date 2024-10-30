import { sum } from './index'

test('My function sum', () => {
  const result = sum(5, 2)
  expect(result).toBe(7)
})
