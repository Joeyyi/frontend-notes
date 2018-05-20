<template>
    <div class="container">
      <div class="form1 half">
        <form>
          <h1>A Simple Form</h1>
          <label for="email">Email</label>
          <input type="text" id="email" v-model="userData.email">
          <label for="password" >Password</label>
          <input type="password" id="password" v-model.lazy="userData.password">
          <label for="age">Age</label>
          <input type="number" id="age" v-model="userData.age">
          <label for="age">Message</label>
          <textarea id="message" v-model="message"></textarea>
          <label for="extracheese">
             <input type="checkbox" id="extracheese" value="ExtraCheese" v-model="additional">Extra Cheese
          </label>
          <label for="extrarice">
             <input type="checkbox" id="extrarice" value="ExtraRice" v-model="additional">Extra Rise
          </label>
          <label for="male">
             <input type="radio" id="male" value="Male" v-model="gender">Male
          </label>
          <label for="female">
             <input type="radio" id="female" value="Female" v-model="gender">Female
          </label>
          <label for="season">Favorite season</label>
          <select id="season" v-model="selectedSeason" >
              <option v-for="season in seasons" :selected="season == 'Summer'">{{ season }}</option>
          </select>
          <app-switch v-model="switchOn"></app-switch>
          <button @click.prevent="submit">Submit</button>

        </form>
      </div><!--
//inline元素这里会有4px空白啊啊啊啊
   --><div class="half">
        <h1> Your Data </h1>
        <p>Email: {{ userData.email }} </p>
        <p>Password: {{ userData.password }} </p>
        <p>Age: {{ userData.age }} </p>
        <p>Message: {{ message }} </p>       
        <p>Special Arrangments: </p>       
        
        <ul>
          <li v-for="item in additional">{{ item }}</li>
        </ul> 

        <p>Gender: {{ gender }}</p>
        <p>Favorite Season: {{ selectedSeason }}</p>
        <p>Switched to:  {{ switchOn }}</p>
        <p id="submitted" v-if="isSubmitted">Yay! Submitted!</p>

      </div>
      <p>{{cookie}}</p>
    </div>
</template>

<script>
import Cookie from './cookie'
import Switch from './Switch.vue'
export default {
  name: 'app',
  data () {
    return {
      userData:{
        email: '',
        password:'',
        age:22,
        message:''
      },
      cookie: '',
      message: 'default msg',
      additional: [],
      gender: 'Male',
      seasons: ['Spring', 'Summer', 'Fall', 'Winter'],
      selectedSeason: 'Winter',
      switchOn: true,
      isSubmitted: false

    }
  },
  components: {
      'app-switch': Switch
  },
  methods: {
    submit(){
      this.isSubmitted = true;
    }
  }
}
</script>

<style>


.half {
  width: 50%;
  display: inline-block;
  vertical-align: top;

}

.form1 label {
  display: block;
}

#submitted {
  background-color: lightgreen;
  display: inline-block;
}

</style>
