<template>
    <div class="ui sizer vertical segment">
        <div class="ui fluid action input">
            <input type="text" v-model="post"  placeholder="Put good blog stuff here <--">
            <div v-on:click="submit"class="ui button">Submit</div>
        </div>
    </div>
</template>

<script>
module.exports = { // This is important, I got errors when using `export default`
    data () {
        return {
            post: ''
        }
    },
    methods: {
        submit: function() {
            console.log(`Post currently: ${this.post}`);
        }
    }
}
</script>
