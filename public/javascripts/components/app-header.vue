<template>
    <div id= "page-header" class="ui sizer vertical segment">
        <div class="ui huge header centered aligned">Pect Projects</div>
        <h2 class="ui sub header centered aligned">
            {{ `It's not a bug, if you can't reproduce it.` }} 
        </h2>
        <button v-on:click="sideToggle" class="ui button">
            <i class = "fa fa-plus" ></i>  Show Menu
        </button>
    </div>
</template>

<script>
module.exports = { // This is important, I got errors when using `export default`
    data () {
        return {}
    },
    mounted: function () {
       
    },
    methods: {
        sideToggle: function(){
            console.log('Hello there');
            $('.ui.sidebar').sidebar('toggle');
             $('.ui.dropdown').dropdown();
        }
    }

}
</script>
