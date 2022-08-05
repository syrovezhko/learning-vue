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
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    }
  }
}

Vue.createApp(App).mount('#app')