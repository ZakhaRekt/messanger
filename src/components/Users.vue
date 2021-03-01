<template>
  <ul>
    <li v-for="user in users"
        :key="user.username">

      <router-link :to="{name: 'user', params: {username: user.username}}">Имя: {{ user.name }}</router-link>
      <span>Возраст: {{ user.age }}</span>
    </li>
  </ul>
</template>

<script>
import axios from "axios"

export default {
  name: "Users",
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios
        .post('http://192.168.212.104:8081/api/users', { token: localStorage.getItem("token") })
        .then(response => {
            if (response.data.status === "501" || response.data.status === "404")
              this.$router.push("login")
            else
              this.users = response.data.users
          })
  }
}
</script>

<style scoped>

</style>