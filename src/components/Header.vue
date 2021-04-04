<template>
  <header>
    <div class="container">
      <h1>
        <router-link :to="'/'">Cocksenger</router-link>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  background: #1F3C53;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 50px;
}

h1 {
  padding: 0 10px;
  font-size: 24px;
  z-index: 1;
}

h1 a {
  color: #fff !important;
  opacity: .9;
  text-decoration: none;
  margin: 0;
}
</style>