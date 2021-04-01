<template>
  <div>
    <form @submit.prevent="submit">
      <textarea class="message-input" v-model="messageText"></textarea>
      <button class="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageText: ""
    }
  },
  methods: {
    submit() {
      alert(this.messageText)
    }
  }
}
</script>

<style scoped>
div {
  grid-column: 2;
  padding: 15px 15px 50px 15px;
}

form {
  display: flex;
  height: 100%;
}

.message-input {
  width: 100%;
  resize: none;
  font-size: 18px;
  padding: 5px 8px;
  user-select: none;
  background: #2c3e50;
  border: none;
  outline: none;
  color: #fff;
  opacity: .9;
}

.submit {
  width: 200px;
  background: linear-gradient(45deg, #5678F9, #5FBBFE);
  border: none;
  color: #fff;
  outline: none;
}
</style>