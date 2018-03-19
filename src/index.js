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
