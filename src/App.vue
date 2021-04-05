<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {Footer, Header},
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
  background: #112432;
}
h2 {
  margin: 0 0 10px 0;
  color: #fff;
  opacity: .9;
}
</style>
