<template>
  <div>
    <router-link :to="'/login'">Вход</router-link>
    <router-link :to="'/register'">Регистрация</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
  a {
    display: block;
    margin: 0 0 10px 0;
  }
</style>
