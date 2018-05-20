<template>
    <div>
        <p>This is green.</p>
    </div>
</template>


<script>
    import { eventBus } from '../../main';
    export default {
        destroyed(){
            eventBus.log('Green is destroyed!');
        },
        activated(){
            eventBus.log('Green is activated!');
        },
        deactivated(){
            eventBus.log('Green is deactivated!');
        }
    }
</script>


<style scoped>
    div {
        background-color: lightgreen;
    }
</style>