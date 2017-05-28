// import Vue from 'vue'
  // import App from './App.vue'

  // new Vue({
  //   el: '#app',
  //   render: h => h(App)
// })

Vue.component('tabs', {
  template: `
    <div>

    <div class="tabs">
      <ul>
        <li v-for="tab in tabs"
        :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
        </li>
      </ul>
     </div>

    <div class="tab-details">
      <slot></slot>
    </div>

    </div>
  `,

  data() {
    return {
      tabs: []
    }
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
          tab.isActive = (tab.name === selectedTab.name);
      })
    }
  },

  created() {
    this.tabs = this.$children;
  },

  mounted() {
    console.log(this.$children);
  }

})

Vue.component('tab', {

  template: `
    <div v-show="isActive">
      <slot></slot>
    </div>
  `,

  data() {
    return {
      isActive: false
    }
  },

  props: {
    name: { required: true },
    selected: { default: false }
  },

  mounted() {
    this.isActive = this.selected;
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  }

})

new Vue({

  el: '#root'

});