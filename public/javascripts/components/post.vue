<template>
    <div id="post-segment" class="ui sizer vertical segment">
        <div class="ui huge header centered aligned">{{parsedPost.title}}</div>
        <div class="ui small header centered aligned">{{parsedPost.created_on | date}}</div>
        <div class="ui raised very padded segment">
        {{parsedPost.contents}}
        </div>
    </div>
</template>

<script>
module.exports = { // This is important, I got errors when using `export default`
    props:[
        'post'
    ],
    data () {
        return {

        }
    },
    computed: {
        parsedPost: function() {
            console.dir(this.post);
            return JSON.parse(this.post)[0];
        }
    },
}
</script>
