const App = {
  data() {
    return {
      title: 'Note list',
      placeholderString: 'Input your note please',
      inputValue: '',
      notes: ['bla', 'blabla', 'blablabla']
    }
  },
  methods: {
    inputHandler(event) {
      console.log("inputHandler", event.target.value)
      this.inputValue = event.target.value
    }
  }
}

Vue.createApp(App).mount('#app')