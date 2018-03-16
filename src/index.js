'use strict'

function getData (url) {
  const headers = new window.Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })

  return window.fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers
  })
    .then(res => res.json())
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

const nav = document.getElementById('nav')
getData('http://localhost:9000/menu')
  .then(createList)
  .then(list => nav.appendChild(list))

function toggleNav () {
  nav.classList.toggle('nav--show')
}

const btn = document.getElementById('nav-btn')
btn.addEventListener('click', toggleNav)
