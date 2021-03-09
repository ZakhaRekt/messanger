<template>
    <div class="container">
        <ul>
            <li v-for="user in users"
                :key="user.username"
                @click="selectChatUser(user.username)"
                :class="{ selected: user === selectedChatUser }"
            >
                <div class="test-ava" :style="{ background: getRandomColor() }"></div>
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
                { username: "alexnest", name: "Sanya" },
                { username: "dasadsas", name: "Ilya" },
                { username: "dfskldf", name: "Nikita" },
                { username: "vviifddfi", name: "Anya" },
                { username: "dosfodfsdsf", name: "Maryna" },
                { username: "asmdmdasasd", name: "Zakhar" },
                { username: "dsaiasdo", name: "Temur" },
            ],
            selectedChatUser: null
        }
    },
    methods: {
        getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
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
        padding: 15px 5px;
    }
    li {
        margin: 0 0 10px 0;
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
        background-color: red;
        cursor: auto;
    }
    .test-ava {
        width: 40px;
        height: 40px;
        background: rgb(0, 204, 255);
        border-radius: 50%;
    }
    li p {
        margin: 0 0 0 10px;
    }
</style>