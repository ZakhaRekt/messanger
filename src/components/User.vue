<template>
  <div>
    <div v-if="user.name">{{ user.name }}</div>
    <div v-else>Ошибка 404. Пользователь не существует!</div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "User",
  data() {
    return {
      user: [],
    }
  },
  mounted() {
    axios.get("http://192.168.212.104:8081/api/user/" + this.$route.params.username, {
          params: {
            token: localStorage.getItem("token")
          }
        })
        .then(response => {
          this.user = response.data.user
        })
  }
}
</script>

<style scoped>

</style>