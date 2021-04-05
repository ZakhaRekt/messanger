<template>
  <div class="header">
    <div>
      <h2>Sanya</h2>
      <p>последний раз в сети недавно</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatHistoryHeader"
}
</script>

<style scoped>
.header {
  min-height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ffffff16;
}
h2 {
  margin: 0 10px 0 0;
  opacity: .9;
  font-size: 18px;
  display: inline-block;
}
p {
  display: inline-block;
  color: #fff;
  opacity: .4;
  font-size: 14px;
}
</style>