<template>
  <div id="app">
    <header>
      <div class="container">
        <h1>
          <router-link :to="'/'">Cocksenger</router-link>
        </h1>
      </div>
    </header>
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
  background: #142A3B;
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
header {
  background: #1F3C53;
}
header .container {
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
