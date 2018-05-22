<template>
    <div>
        <h3>User ID: {{ $route.params.id }}</h3>
        <p>Some User Detail</p>     
        <router-link tag="button" :to="{name: 'userEdit', params: {id: $route.params.id}}">Edit</router-link>   
    </div>
</template>

<style scoped>
    div {
        background-color: darkturquoise;
    }
</style>
