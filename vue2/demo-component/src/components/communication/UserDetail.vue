<template>
    <div>
        <h2>Child Component</h2>
        <p class="data">My name: {{ name }} </p>
        <p class="data">My age: {{ age }} </p>
        <button @click="messUp()">Mess Up My Name</button>
        <p>[An update in Child]</p>
        <button @click="resetName()">Me: Set My Name</button>
        <p>[Child -> Parent](custom event)</p>
        <button @click="resetFn()">Parent: Set My Name</button>
        <p>[Child -> Parent](callback function)</p>
    </div>
</template>



<script>
    import { eventBus } from '../../main';
    export default {
        props: {
            name: String,
            age: Number,
            resetFn: Function
        },
        methods: {
            messUp(){
                this.name = this.name.split("").reverse().join("");
            },
            resetName(){
                this.name = "MY OWN NAME";
                this.$emit('nameWasReset', this.name);
            }
        },
        created(){
            eventBus.$on('ageWasEdited2', (updatedAge) => {
                this.age = updatedAge;
            });
        }
    }

</script>

<style scoped>
    div {
        background-color: yellow;
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
