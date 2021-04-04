<template>
  <div class="bg-container">
    <CirclesAnimation/>
    <router-view></router-view>
  </div>
</template>

<script>
import CirclesAnimation from "./CirclesAnimation";
export default {
name: "BackgroundedContainer",
  components: {CirclesAnimation}
}
</script>

<style scoped>
.bg-container {
  height: calc(100vh - 80px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>