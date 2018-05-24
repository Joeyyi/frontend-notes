<template>
    <div class="mask">
        <div class="modal">
        <button @click="close">x</button>
        <h3>{{ movieDetail.title }}({{ movieDetail.year }})</h3>
        <div class="left">
            <img :src="movieDetail.images.small" alt="img">            
        </div>
        <div class="right">
            <p>类型: {{ movieDetail.genres.join(' / ') }}</p>
            <p>导演：{{ movieDetail.directors | extractNames }}</p>
            <p>主演：{{ movieDetail.casts | extractNames }}</p>      
            <a :href="movieDetail.alt" target="_blank">Open Link</a>
            <button @click="addToFav">加入收藏</button>    
        </div>



        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            close() {
                this.$store.commit('setVisibility', false);
            },
            addToFav() {

            }
        },
        computed: {
            movieDetail() {
                return this.$store.getters.getMovieDetail;
            },
            userData() {

            }
        },
        filters: {
            extractNames(arr) {
                let names = arr.map((item) => {
                    return item.name || ''
                });
                return names.join(' / ');
            }
        }
    }
</script>

<style scoped>
    .modal {
        background-color: white;
        position: fixed;
        width: 50%;
        height: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 3px gray;
        border-radius: 5px;
    }

    .mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .left {
        width: 20%;
        display: inline-block;
        vertical-align: top;
    }

    .right {
        width: 70%;
        text-align: left;
        display: inline-block;    
        vertical-align: top;    
    }

    img {
        width: 80%;
    }
</style>
