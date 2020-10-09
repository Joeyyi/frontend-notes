<template>
    <div>
        <h2>Child2 Component</h2>
        <p class="data">That child's age: {{ age }}</p>
        <button @click="editAge()">Edit That Child's Age</button>
        <p>[Child2 -> Parent -> Child1](custom event)</p>
        <button @click="editAge2()">Edit That Child's Age</button>
        <p>[Child2 -> EventBus -> Child1](custom event)</p>
        <p>Shut Up and Use Vuex!!!!!!</p>
    </div>
</template>



<script>
    import { eventBus } from '../../main';
    export default {
        props: ['age'],
        methods: {
            editAge() {
                this.age = 176;
                this.$emit('ageWasEdited', this.age);
            },
            editAge2() {
                this.age = 276;
                eventBus.$emit('ageWasEdited2', this.age);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: orange;
        border: 1px solid gray;
        margin: 10px auto;
        padding: 10px;
        width: 40%;
        display: inline-block;
        vertical-align: top;
    }
    .data {
        color: blue;
    }
</style>