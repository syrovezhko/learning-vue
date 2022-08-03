const App = {
  data() {
    return {
      title: 'Note list',
      placeholderString: 'Input your note please',
    }
  }
}

Vue.createApp(App).mount('#app')