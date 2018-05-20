<template>
    <div class="row">
        <div class="new">
            <form action="">
                <input type="text" v-model="todo" placeholder="New Todo"><button @click.prevent="createTodo"> + </button>             
            </form>

        </div>
    </div>    
</template>

<script>
    export default {
        data: function() {
            return {
                todo:''
            }
        },
        methods: {
            createTodo(){
                if( this.todo ){
                    this.$emit('quoteAdded', this.todo);
                    this.todo = '';
                }

            }
        }
    }
</script>

<style scoped>
    form * {
        margin: 0;
        padding: 0;
    }
    button {
        display: block;
        width: 10%;
        height: 30px;
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 20px;
        background-color: seagreen;
        color: white;
    }
    input {
        display: block;
        float: left;
        width: 90%;
        height: 30px;
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 20px;
        outline: none;
        
    }
</style>
