<template>
    <div>
        <div class="ui relaxed divided list">
            <div class="item" v-for="post in posts">
                <i class="fa fa-handshake-o"></i>
                <div class="content">

                </div>
            </div>
        </div>
    </div>
</template>

<script>

module.exports = { // This is important, I got errors when using `export default`
     props:[
        // 'posts'
    ],
    data () {
        return {
           posts: [
               1,
               2,
               3,
               4,
               5,
               6
           ] 
        }
    },
    created() {
        console.log(this.posts)
    }
}
</script>
