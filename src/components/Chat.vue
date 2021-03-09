<template>
    <div>
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
    div {
        display: grid;
        grid-template-columns: 300px auto;
        grid-template-rows: 400px 60px;
        grid-gap: 10px;
    }
</style>