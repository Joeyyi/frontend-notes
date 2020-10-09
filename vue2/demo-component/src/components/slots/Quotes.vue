<template>
    <div id="container">
        <app-quote>
            <p slot="title">My Quote</p>
            <p>This is a wonderful quote!</p>
        </app-quote>
        <app-quote>
            <p slot="subtitle">This is a subtitle</p>
            <p>This is a wonderful quote!</p>
        </app-quote>
    </div>
</template>



<script>
    import Quote from './Quote.vue';
    export default {
        components: {
            'app-quote': Quote
        }
    }
</script>


<style scoped>
    #container {
        border: 1px solid gray;
        margin: 10px;
        padding: 10px;
    }

</style>
