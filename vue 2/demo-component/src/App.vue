<template>
  <div id="app">
    <h1>1. Communication</h1>
    <app-communication></app-communication>
    <h1>2. Slots</h1>
    <app-slot></app-slot>
    <h1>3. Dynamic Components</h1>
    <app-dynamic></app-dynamic>
  </div>
</template>

<script>
import User from './components/communication/User.vue';
import Colors from './components/dynamic/Colors.vue';
import Quotes from './components/slots/Quotes.vue';
export default {
      components: {
        'app-communication': User,
        'app-dynamic': Colors,
        'app-slot': Quotes
      }
  
}
</script>

<style>
  div {
    text-align: center;
  }
</style>
