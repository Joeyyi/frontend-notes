<template>
    <div class="header">
        <div class="progressbar">
            <div class="progress-bg">
                <div class="progress" :style="{width: ( todoCount / maxTodos )*100 + '%'}"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['todoCount','maxTodos']
    }
</script>

<style scoped>
    .progressbar {
        width: 100%;
        height: 5px;
    }

    .progress-bg {
        width:100%;
        height:5px;
        background-color: lightgreen;
    }

    .progress {
        width: 10%;
        height: 5px;
        background-color: seagreen;
        text-align: center;
        color: white;
        line-height: 30px;
        transition: all 0.2s;
    }
</style>
