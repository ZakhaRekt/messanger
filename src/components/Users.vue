<template>
  <ul>
    <li v-for="user in users"
        :key="user.username">
      <span>Имя: {{ user.name }}</span>
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
        .get('http://192.168.212.104:8081/api/users')
        .then(response => this.users = response.data.users)
  }
}
</script>

<style scoped>

</style>