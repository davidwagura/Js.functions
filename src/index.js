new Vue ({
  el:'#function',

  data: {
    message: 'Hello vue!',
    first_name:'David',
    second_name:'wagura',
    fullName: '',
    english: '49',
    computer: '70'
  },

  computed: {
    kalenjinName(){
      return 'kip'+ this.second_name
    },

    kalenjinMyname() {
      return 'kip'+ this.first_name
    },

    kalenjinOurname() {
      return 'kip'+ this.second_name
    },
    totalMarks() {
     return this.english  + this.computer
    }

  },

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
