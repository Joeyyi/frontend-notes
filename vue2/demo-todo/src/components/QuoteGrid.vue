<template>
    <div class="row">
        <app-quote v-for="(quote, index) in todos" >
            <div @mouseover="width=90" @mouseout="width=100">
                <p :style="{width: width + '%'}" >{{quote}}</p>
                <button @click="deleteTodo(index)" :style="{width: (100 - width) + '%' }" > X </button>
            </div>
        </app-quote>
    </div>    
</template>

<script>
    import Quote from './Quote.vue';
    export default {
        data: function() {
            return {
                width: 100,
                show: 'none'
            }
        },
        props: ['todos'],
        components: {
            'app-quote': Quote
        },
        methods: {
            showDel(index) {

            },
            deleteTodo(index) {
                this.$emit('todoDeleted',index);
            },
            ak(a){
                alert(a);
            }
        }

    }
</script>

<style>

</style>
