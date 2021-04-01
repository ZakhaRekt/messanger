<template>
  <div class="login">
    <CirclesAnimation/>
    <form>
      <h2>Вход</h2>
      <input type="text" placeholder="Логин" v-model="username">
      <input type="password" placeholder="Пароль" v-model="password">
      <button @click.prevent="login">войти</button>
      <router-link :to="'/register'">Регистрация</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import CirclesAnimation from "./CirclesAnimation";

export default {
  name: "LoginForm",
  components: {CirclesAnimation},
  data() {
    return {
      username: "",
      password: "",
      clientIp: "",
    }
  },
  methods: {
    login() {
      axios.post('http://192.168.212.104:8081/api/auth', {
        username: this.username,
        password: this.password,
        ip: this.clientIp,
      }).then(response => {
        localStorage.setItem("token", response.data.token)
        this.$router.push('users')
      })
    }
  },
}
</script>

<style scoped>
.login {
  height: calc(100vh - 50px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  background: #1F3C53;
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
  background: #1F3C53;
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