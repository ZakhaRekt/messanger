<template>
  <div id="app">
    <h1>
      <router-link :to="'/'">Cocksenger</router-link>
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
}
body {
  margin: 0;
}
h2 {
  margin: 0 0 10px 0;
  color: #fff;
  opacity: .9;
}
p {
  color: #fff;
  opacity: .6;
  text-align: left;
}
h1 {
  margin: 0;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 24px;
  z-index: 1;
  background: #142A3B;
}
h1 a {
  color: #fff !important;
  opacity: .9;
  text-decoration: none;
  margin: 0;
}
</style>
