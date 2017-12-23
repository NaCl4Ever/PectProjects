
var Vue = require('vue/dist/vue.js')

Vue.component('appHeader', require('./components/app-header.vue'));
const app = new Vue({
    el: '#app'
})