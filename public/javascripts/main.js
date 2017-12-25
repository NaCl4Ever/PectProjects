
const Vue = require('vue/dist/vue.js')
Vue.component('appHeader', require('./components/app-header.vue'));
Vue.component('postList', require('./components/post-list.vue'));
Vue.component('post', require('./components/post.vue'));
Vue.filter('date', function (value) {
    if (!value) return ''
    value = new Date(value);
    return value.toISOString().slice(0, 10);
})
const app = new Vue({
    el: '#app'
})