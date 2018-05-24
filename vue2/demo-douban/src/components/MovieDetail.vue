<template>
    <div class="mask">
        <div class="modal">
            <h3>{{ movieDetail.title }}({{ movieDetail.year }})</h3>
            <div class="left">
                <p>原名: {{ movieDetail.original_title }}</p>
                <p>类型: {{ movieDetail.genres.join(' / ') }}</p>
                <p>导演：{{ movieDetail.directors | extractNames }}</p>
                <p>主演：{{ movieDetail.casts | extractNames }}</p>     
                <p>评分：{{ movieDetail.rating.average }} ({{ movieDetail.ratings_count }}人)</p> 
            </div>
            <div class="right">
                <img :src="movieDetail.images.small" alt="img">            
            </div>
            <div>
                <p>简介：{{ movieDetail.summary }} </p> 
                <a :href="movieDetail.alt" target="_blank">Open Link</a>
                <button @click="addToLocal">{{ localData | convertText }}</button> 
                <button @click="close">x</button>
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
            addToLocal() {
                let brief = {
                    alt: this.movieDetail.alt,
                    title: this.movieDetail.title,
                    images: {small: this.movieDetail.images.small},
                    rating: {average:this.movieDetail.rating.average}
                }
                this.$store.commit('setLocalData', brief);
            }
        },
        computed: {
            movieDetail() {
                return this.$store.getters.getMovieDetail;
            },
            movieId(){
                return this.movieDetail.alt.match(/[\d]+/)[0];
            },
            localData() {
                return this.$store.getters.getLocalId(this.movieDetail.alt);               
            }
        },
        filters: {
            extractNames(arr) {
                let names = arr.map((item) => {
                    return item.name || ''
                });
                return names.join(' / ');
            },
            convertText(num) {
                if(num) {
                    return '★ Unstar'
                } else {
                    return '☆ Star'
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

    * {
        box-sizing: border-box;
    }
    .modal {
        background-color: white;
        position: fixed;
        width: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 3px gray;
        border-radius: 5px;
        padding: 5%;
        text-align: left;
    }

    .mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .left {
        width: 70%;
        display: inline-block;
        text-align: left;
        vertical-align: top;
    }

    .right {
        width: 29%;
        text-align: left;
        display: inline-block;    
        vertical-align: top;    
    }

    p {
        margin-top: 0;
    }

    img {
        width: 80%;
    }
</style>
