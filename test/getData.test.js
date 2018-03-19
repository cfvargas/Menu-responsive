'use strict'

const getData = require('../src/getData')

const data = [{ name: 'seguros', url: 'segures', submenu: [] }]

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => resolve({ json: () => data }))
  })
})

test('Get data', async () => {
  const response = await getData('url')

  expect(response).toEqual(data)
  expect(global.fetch.mock.calls.length).toBe(1)
  expect(global.fetch.mock.calls[0][0]).toBe('url')
})
