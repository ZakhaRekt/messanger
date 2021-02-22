<template>
  <div>
    <router-link :to="'/login'">Войти</router-link>
    <router-link :to="'/register'">Зарегистрироваться</router-link>
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
