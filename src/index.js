new Vue ({
  el:'#function',

  data: {
    message: 'Hello vue!',
    first_name:'David',
    second_name:'wagura',
    fullName: ''
  },

  computed: {},

  methods: {
    changeMessage() {
      this.message = 'My functions'
    },
    getFullName() {
      this.fullName = this.first_name + " " + this.second_name;
    },

    newMethod(){
      console.log('testing')
    }

  }

})
