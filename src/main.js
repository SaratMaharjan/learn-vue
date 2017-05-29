
import Axios from 'axios';
import Vue from 'vue';
import App from './App.vue';

new Vue({
	el: '#app',

	render: h => h(App),

	data() {
    return {
      message: 'This is a good place to type things.'
    };
	},

	mounted() {

	}
});
