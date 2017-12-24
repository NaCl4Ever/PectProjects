
const Vue = require('vue/dist/vue.js')
Vue.component('appHeader', require('./components/app-header.vue'));
Vue.component('postList', require('./components/post-list.vue'));
Vue.component('post', require('./components/post.vue'));
const app = new Vue({
    el: '#app'
})