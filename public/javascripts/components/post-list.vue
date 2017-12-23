<template>
    <div>
        <div class="ui relaxed divided list">
            <div class="item" v-for="post in parsedPosts">
                <i class="fa fa-handshake-o"></i>
                <div class="content">
                        {{post.contents}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

module.exports = { // This is important, I got errors when using `export default`
     props:[
        'posts'
    ],
    data () {
        return {
        }
    },
    computed: {
        parsedPosts: function() {
            return JSON.parse(this.posts);
        }
    },
    created() {
    }
}
</script>
