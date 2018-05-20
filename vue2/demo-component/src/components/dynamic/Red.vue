<template>
    <div>
        <p>This is red.</p>
        <button @click="counter++">Counter++</button>
        <span>Counter: {{ counter }}</span>
    </div>
</template>


<script>
    import { eventBus } from '../../main';
    export default {
        data: function(){
            return {
                counter: 0
            }
        },
        destroyed(){
            eventBus.log('Red is destroyed!');
        },
        activated(){
            eventBus.log('Red is activated!');
        },
        deactivated(){
            eventBus.log('Red is deactivated!');
        }

    }
</script>


<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
