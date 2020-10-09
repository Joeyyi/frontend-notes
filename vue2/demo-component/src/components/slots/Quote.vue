<template>
    <div id="container">
        <div id="title">
            <slot name="title">No Title</slot>
        </div>
         <div id="subtitle">       
            <slot name="subtitle" >No Subtitle</slot>
         </div>
         <div id="content">   
            <slot>No Content</slot>
         </div>
    </div>
</template>



<script>

</script>


<style scoped>
    #container {
        border: 1px solid gray;
        margin: 5px;
    }
    #title {
        color: brown;
        font-size: 2em;
        font-style: italic;
    }
    #subtitle {
        color: grey;
        font-style: italic;
    }

</style>
