<template>
  <div class="container">
    <ChatUsers/>
    <ChatHistory/>
    <ChatForm/>
  </div>
</template>

<script>
import ChatUsers from "./ChatUsers"
import ChatHistory from "./ChatHistory"
import ChatForm from "./ChatForm"

export default {
  components: {
    ChatUsers, ChatHistory, ChatForm
  }
}
</script>

<style scoped>
.container {
  display: grid;
  max-width: 1400px;
  margin: 0 auto;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 120px;
  grid-gap: 10px;
  height: calc(100vh - 50px);
}
</style>