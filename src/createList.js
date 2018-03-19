'use strict'

const createTag = require('./createTag')

function createList (list, className) {
  return list.reduce((acc, item) => {
    const link = createTag('a', item.name)
    link.setAttribute('href', item.url)
    link.setAttribute('class', 'nav-link')

    const li = createTag('li', link)
    li.setAttribute('class', 'nav-item')

    if (item.submenu.length) {
      const submenu = createList(item.submenu, 'nav-submenu')
      li.appendChild(submenu)
    }

    acc.appendChild(li)
    acc.setAttribute('class', className)
    return acc
  }, createTag('ul', ''))
}

module.exports = createList
