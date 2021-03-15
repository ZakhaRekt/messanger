<template>
    <div class="container">
        <ul>
            <li v-for="user in users"
                :key="user.username"
                @click="selectChatUser(user.username)"
                :class="{ selected: user === selectedChatUser }"
            >
                <img class="avatar" :src="user.avatarUrl" alt="">
                <p>{{ user.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { username: "alexnest", name: "Sanya", avatarUrl: "https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg" },
                { username: "dasadsas", name: "Ilya", avatarUrl: "https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg" },
                { username: "dfskldf", name: "Nikita", avatarUrl: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" },
                { username: "vviifddfi", name: "Anya", avatarUrl: "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg" },
                { username: "dosfodfsdsf", name: "Maryna", avatarUrl: "https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg" },
                { username: "asmdmdasasd", name: "Zakhar", avatarUrl: "https://meragor.com/files/styles//ava_800_800_wm/standoff_162.jpg" },
                { username: "dsaiasdo", name: "Temur", avatarUrl: "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg" },
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
        border: 2px solid #bbb;
        grid-column: 1;
        grid-row: 1 / 3;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: calc(100% - 4px);
    }
    li {
        padding: 5px;
        box-sizing: border-box;
        text-align: left;
        font-size: 18px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    li:last-child {
        margin: 0;
    }
    li.selected {
        background-color: #bbb;
        cursor: auto;
    }
    .avatar {
        width: 40px;
        height: 40px;
        background: rgb(0, 204, 255);
        border-radius: 50%;
        object-fit: cover;
    }
    li p {
        margin: 0 0 0 10px;
    }
</style>