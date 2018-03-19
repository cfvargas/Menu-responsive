'use strict'

const createTag = require('../src/createTag')

test('create dom element', () => {
  const link = createTag('a', 'Hola mundo')

  expect(link.tagName).toEqual('A')
  expect(link.innerHTML).toEqual('Hola mundo')
  expect(link.childElementCount).toBe(0)
})
