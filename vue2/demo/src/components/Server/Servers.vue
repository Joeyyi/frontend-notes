<template>
    <div>
        <ul>
            <li v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>

    </div>
</template>

<script>
import ServerDetails from './components/Server/ServerDetails.vue';

export default {
    ''
}
</script>

<style scoped>
    div {
      border: 1px solid blue;
      width: 40%;
      display: inline-block;
    }
</style>
