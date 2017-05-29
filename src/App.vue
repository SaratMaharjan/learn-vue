<template>
  <div id="app">
    <message>Hello There</message>
    <message>Hello There Again</message>
    <message>Hello There Again and Again</message>

  	<h3>Type here:</h3>
  	<textarea v-model="message" class="message" rows="5" maxlength="72"></textarea><br>
  	<p class="booktext">{{ message }} </p>

    <counter></counter>
  </div>
</template>

<script>

import Message from './components/Message.vue';
import Counter from './components/Counter.vue';
export default {
  name: 'app',
  components: { Message, Counter },
	data() {
    return {
      message: 'This is a good place to type things.'
    }
	},
}

</script>

<style>


</style>
