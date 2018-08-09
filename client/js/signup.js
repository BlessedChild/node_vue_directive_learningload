var host = 'http://127.0.0.1:3000/signup?';

var signup_container = new Vue({
    el: '#signup-container',
    data: {
      name: '',
      password: '',
      repassword: '',
      firstname: '',
      lastname: '',
      birthday: '',
      sexs: ['male', 'female'],
      currentSex: 'male',
      ages: ['1', '2', '3', '4', '5', '6', '7', '8',
             '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
      currentAge: '18',
      wechart: '',
      qq: '',
      email: '',
      contury: '',
      address: '',
      phone: '',
      websize: '',
      github: '',
      bio: '',
      commits: ['null', 'null']
    },
    methods: {
      addUser: function () {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', host + 'name=' + this.name + '&password=' + this.password + '&firstname=' + 
        this.firstname + '&lastname=' + this.lastname + '&birthday=' + this.birthday
        + '&sex=' + this.currentSex + '&age=' + this.currentAge + '&wechart=' + this.wechart
        + '&qq=' + this.qq + '&email=' + this.email + '&contury=' + this.contury
        + '&address=' + this.address + '&phone=' + this.phone + '&websize=' + this.websize
        + '&github=' + this.github + '&bio=' + this.bio, true)
        xhr.send()
        /*
        var self = this
        xhr.open('GET', host + 'name=' + self.name + '&password=' + self.password + '&firstname=' + 
        self.firstname + '&lastname=' + self.lastname + '&birthday=' + self.birthday
        + '&sex=' + self.currentSex + '&age=' + self.currentAge + '&wechart=' + self.wechart
        + '&qq=' + self.qq + '&email=' + self.email + '&contury=' + self.contury
        + '&address=' + self.address + '&phone=' + self.phone + '&websize=' + self.websize
        + '&github=' + self.github + '&bio=' + self.bio, true)
        
        xhr.onload = function () {
          self.commits = JSON.parse(xhr.responseText)
          console.log(self.commits)
        }
        */
        xhr.send()
      }
    }
  })