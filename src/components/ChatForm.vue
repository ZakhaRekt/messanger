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
      messageText: "",
    }
  },
  methods: {
    submit() {
      let dateNow = Date.now()
      this.connection.send(JSON.stringify(
        { 
          token: localStorage.getItem("token"),
          id: dateNow,
          date: new Date(dateNow),
          content: this.messageText,
          checked: false
        }
        ))
    }
  },
  created: function() {
    // send msg
    this.connection = new WebSocket("ws://192.168.212.104:8081")

    this.connection.onmessage = function(event) {
      let response = JSON.parse(event.data)
      switch(response.state) {
        case "SERVER: MSG_ADDED":
          console.log(response.message_date.content);
          break;
        case "SERVER: MSG_ERROR":
          alert(response.error);
          break;
      }
    }

    this.connection.onopen = function(event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
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