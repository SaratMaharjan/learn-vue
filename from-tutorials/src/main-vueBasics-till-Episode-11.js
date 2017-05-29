// import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

Vue.component('modal', {

  template: `
    <div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<slot></slot>
				</div>
			</div>
			<button class="modal-close" @click="$emit('close')"></button>
		</div>
  `

})

Vue.component('message', {

  props: ['title', 'body'],

  data() {

    return {

      isVisible: true

    }

  },

  template: `
    <article class="message" v-show="isVisible">
      <div class="message-header">
        {{ title }}
        <button type="button" class="close" @click="hideModal">x</button>
      </div>
      <div class="message-body">
        {{ body }}
      </div>
    </article>
  `,

  methods: {

    hideModal() {
      this.isVisible = !this.isVisible;
    }

  }

})

Vue.component('task-list', {

  template: `<div>
                  <task v-for="task in tasks">{{ task.description }}</task>
            </div>`,

  data() {

    return {

      tasks: [{
          description: "do 1 inside list",
          completed: true
        },
        {
          description: "do 2",
          completed: false
        },
        {
          description: "do 3",
          completed: true
        },
        {
          description: "do 4",
          completed: false
        },
      ]

    }
  }

})

Vue.component('task', {

  template: '<li><slot></slot></li>',

})

let app = new Vue({

  el: '#root',

  data: {
    showModal: false,
    newName: '',
    names: ['joe', 'mary', 'jane'],
    title: 'hover over me',
    isLoading: false,
    message: 'this is message',
    tasks: [{
        description: "do 1",
        completed: true
      },
      {
        description: "do 2",
        completed: false
      },
      {
        description: "do 3",
        completed: true
      },
      {
        description: "do 4",
        completed: false
      },
    ]
  },

  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = '';
    },
    toggleClass() {
      this.isLoading = !this.isLoading;
    }
  },

  computed: {

    reversedMessage() {
      return this.message.split('').reverse().join('');
    },

    incompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    }

  },

  mounted() {
    console.log('App is ready');
  }

})
