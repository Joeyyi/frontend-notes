<template>
    <div class="row">
        <div class="quote">
            <slot></slot>
        </div>
    </div>    
</template>

<script>
    export default {

    }
</script>

<style>
    p {
        font-size: 20px;
        color: #003b1b;
        background-color:lightgreen;
        transition: all 0.2s;
        height: 30px;
        line-height: 30px;
        width: 90%;
        display: inline-block;
        margin: 0;
    }
    p:hover {
        background-color: rgb(170, 240, 170);
    }
    button {
        border: 0;
        color:white;
        background-color: red;
        float:right;
        height: 30px;
        padding: 0;
        margin: 0;
        width: 10%;
        outline: none;
        transition: all 0.2s;
        overflow: hidden;
    }


</style>
