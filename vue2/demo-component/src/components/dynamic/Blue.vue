<template>
    <div>
        <p>This is blue.</p>
    </div>
</template>


<script>
    import { eventBus } from '../../main';
    export default {
        destroyed(){
            eventBus.log('Blue is destroyed!');
        },
        activated(){
            eventBus.log('Blue is activated!');
        },
        deactivated(){
            eventBus.log('Blue is deactivated!');
        }
    }
</script>


<style scoped>
    div {
        background-color: aquamarine;
    }
</style>
