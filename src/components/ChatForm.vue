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
        border: 2px solid #bbb;
        grid-column: 2;
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
    }
    .submit {
        width: 200px;
    }
</style>