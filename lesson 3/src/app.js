const App = {
  data() {
    return {
      title: 'Note list',
      placeholderString: 'Input your note please',
      inputValue: '',
      notes: [],
    }
  },
  mounted() {
    if (localStorage.getItem('notes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('notes'));
      } catch(error) {
        localStorage.removeItem('notes');
      }
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
        this.saveNote()
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1)
      this.saveNote()
    },
    saveNote() {
      const parsed = JSON.stringify(this.notes);
      localStorage.setItem('notes', parsed);
    }
  }
}

Vue.createApp(App).mount('#app')