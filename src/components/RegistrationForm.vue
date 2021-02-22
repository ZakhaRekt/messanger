<template>
  <form>
    <input type="text" placeholder="Имя" v-model="name">
    <input type="text" placeholder="Логин" v-model="username">
    <input type="password" placeholder="Пароль" v-model="password">
    <input type="password" placeholder="Повтор Пароля" v-model="repeatPassword">
    <button @click="register">Зарегистрироваться</button>
    <router-link :to="'/login'">Войти</router-link>
  </form>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      name: "",
      username: "",
      password: "",
      repeatPassword: ""
    }
  },
  methods: {
    register() {

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