<template>
  <div class="registration">
    <CirclesAnimation/>
    <form>
      <h2>Регистрация</h2>
      <input type="text" placeholder="Имя" v-model="name">
      <input type="text" placeholder="Логин" v-model="username">
      <input type="number" min="13" max="90" placeholder="Возраст" v-model="age">
      <input type="password" placeholder="Пароль" v-model="password">
      <input type="password" placeholder="Повтор Пароля" v-model="repeatPassword">
      <button @click.prevent="register">зарегистрироваться</button>
      <router-link :to="'/login'">Вход</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import CirclesAnimation from "./CirclesAnimation";
export default {
  name: "RegistrationForm",
  components: {CirclesAnimation},
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
.registration {
  height: calc(100vh - 50px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2648c6;
}
form {
  background: #142A3B;
  padding: 30px 30px 0 30px;
  max-width: 400px;
  margin: 0 0 50px 0;
  width: 100%;
  z-index: 1;
}
form h2 {
  margin: 0 0 10px 0;
  color: #fff;
  opacity: .9;
}
input {
  width: 100%;
  margin: 0 0 20px 0;
  font-size: 14px;
  padding: 12px 12px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #2d4669;
  outline: none;
  color: #fff;
  opacity: .9;
  background: #142A3B;
}
input::placeholder {
  color: #fff;
  opacity: 0.5;
}
button {
  width: 100%;
  height: 50px;
  font-size: 18px;
  background: linear-gradient(45deg, #5678F9, #5FBBFE);
  border: none;
  color: #eee;
  letter-spacing: 1.2px;
  cursor: pointer;
  outline: none;
  transition: opacity .2s ease;
}
button:hover {
  opacity: 0.5;
}
a {
  display: inline-block;
  margin: 0;
  padding: 20px 0 25px 0;
  width: 100%;
  color: #fff;
  opacity: .9;
  text-decoration: none;
  transition: opacity .2s ease;
}
a:hover {
  opacity: .5;
}
</style>