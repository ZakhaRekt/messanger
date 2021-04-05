<template>
  <div>
    <form @submit.prevent="submit">
      <textarea class="message-input" v-model="messageText" placeholder="Текст"></textarea>
      <button class="submit">отправить</button>
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
  background: #142A3B;
}

form {
  display: flex;
  height: 100%;
}

.message-input {
  width: 100%;
  resize: none;
  font-size: 14px;
  padding: 8px 11px;
  user-select: none;
  background: none;
  border: 1px solid #ffffff16;
  outline: none;
  color: #fff;
  opacity: .9;
  font-family: Arial,serif;
}

.message-input::placeholder {
  color: #fff;
  opacity: .5;
}

.submit {
  font-size: 18px;
  width: 200px;
  background: linear-gradient(45deg, #5678F9, #5FBBFE);
  border: none;
  color: #fff;
  outline: none;
  cursor: pointer;
}
</style>