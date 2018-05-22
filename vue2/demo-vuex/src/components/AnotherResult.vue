<template>
  <div>
      <p>Double counter: {{ doubleCounter }}</p>
      <p>Number of clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        //props: ['counter']
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }
    }
</script>

