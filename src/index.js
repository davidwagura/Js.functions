new vue ({
  el:'#function',
  data: {
    message: 'Hello vue!'
  },
  computed: {},

  methods: {
    changeMessage() {
      this.message = 'My functions'
    }
  }
})
