<template>
  <div>
    <ul>
      <li><img src="../assets/favicon.png" alt="favicon"></li>
      <router-link tag="li" :to="{name: 'Home'}" exact-active-class="nav-active"><a>主页</a></router-link>
      <router-link tag="li" :to="{name: 'Movies'}" active-class="nav-active"><a>电影</a></router-link>
      <router-link tag="li" :to="{name: 'Me'}" active-class="nav-active" class="right"><a>我的</a></router-link>
    </ul>
  </div>
</template>


<style scoped>

  div {
    background: #4CB8C4;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3CD3AD, #4CB8C4);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3CD3AD, #4CB8C4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    box-sizing: border-box;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    padding: 10px 10px;
    position: relative;
    vertical-align: top;
  }
  a {
    text-decoration: none;
    color: white;
  }

  a:visited {
    text-decoration: none;
  }

  .nav-active {
    color: seagreen;

  }

  .nav-active::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: white;
    opacity: .8;
    transition: all ease-in .5s
  }
  img {
    vertical-align: bottom;
  }
  .right {
    float: right;
  }
</style>
