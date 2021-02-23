<template>
  <div>
    <a href="https://youtube.com">{{ user.name }}</a>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "User",
  data() {
    return {
      user: []
    }
  },
  mounted() {
    axios.get("http://192.168.212.104:8081/api/user/" + this.$route.params.username)
        .then(response => this.user = response.data.user)
  }
}
</script>

<style scoped>

</style>