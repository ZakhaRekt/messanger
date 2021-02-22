<template>
  <form>
    <input type="text" placeholder="Логин" v-model="username">
    <input type="password" placeholder="Пароль" v-model="password">
    <button @click.prevent="login">Войти</button>
    <router-link :to="'/register'">Зарегистрироваться</router-link>
  </form>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    login() {

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