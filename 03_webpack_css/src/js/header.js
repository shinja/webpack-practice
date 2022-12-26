
console.log('header.js bundled.');
import '../css/style.css'
import '../css/style.scss'

const h = document.createElement('h1')

h.className = 'title'
h.innerHTML = 'Hello Webpack.'

document.body.appendChild(h)