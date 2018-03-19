'use strict'

const createList = require('../src/createList')
const data = require('../api/data.json')

describe('create dom list', () => {
  test('create menu', () => {
    const list = createList([data.menu[0]], 'nav-list')
    const link = list.getElementsByTagName('a')[0]

    expect(list.className).toEqual('nav-list')
    expect(list.tagName).toEqual('UL')

    expect(list.firstElementChild.tagName).toEqual('LI')
    expect(list.firstElementChild.className).toEqual('nav-item')

    expect(link.tagName).toEqual('A')
    expect(link.className).toEqual('nav-link')
    expect(link.getAttribute('href')).toEqual(data.menu[0].url)
    expect(link.innerHTML).toEqual(data.menu[0].name)
  })

  test('create submenu', () => {
    const list = createList([data.menu[1]], 'nav-list')
    const submenu = list.getElementsByClassName('nav-submenu')[0]

    expect(list.tagName).toEqual('UL')
    expect(list.className).toEqual('nav-list')

    expect(submenu.tagName).toEqual('UL')
    expect(submenu.className).toEqual('nav-submenu')
    expect(submenu.childElementCount).toBe(data.menu[1].submenu.length)
  })
})
