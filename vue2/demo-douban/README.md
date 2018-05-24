# demo-douban

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 难点

1. getters接受参数

getters只接受默认参数state,其他getters，不能随意传入参数。
需要使用高阶函数，返回的函数接受用户的参数id。
见vuex官方demo https://vuex.vuejs.org/getters.html

``` javascript
getLocalId: (state, getters) => (id) => {
    if(state.localData.indexOf(id) > 1) {
        return state.localData.indexOf(id);
    } else {
        return -1;
    }
}
```