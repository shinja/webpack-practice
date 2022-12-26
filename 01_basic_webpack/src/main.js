import { sum } from './js/math' // ESModule
const { priceFormat } = require('./js/format.js') // commonJS


console.log('running from main.js');
console.log(sum(2, 30));
console.log(priceFormat());