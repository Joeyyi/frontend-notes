<template>
    <div>
        <h1>User Page</h1>
        <router-view></router-view>
        <button @click="navigateToHome">Go to Home</button>    
    </div>

</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to, from) {
                this.id = to.params.id;
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push({path: '/'});
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgray;
    }
</style>
