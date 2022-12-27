
import { sum } from './js/math' // ESModule
import "./js/header"
import "./js/image"
import "./js/es6"
/**
 * default is vue.runtime.esm-bundler.js,
 * we have 'template' property here, so we need vue.esm-bundler.js version.
 */
import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './vue/App.vue'
const { priceFormat } = require('./js/format.js') // commonJS

console.log(sum(2, 30));
console.log(priceFormat());

const app = createApp({
	template: `<App />`,
	components: {
		App
	}
})

app.mount('#app')