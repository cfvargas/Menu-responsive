'use strict'

const createList = require('../src/createList')
const data = require('../api/data.json')

describe('create dom list', () => {
  test('create menu without data', () => {
    const list = createList([], 'nav-list')

    expect(list.tagName).toEqual('UL')
    expect(list.className).toBeFalsy()
    expect(list.childElementCount).toBe(0)
  })

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
    const list = createList([data.menu[2]], 'nav-list')
    const submenu = list.getElementsByClassName('nav-submenu')

    expect(list.tagName).toEqual('UL')
    expect(list.className).toEqual('nav-list')

    expect(submenu.length).toBe(3)

    expect(submenu[0].tagName).toEqual('UL')
    expect(submenu[0].className).toEqual('nav-submenu')
    expect(submenu[0].childElementCount).toBe(data.menu[2].submenu.length)
  })
})
