function createTag (name, child) {
  const tag = document.createElement(name)

  if (typeof child === 'string') {
    child = document.createTextNode(child)
  }

  tag.appendChild(child)
  return tag
}

module.exports = createTag
