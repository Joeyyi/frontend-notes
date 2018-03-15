<template>
    <div>
        <h1>Parent Component</h1>
        <p class="data">My child's name: {{ name }}</p>
        <p class="data">My child's age: {{ age }}</p>
        <button @click="change()">Change my child's name</button>
        <p>[Parent -> Child 1]</p>
        <app-user-detail 
            :name="name" 
            :age="age"
            @nameWasReset="name = $event"
            :resetFn="resetName"
            ></app-user-detail>
        <app-user-edit 
            :age="age"
            @ageWasEdited="age = $event"></app-user-edit>
    </div>
</template>



<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit   from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'FOO',
                age: 76
            }
        },
        components: {
            'app-user-detail': UserDetail,
            'app-user-edit': UserEdit
        },
        methods: {
            change(){
                this.name = 'BAR';
            },
            resetName() {
                this.name = "HIS OWN NAME";
            }
        }
    }
</script>


<style scoped>
    div {
        background-color: lightgray;
        border: 1px solid gray;
        margin: 10px;
        padding: 10px;
        text-align: center;
    }
    .data {
        color: blue;
    }
</style>
