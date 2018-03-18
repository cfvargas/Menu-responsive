'use strict'

function getData (url) {
  const headers = new window.Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })

  return fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers
  })
    .then(res => res.json())
}

function createTag (name, child) {
  const tag = document.createElement(name)

  if (typeof child === 'string') {
    child = document.createTextNode(child)
  }

  tag.appendChild(child)
  return tag
}

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

const nav = document.getElementById('nav')
const btn = document.getElementById('nav-btn')

function toggleNav () {
  nav.classList.toggle('nav--show')
}

btn.addEventListener('click', toggleNav)

getData('http://localhost:9595/menu')
  .then(data => createList(data, 'nav-list'))
  .then(list => nav.appendChild(list))
