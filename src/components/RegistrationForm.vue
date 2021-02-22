<template>
  <form>
    <input type="text" placeholder="Имя" v-model="name">
    <input type="text" placeholder="Логин" v-model="username">
    <input type="password" placeholder="Пароль" v-model="password">
    <input type="password" placeholder="Повтор Пароля" v-model="repeatPassword">
    <button @click.prevent="register">Зарегистрироваться</button>
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
      if (this.name.length < 4 || this.name.length > 16 ) {
        alert("Имя должно быть не меньше 4 и не больше 16 символов")
        return
      }
      if (this.username.length < 8 || this.username.length > 24 ) {
        alert("Логин должнен быть не меньше 8 и не больше 24 символов")
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