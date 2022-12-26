
console.log('header.js bundled.');
import '../css/style.css'

const h = document.createElement('h1')

h.className = 'title'
h.innerHTML = 'Hello Webpack.'

document.body.appendChild(h)