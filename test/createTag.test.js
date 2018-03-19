'use strict'

const createTag = require('../src/createTag')

test('create <a>Hola mundo</a>', () => {
  const link = createTag('a', 'Hola mundo')

  expect(link.tagName).toEqual('A')
  expect(link.innerHTML).toEqual('Hola mundo')
  expect(link.childElementCount).toBe(0)
})

test('create <li><a>Hola Mundo</a></li>', () => {
  const link = createTag('a', 'Hola Mundo')
  const li = createTag('li', link)

  expect(li.tagName).toEqual('LI')
  expect(li.childElementCount).toBe(1)
  expect(li.firstElementChild.tagName).toEqual('A')
  expect(li.firstElementChild.innerHTML).toEqual('Hola Mundo')
})
