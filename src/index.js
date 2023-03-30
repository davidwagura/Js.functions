new Vue ({
  el:'#function',

  data: {
    message: 'Hello vue!',
    first_name:'David',
    second_name:'wagura',
    fullName: '',
    english: 49,
    computer: 70,
    names: [
       'Evan You',
       'John Lindquist',
       'Jen Looper',
       'Miriam Suzanne'
     ]
  },

  computed: {
    kalenjinName(){
      return 'kip'+ this.second_name
    },

    kalenjinMyname() {
      return 'kip'+ this.first_name
    },

    list() {
      return this.names
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
