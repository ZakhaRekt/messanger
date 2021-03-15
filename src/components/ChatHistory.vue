<template>
    <div>
        <ul>
            <li
            v-for="message in messages"
            :key="message.id"
            class="message">
            <span class="message-user-name">{{ message.user.name }}</span>
            <span class="message-date">{{ message.date }}</span>
            <img class="message-avatar" :src="message.user.avatarUrl" alt="">
            <p class="message-body">{{ message.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [
                { id: 0, user: { name: "Александр Нестеренко", avatarUrl: "https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg" }, body: "Привет)))", date:"Только что" },
                { id: 1, user: { name: "Я", avatarUrl: "https://yt3.ggpht.com/ytc/AAUvwnhSSaF3Q-PyyTSis4EH6Cu8FZ32LNvkxI9Gl_rn=s900-c-k-c0x00ffffff-no-rj" }, body: "Здарова", date:"Только что" },
                { id: 2, user: { name: "Александр Нестеренко", avatarUrl: "https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg" }, body: "Как жизнь молодая?", date:"Только что" },
                { id: 3, user: { name: "Я", avatarUrl: "https://yt3.ggpht.com/ytc/AAUvwnhSSaF3Q-PyyTSis4EH6Cu8FZ32LNvkxI9Gl_rn=s900-c-k-c0x00ffffff-no-rj" }, body: "Отлично", date:"Только что" },
                { id: 4, user: { name: "Я", avatarUrl: "https://yt3.ggpht.com/ytc/AAUvwnhSSaF3Q-PyyTSis4EH6Cu8FZ32LNvkxI9Gl_rn=s900-c-k-c0x00ffffff-no-rj" }, body: "А у тебя?", date:"Только что" },
            ]
        }
    }
}
</script>

<style scoped>
    div {
        border: 2px solid #bbb;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin: 0;
        display: grid;
    }
    .message {
        grid-template-columns: 40px auto;
        grid-template-rows: 14px auto;
        grid-template-areas: "name date"
                             "avatar message";
        grid-gap: 10px;
    }
    .message-user-name {
        font-size: 12px;
        grid-area: name;
    }
    .message-date {
        grid-area: date;
    }
    .message-avatar {
        width: 40px;
        height: 40px;
        background: rgb(0, 204, 255);
        border-radius: 50%;
        object-fit: cover;
        grid-area: avatar;
    }
    .message-body {
        grid-area: body;
    }
</style>