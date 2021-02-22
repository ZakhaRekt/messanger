<template>
  <form>
    <input type="text" placeholder="Имя" v-model="name">
    <input type="text" placeholder="Логин" v-model="username">
    <input type="password" placeholder="Пароль" v-model="password">
    <input type="password" placeholder="Повтор Пароля" v-model="repeatPassword">
    <button @click="register">Зарегистрироваться</button>
    <a href="/login">Войти</a>
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
}
button {
  width: 100%;
}
a {
  display: inline-block;
  margin: 10px 0 0 0;
}
</style>