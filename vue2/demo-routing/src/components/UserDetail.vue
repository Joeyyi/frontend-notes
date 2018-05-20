<template>
    <div>
        <h3>User ID: {{ $route.params.id }}</h3>
        <p>Some User Detail</p>     
        <router-link tag="button" :to="'/user' + $route.params.id + '/edit'">Edit</router-link>   
    </div>
</template>

<style scoped>

</style>
