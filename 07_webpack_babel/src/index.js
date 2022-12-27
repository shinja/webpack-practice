
import { sum } from './js/math' // ESModule
import "./js/header"
import "./js/image"
import "./js/es6"
const { priceFormat } = require('./js/format.js') // commonJS

console.log(sum(2, 30));
console.log(priceFormat());