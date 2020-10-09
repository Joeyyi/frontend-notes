<template>
    <div id="container">

        <div id="controls">
            <p>status: {{status}}</p>
            <p>selected component: {{selectedComponent}}</p>
            <button @click="selectedComponent = 'app-red'">Red</button>
            <button @click="selectedComponent = 'app-blue'">Blue</button>
            <button @click="selectedComponent = 'app-green'">Green</button>

        </div>
        <div id="dynamic">
            <keep-alive>
                <component :is="selectedComponent">
                </component>
            </keep-alive>
        </div>
    </div>
</template>



<script>
    import Red from './Red.vue';
    import Blue from './Blue.vue';
    import Green from './Green.vue';
    import { eventBus } from '../../main';

    export default {
        data: function() {
            return {
                selectedComponent: "app-red",
                status: ""
            }
        },
        components: {
            'app-red': Red,
            'app-blue': Blue,
            'app-green': Green
        },
        created(){
            eventBus.$on('logged',(text) => {
                this.status += text + '-->';
            });
        }
    }
</script>


<style scoped>
    #container {
        border: 1px solid gray;
        margin: 10px;
        padding: 10px;
    }


</style>
