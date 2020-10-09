<template>
    <div class="mask">
        <div class="container">
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
                    <a :href="movieDetail.alt" target="_blank"><img id="icon" src="../assets/favicon.png" alt="douban"> 查看豆瓣主页</a>
                    <button @click="addToLocal">{{ localData | convertText }}</button> 

                </div>

            </div>
        </div>
        <button id="close" @click="close">x</button>

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
    ::-webkit-scrollbar{
    display:none;
    }
    * {
        box-sizing: border-box;
    }
    .modal {
        background-color: white;
        position: fixed;
        width: 50%;
        max-height: 70%;
        overflow-y: auto;
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

    #icon {
        width: 16px;
        vertical-align:text-top;
    }

    a {
        text-decoration: none;
        color: seagreen;
    }

    button {
        border: solid 1px seagreen;
        background-color: white;
        border-radius: 5px;
        color: seagreen;
    }

    #close {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%,0);
        border-radius: 2em;
        border-color: white;
        color: gray;
        width: 4em;
        height: 4em;
        box-shadow: 0 0 5px gray;
    }

    @media only screen and (max-device-width: 480px) {
    modal {
      width: 80%;
    }


}
</style>
