
import '../css/image.css'
import firefox from '../img/firefox.png'
import forest from '../img/forest.jpg'

const div = document.createElement('div')

div.className = 'bg-el'

const img = new Image()
img.src = firefox
const imgF = new Image()
imgF.src = forest

document.body.appendChild(div)
document.body.appendChild(img)
document.body.appendChild(imgF)