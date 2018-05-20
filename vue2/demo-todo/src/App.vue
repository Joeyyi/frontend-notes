<template>
    <div class="container">
      <h1>Todo List</h1>
      <app-header :maxTodos="maxTodos" :todoCount="todos.length"></app-header>
      <app-new-quote @quoteAdded="newTodo"></app-new-quote>
      <app-quote-grid :todos="todos" @todoDeleted="deleteTodo"></app-quote-grid>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';
  import Header from './components/Header.vue';
  export default {
      data: function(){
        return {
          todos: ['Learn Vue', 'Go to bed early', 'Click to delete me'],
          maxTodos: 10
        }
      },
      components: {
        'app-new-quote': NewQuote,
        'app-quote-grid': QuoteGrid,
        'app-header': Header
      },

      methods: {
        newTodo(todo) {
          if( this.todos.length < 10) {
            this.todos.push(todo);
          }

        },
        deleteTodo(index) {
          this.todos.splice(index, 1);
        }
      }

  }
</script>

<style>
  html {
    background-color: lightgray;
  }
  .container {
    width: 50%;
    padding: 0;
    margin: 50px auto;
    background-color: white;
  }
  h1 {
    text-align: center;
    font-size: 40px;
    line-height: 40px;
    color: seagreen;
    margin: 5px;
  }

</style>
