
const Vue = require('vue/dist/vue.js')
Vue.component('appHeader', require('./components/app-header.vue'));
Vue.component('postList', require('./components/post-list.vue'));
Vue.component('post', require('./components/post.vue'));
Vue.filter('date', function (value) {
    if (!value) return ''
    value = new Date(value);
    return value.toISOString().slice(0, 10);
});
Vue.filter('snip', function (value, length) {
    if (!value) return ''
    return value.split(" ").slice(0,length).join(" ");
});
const app = new Vue({
    el: '#app'
})