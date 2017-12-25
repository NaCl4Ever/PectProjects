<template>
    <div class="ui three column grid">
        <div class ="column" v-for="post in parsedPosts">
            <div class="ui fluid centered card" >
            <div class="centered content">
                    <img class="ui fluid image" src="/public/images/catError.jpg"/>
                    <div class="header">Title: {{post.title}}</div>
                    <div class="header">  Created: {{ post['created_on'] | date}} </div>
                    <div class="description">
                        {{post.contents}}
                    </div>
                </div>
                <a :href="'/posts/'+post.id">
                    <div class="ui bottom attached button">
                            <i class="fa fa-plus"></i>
                            View Blog
                    </div>
                </a>
                
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
            console.dir(this.posts);
            return JSON.parse(this.posts);
        }
    },
    created() {
    }
}
</script>
