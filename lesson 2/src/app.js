const App = {
  data() {
    return {
      title: 'Note list',
      placeholderString: 'Input your note please',
      inputValue: '',
      notes: []
    }
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      this.notes.push(this.inputValue)
      this.inputValue = ''
    }
  }
}

Vue.createApp(App).mount('#app')