<template>
  <div id="app">
    <message>Hello There</message>
    <message>Hello There Again</message>
    <message>Hello There Again and Again</message>

    <counter></counter>
  </div>
</template>

<script>

import Message from './components/Message.vue';
import Counter from './components/Counter.vue';
export default {
  name: 'app',
  components: { Message, Counter },
  data () {
    return {

    }
  }
}
</script>

<style>


</style>
