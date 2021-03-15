<template>
  <form>
    <input type="text" placeholder="Имя" v-model="name">
    <input type="text" placeholder="Логин" v-model="username">
    <input type="number" min="13" max="90" placeholder="Возраст" v-model="age">
    <input type="password" placeholder="Пароль" v-model="password">
    <input type="password" placeholder="Повтор Пароля" v-model="repeatPassword">
    <button @click.prevent="register">Зарегистрироваться</button>
    <router-link :to="'/login'">Войти</router-link>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: "RegistrationForm",
  data() {
    return {
      name: "",
      username: "",
      age: "",
      password: "",
      repeatPassword: "",
    }
  },
  watch: {
    age() {
      if (this.age < 13)
        this.age = 13
      else if (this.age > 90)
        this.age = 90
    }
  },
  methods: {
    register() {
      if (this.name.length < 4 || this.name.length > 26 ) {
        alert("Имя должно быть не меньше 4 и не больше 26 символов")
        return
      }
      if (this.username.length < 5 || this.username.length > 24 ) {
        alert("Логин должнен быть не меньше 5 и не больше 24 символов")
        return
      }
      if (this.age < 13 && this.age > 90 ) {
        alert("Возраст должен быть не меньше 13 и не больше 90 лет")
        return
      }
      if (this.password !== this.repeatPassword) {
        alert("Пароли отличаются")
        return
      }
      if (this.password.length < 8 || this.password.length > 36 ) {
        alert("Пароль должнен быть не меньше 8 и не больше 36 символов")
        return
      }

      let clientIp = ""
      fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(response => {
            clientIp = response.ip;
          });

      console.log(clientIp)

      axios.post('http://192.168.212.104:8081/api/addUser', {
        name: this.name,
        username: this.username,
        password: this.password,
        ip: clientIp,
        age: this.age,
      }).then(response => {
        if (response.data.status === '429')
          alert(response.data.title)
        else {
          localStorage.setItem("token", response.data.token)
          this.$router.push('users')
        }
      })
    }
  }
}
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
}
input {
  width: 100%;
  margin: 0 0 10px 0;
  font-size: 18px;
  padding: 5px 10px;
  box-sizing: border-box;
}
button {
  width: 100%;
  height: 50px;
  font-size: 18px;
}
a {
  display: inline-block;
  margin: 10px 0 0 0;
}
</style>