'use strict'

function getData () {
  const headers = new window.Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })

  return window.fetch('http://localhost:9000/menu', {
    method: 'GET',
    mode: 'cors',
    headers
  })
    .then(res => res.json())
    .then(res => res)
}

function createTag (name) {
  const tag = document.createElement(name)

  return (element) => {
    if (typeof element === 'object') {
      tag.appendChild(element)
      return tag
    }

    const child = document.createTextNode(element)
    tag.appendChild(child)

    return tag
  }
}

function createList (list) {
  return list.reduce((acc, item) => {
    const link = createTag('a')(item.name)
    link.setAttribute('href', item.url)
    link.setAttribute('class', 'nav-link')

    const li = createTag('li')(link)
    li.setAttribute('class', 'nav-item')
    const submenu = item.submenu.length && createList(item.submenu)

    if (submenu) {
      li.appendChild(submenu)
    }

    acc.appendChild(li)
    return acc
  }, createTag('ul')(''))
}

getData()
  .then(createList)
  .then(list => document.getElementById('nav').appendChild(list))
