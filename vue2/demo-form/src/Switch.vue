<template>
    <div class="container">
        <div id="on" @click="switchData(true)" :class="{active: value}">On
        </div><div id="off" @click="switchData(false)" :class="{active: !value}">Off</div>
    </div>
</template>

<script>
export default {
    props:['value'],
    methods: {
        switchData(isOn) {
            this.$emit('input',isOn)
        }
    }
}
</script>

<style scoped>
    .container {
        margin: 5px 0;
    }

    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }
    #off:hover, #off.active {
        background-color: lightcoral;
    }

</style>
