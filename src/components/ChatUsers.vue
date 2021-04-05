<template>
  <div class="container">
    <div class="current-user">
      User
    </div>
    <form class="search-form">
      <input type="text" placeholder="Найти пользователя">
    </form>
    <ul>
      <li v-for="user in users"
          :key="user.username"
          @click="selectChatUser(user.username)"
          :class="{
            selected: user === selectedChatUser,
            nohistory: !user.body,
          }"
      >
        <img class="avatar" :src="user.avatarUrl" alt="">
        <p>{{ user.name }}</p>
        <p>{{ user.body }}</p>
        <p>{{ user.date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          username: "alexnest",
          name: "Sanya",
          avatarUrl: "https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg",
          body: "Привет)))",
          date: "Только что"
        },
        {
          username: "dasadsas",
          name: "Ilya",
          avatarUrl: "https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg",
          body: "Привет)))",
          date: "Только что"
        },
        {
          username: "dfskldf",
          name: "Nikita",
          avatarUrl: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg",
          body: "Привет)))",
          date: "Только что"
        },
        {
          username: "vviifddfi",
          name: "Anya",
          avatarUrl: "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg",
          body: "Привет)))",
          date: "Только что"
        },
        {
          username: "dosfodfsdsf",
          name: "Maryna",
          avatarUrl: "https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg",
          body: "Привет)))",
          date: "Только что"
        },
        {
          username: "asmdmdasasd",
          name: "Zakhar",
          avatarUrl: "https://meragor.com/files/styles//ava_800_800_wm/standoff_162.jpg"
        },
        {
          username: "dsaiasdo",
          name: "Temur",
          avatarUrl: "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg"
        },
      ],
      selectedChatUser: null
    }
  },
  methods: {
    selectChatUser(chatUserUsername) {
      this.users.forEach(user => {
        if (user.username === chatUserUsername)
          this.selectedChatUser = user
      })
    }
  }
}
</script>

<style scoped>
.container {
  grid-column: 1;
  grid-row: 1 / 3;
  padding: 20px 0 0 0;
}

.current-user {
  margin: 0 0 20px 0;
}

.search-form {
  position: relative;
  margin: 0 0 20px 0;
}

.search-form:after {
  content: '🔎';
  font-size: 22px;
  position: absolute;
  right: 10px;
  top: 5px;
  z-index: 1;
}

.search-form input {
  width: 100%;
  font-size: 14px;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ffffff16;
  outline: none;
  color: #fff;
  opacity: .9;
  background: #142A3B;
}

.search-form input::placeholder {
  color: #fff;
  opacity: .5;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

li {
  padding: 10px 10px;
  box-sizing: border-box;
  text-align: left;
  font-size: 18px;
  display: grid;
  grid-template-areas: "avatar name date" "avatar body date";
  grid-template-rows: auto auto;
  grid-template-columns: 50px auto auto;
  border-bottom: 1px solid #fff1;
}

li.nohistory {
  grid-template-areas: "avatar name";
  grid-template-rows: auto;
  grid-template-columns: 50px;
}

li:last-child {
  margin: 0;
}

li {
  cursor: default;
}
li * {
  cursor: default;
}

li.selected {
  background-color: #0a181f;
}

li p {
  color: #fff;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: avatar;
}

li p:nth-child(2) {
  grid-area: name;
  margin-top: 3px;
  opacity: .9;
}
li.nohistory p:nth-child(2) {
  margin-top: 0;
  display: flex;
  align-items: center;
}
li p:nth-child(3) {
  grid-area: body;
  font-size: 14px;
  opacity: .5;
}
li p:nth-child(4) {
  grid-area: date;
  margin: 7px 0 0 0;
  text-align: right;
  font-size: 12px;
  opacity: .3;
}
li.nohistory p:nth-child(3),
li.nohistory p:nth-child(4) {
  display: none;
}

li p {
  margin: 0 0 0 10px;
}
</style>