(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

},{"./createTag":2}],2:[function(require,module,exports){
function createTag (name, child) {
  const tag = document.createElement(name)

  if (typeof child === 'string') {
    child = document.createTextNode(child)
  }

  tag.appendChild(child)
  return tag
}

module.exports = createTag

},{}],3:[function(require,module,exports){
'use strict'

function getData (url) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers
  })
    .then(response => response.json())
}

module.exports = getData

},{}],4:[function(require,module,exports){
'use strict'

const createList = require('./createList')
const getData = require('./getData')

const nav = document.getElementById('nav')
const btn = document.getElementById('nav-btn')

function toggleNav () {
  nav.classList.toggle('nav--show')
}

btn.addEventListener('click', toggleNav)

getData('http://localhost:9595/menu')
  .then(data => createList(data, 'nav-list'))
  .then(list => nav.appendChild(list))

},{"./createList":1,"./getData":3}]},{},[4]);
