<template>
  <div class="registration">
    <form>
      <h2>Регистрация</h2>
      <input type="text" placeholder="Имя" v-model="name">
      <input type="text" placeholder="Логин" v-model="username">
      <input type="number" min="13" max="90" placeholder="Возраст" v-model="age">
      <input type="password" placeholder="Пароль" v-model="password">
      <input type="password" placeholder="Повтор Пароля" v-model="repeatPassword">
      <FormAlerts :alerts="alerts"/>
      <button @click.prevent="register">зарегистрироваться</button>
      <router-link :to="'/login'">Вход</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import FormAlerts from "./FormAlerts";
export default {
  name: "RegistrationForm",
  components: {FormAlerts},
  data() {
    return {
      name: "",
      username: "",
      age: "",
      password: "",
      repeatPassword: "",

      alerts: [],
    }
  },
  watch: {
    name() {
      this.alerts = []
    },
    username() {
      this.alerts = []
    },
    age() {
      this.alerts = []
    },
    password() {
      this.alerts = []
    },
    repeatPassword() {
      this.alerts = []
    },
  },
  methods: {
    updateAlerts() {
      this.alerts = []

      if (this.name.length === 0) {
        this.alerts.push("Заполните поле имени!")
      }
      else if (this.name.length < 4 || this.name.length > 26 ) {
        this.alerts.push("Имя должно быть от 4 до 26 символов!")
      }

      if (this.username.length === 0) {
        this.alerts.push("Заполните поле логина!")
      }
      else if (this.username.length < 5 || this.username.length > 24) {
        this.alerts.push("Логин должнен быть от 5 до 24 символов!")
      }

      if (this.age.length === 0) {
        this.alerts.push("Заполните поле возраста!")
      }
      else if (this.age < 13 || this.age > 90) {
        this.alerts.push("Возраст должен быть от 13 до 90 лет!")
      }

      if (this.password.length === 0) {
        this.alerts.push("Заполните поле пароля!")
      }
      else if (this.password.length < 8 || this.password.length > 36 ) {
        this.alerts.push("Пароль должнен быть от 8 до 36 символов")
      }

      if (this.password !== this.repeatPassword) {
        this.alerts.push("Пароли отличаются")
      }
    },
    register() {
      this.updateAlerts()
      if (this.alerts === []) {
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
  border-bottom: 1px solid #ffffff16;
  outline: none;
  color: #fff;
  opacity: .9;
  background: #1F3C53;
}
input::placeholder {
  color: #fff;
  opacity: .5;
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