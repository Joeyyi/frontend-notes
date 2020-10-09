<template>
    <ul>
        <router-link to="/" tag="li" acitve-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" acitve-class="active"><a>User</a></router-link>

    </ul>
</template>

<style scoped>
    li {
        list-style: none;
        display: inline;
    }

    a {
        text-decoration: none;
        color: black;
    }

    ul {
        background-color: lightskyblue;
        margin: 0;
        padding: 0;
    }
</style>
