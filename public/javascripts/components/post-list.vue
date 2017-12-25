<template>
    <div class="ui three column grid">
        <div class ="column" v-for="post in parsedPosts">
            <div class="ui fluid centered card" >
            <div class="image">
                <img class="ui fluid image" src="/public/images/catError.jpg"/>
            </div>
            <div class="centered content">
                    
                    <div class="header">
                        <div class="ui horizontal label">Title</div>
                        {{post.title}}
                        <div class="ui horizontal label">Date</div>
                         {{ post['created_on'] | date}} 
                    </div>
                    <div class="header"> 
                        
                    </div>
                    <div class="description">
                        <div class="ui horizontal label">Preview</div>
                        {{post.contents | snip(10)}}
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
