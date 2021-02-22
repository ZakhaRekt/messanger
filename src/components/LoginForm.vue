<template>
  <form>
    <input type="text" placeholder="Логин" v-model="username">
    <input type="password" placeholder="Пароль" v-model="password">
    <button @click="login">Войти</button>
    <a href="/register">Зарегистрироваться</a>
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
}
button {
  width: 100%;
}
a {
  display: inline-block;
  margin: 10px 0 0 0;
}
</style>