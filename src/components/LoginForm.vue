<template>
  <div class="login">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
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

export default {
  name: "LoginForm",
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

.circles{
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;

}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {

  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}
</style>