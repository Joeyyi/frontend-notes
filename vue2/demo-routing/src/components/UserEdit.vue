<template>
    <div>
        <button @click="confirmed = true">OK!</button>
        <p>confirmed:{{ confirmed }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                confirmed: false
            }
        },
        beforeRouteLeave(to, from, next) {
            // don't use arrow function or this is not defined
            if(this.confirmed) {
                next();
            } else {
                if(confirm('Are you sure?')) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: aquamarine;
    }
</style>
