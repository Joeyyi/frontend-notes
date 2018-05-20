<template>
  <div id="app">
    <h1>Animations </h1>
    <button @click="show = !show" >Show/Hide</button>
    <select v-model="alertAnimation">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </select>
    <transition name="fade">
      <p v-if="show">A fade animation</P>    
    </transition>
    <transition name="slide">
      <p v-if="show">A slide animation</P>    
    </transition>
    <transition name="slide" appear>
      <p v-if="show">animations from animate.css</P>    
    </transition>
    <transition 
      appear
      enter-class=""
      enter-active-class="animated bounce"
      leave-class=""
      leave-active-class="animated shake"
      >
      <p v-if="show">Something</P>    
    </transition>
    <transition :name="alertAnimation" appear>
      <p v-if="show">pick fade or slide</P>    
    </transition>
    <transition :name="alertAnimation" mode="out-in">
      <p v-if="show" key="a">AAA</P>    
      <p v-if="!show" key="b">BBB</P>    
    </transition>
    <button @click="load = !load">Load/Remove Element</button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      >
      <div v-if="load" style="width: 160px; height: 50px; background-color: lightgreen; margin-top: 10px;"></div>
    </transition>
    <button @click="selectedComponent == 'app-danger-alert'? selectedComponent = 'app-safety-alert' : selectedComponent = 'app-danger-alert'">Toggle Component</button>
    <transition :name="alertAnimation" mode="out-in">
      <component :is="selectedComponent"></component>    
    </transition>
    <input type="text" v-model="newItem">
    <button @click="add">Add Item</button>
    <ul>
      <transition-group name="slide" mode="out-in">
        <li v-for="(item, index) in list" @click="remove(index)" :key="item">{{ item }}</li>
      </transition-group>
      
    </ul>
  </div>
</template>

<script>
import dangerAlert from './DangerAlert';
import safetyAlert from './SafetyAlert';

export default {
  data() {
    return {
      show:true,
      load: true,
      alertAnimation: 'fade',
      elementWidth: 50,
      selectedComponent: 'app-danger-alert',
      newItem: '',
      list: ['Purple potato bum', 'pumpkin dango', 'pumpkin pie', 'tea egg', 'sesame noodles']
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('before enter');
      this.elementWidth = 50;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el,done) {
      console.log('enter');
      let round = 1;
      const interval = setInterval( () => {
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if(round > 10) {
          clearInterval(interval);

          done();
        }
      },20);

    },
    afterEnter(el) {
      console.log('after enter');
    },
    enterCancelled(el) {
      console.log('enter cancelled');
    },
    beforeLeave(el) {
      console.log('before leave');
      this.elementWidth = 160;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el,done) {
      console.log('leave');
      let round = 1;
      const interval = setInterval( () => {
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if(round > 10) {
          clearInterval(interval);

          done();
        }
      },20);

    },
    add() {
      const pos = Math.floor(Math.random() * this.list.length);
      this.list.splice(pos, 0, this.newItem);
    },
    remove(index) {
      this.list.splice(index, 1);
    }
  },
  components: {
    'app-danger-alert': dangerAlert,
    'app-safety-alert': safetyAlert
  }

}
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  } 
</style>
