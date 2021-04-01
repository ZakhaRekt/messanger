<template>
  <div class="home">
    <CirclesAnimation/>
    <div class="content">
      <h2>Добро пожаловать!</h2>
      <p>Этот сайт является мессенджером, созданным как проект для информатики 10-Б класса. Разработку ведут Захар Медуница и Дмитрий Демяненко</p>
      <router-link :to="'/register'">пройти регистрацию</router-link>
      <router-link :to="'/login'">Вход</router-link>
    </div>
  </div>
</template>

<script>
import CirclesAnimation from "./CirclesAnimation";
export default {
  name: 'Home',
  components: {CirclesAnimation},
}
</script>

<style>
.home {
  height: calc(100vh - 50px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home h2 {
  margin: 0 0 16px 0;
  color: #fff;
  opacity: .9;
}
.content {
  background: #1F3C53;
  padding: 30px 30px 0 30px;
  max-width: 400px;
  margin: 0 0 50px 0;
  width: 100%;
  z-index: 1;
}
.content p {
  margin: 0 0 25px 0;
  text-align: center;
  line-height: 150%;
}
  .content a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
  }
  .content a:nth-child(3) {
    height: 50px;
    font-size: 18px;
    background: linear-gradient(45deg, #5678F9, #5FBBFE);
    border: none;
    color: #eee;
    letter-spacing: 1.2px;
    cursor: pointer;
    outline: none;
    transition: opacity .2s ease;
  }
.content a:nth-child(4) {
  margin: 0;
  width: 100%;
  color: #fff;
  opacity: .9;
  text-decoration: none;
  transition: opacity .2s ease;
  padding: 20px 0 25px 0;
}
.content a:hover {
  opacity: .5;
}
</style>
