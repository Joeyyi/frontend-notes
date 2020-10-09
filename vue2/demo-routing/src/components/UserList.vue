<template>
    <ul>
        <router-link tag="li" to="/user/1">User 1</router-link>
        <router-link tag="li" to="/user/2">User 2</router-link>
        <router-link tag="li" to="/user/3">User 3</router-link>

    </ul>
</template>

<style scoped>

    a {
        text-decoration: none;
        color: black;
    }

    ul {
        background-color: lightsalmon;
        margin: 0;
        padding: 0;
    }
</style>
