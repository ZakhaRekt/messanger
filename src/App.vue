<template>
  <div id="app">
    <h1>
      <router-link :to="'/'">Messenger</router-link>
    </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 a {
  color: #333 !important;
  text-decoration: none;
}
</style>
