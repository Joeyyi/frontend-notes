<template>
    <div>
        <p>Username: {{ name }} </p>
    </div>
</template>

<script>
    export default {
        props: [ 'name']
    }
</script>

<style scoped> 
    div {
        border: 1px solid red;
        width: 40%;
        display: inline-block;
    }
</style>
