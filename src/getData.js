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
