var host = 'http://127.0.0.1:3000/';

var signup_container = new Vue({
  el: '#signup-container',
  data: {
    name_signin: '',
    password_signin: '',
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
    commits: null,
    pagestate: '0',
    image: ''
  },
  methods: {
    filesChange: function(event) {
      this.image = event.target.files[0].name
    },
    return_index: function () {
      this.pagestate = '0'
    },
    signin_index: function () {
      this.pagestate = '1'
    },
    signup_index: function () {
      this.pagestate = '2'
    },
    signin: function () {
      //当点击登陆的时候，在页面上渲染从服务端返回的数据，把其他的部分隐藏掉
      this.pagestate = '3'

      var xhr = new XMLHttpRequest()

      var self = this
      xhr.open('GET', host + 'signin?' + 'name=' + self.name_signin + '&password=' + self.password_signin, true)

      xhr.onload = function () {
        //self.commits = xhr.responseText
        var myObj = JSON.parse(xhr.responseText);
        self.commits = myObj
      }

      xhr.send()
    },
    addUser: function () {
      //当点击注册的时候，在页面上渲染从服务端返回的数据，把其他的部分隐藏掉
      this.pagestate = '3'

      var xhr = new XMLHttpRequest()

      /*
      xhr.open('GET', host + 'name=' + this.name + '&password=' + this.password + '&firstname=' + 
      this.firstname + '&lastname=' + this.lastname + '&birthday=' + this.birthday
      + '&sex=' + this.currentSex + '&age=' + this.currentAge + '&wechart=' + this.wechart
      + '&qq=' + this.qq + '&email=' + this.email + '&contury=' + this.contury
      + '&address=' + this.address + '&phone=' + this.phone + '&websize=' + this.websize
      + '&github=' + this.github + '&bio=' + this.bio, true)
      xhr.send()
      */

      var self = this
      xhr.open('GET', host + 'signup?' + 'name=' + self.name + '&password=' + self.password + '&firstname=' +
        self.firstname + '&lastname=' + self.lastname + '&birthday=' + self.birthday
        + '&sex=' + self.currentSex + '&age=' + self.currentAge + '&wechart=' + self.wechart
        + '&qq=' + self.qq + '&email=' + self.email + '&contury=' + self.contury
        + '&address=' + self.address + '&phone=' + self.phone + '&websize=' + self.websize
        + '&github=' + self.github + '&bio=' + self.bio, true)

      xhr.onload = function () {
        self.commits = xhr.responseText
      }

      xhr.send()
    }
  }
})