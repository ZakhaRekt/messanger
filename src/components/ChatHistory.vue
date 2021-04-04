<template>
  <div>
    <ul>
      <li
          v-for="message in messages"
          :key="message.id"
          class="message"
          :class="{'me': message.user.name === 'Я'}"
      >
        <img class="message-avatar" :src="message.user.avatarUrl" alt="">
        <p class="message-body">{{ message.body }}</p>
        <span class="message-date">{{ message.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {id: 0,
          user: {
            name: "Александр Нестеренко",
            avatarUrl: "https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"
          },
          body: "Привет)))",
          date: "Только что"
        },
        {id: 1,
          user: {
            name: "Я",
            avatarUrl: "https://yt3.ggpht.com/ytc/AAUvwnhSSaF3Q-PyyTSis4EH6Cu8FZ32LNvkxI9Gl_rn=s900-c-k-c0x00ffffff-no-rj"
          },
          body: "Здарова",
          date: "Только что"
        },
        {id: 2,
          user: {
            name: "Александр Нестеренко",
            avatarUrl: "https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"
          },
          body: "Как жизнь молодая?",
          date: "Только что"
        },
        {id: 3,
          user: {
            name: "Я",
            avatarUrl: "https://yt3.ggpht.com/ytc/AAUvwnhSSaF3Q-PyyTSis4EH6Cu8FZ32LNvkxI9Gl_rn=s900-c-k-c0x00ffffff-no-rj"
          },
          body: "Отлично",
          date: "Только что"
        },
        {id: 4,
          user: {
            name: "Я",
            avatarUrl: "https://yt3.ggpht.com/ytc/AAUvwnhSSaF3Q-PyyTSis4EH6Cu8FZ32LNvkxI9Gl_rn=s900-c-k-c0x00ffffff-no-rj"
          },
          body: "А у тебя?",
          date: "Только что"
        },
      ]
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 15px;
}

li {
  margin: 0;
  display: block;
}

.message {
  width: 100%;
  position: relative;
  height: 60px;
  margin: 0 0 20px 0;
}

.message:last-child {
  margin: 0;
}

.message-date {
  display: block;
  position: absolute;
  bottom: 0;
  left: 60px;
}

.message.me .message-date {
  left: auto;
  right: 60px;
}

.message-avatar {
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  left: 0;
}

.message.me .message-avatar {
  left: auto;
  right: 0;
}

.message-body {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  width: auto;
  max-width: calc(66% - 60px);
  position: absolute;
  margin: 0 0 10px 0;
  left: 60px;
  height: 40px;
  background: #0a181f;
  padding: 15px;
}

.message.me .message-body {
  left: auto;
  right: 60px;
}
</style>