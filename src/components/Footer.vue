<template>
  <footer>
    <div class="container">
      <p>Проект поддерживаеться <a href="https://github.com/ZakhaRekt" target="_blank">Захаром Медуницей</a> и <a href="https://github.com/LyaShket" target="_blank">Дмитрием Демяненко</a>. Все исходники лежат в приватном репозитории и не могут быть опубликованы по соображениям безопасности.</p>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
footer {
  background: #081216;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 30px;
}
p {
  color: #fff;
  opacity: .4;
  width: 100%;
  text-align: center;
  font-size: 12px;
}
a {
  color: #5FBBFE;
  text-decoration: none;
  transition: opacity .2s ease;
}
a:hover {
  opacity: .5;
}
</style>