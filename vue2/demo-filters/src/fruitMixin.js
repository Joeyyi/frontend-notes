export const fruitMixin = {

    data () {
      return {
        fruits:['Apple', 'Banana', 'Mango', 'Lemon', 'Melon'],
        filterText:''
      }
    },
    computed: {
      filterFruits() {
        return this.fruits.filter((fruit) => {
          return fruit.match(this.filterText);
        });
      }
    },
    created() {
        console.log('mixin created hook');
      }
  
  }