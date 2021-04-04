<template>
  <ul v-if="alerts.length > 0">
    <li
        v-for="(alert, index) in alerts"
        :key="index"
    >⚠ {{ alert }}</li>
  </ul>
</template>

<script>
export default {
  name: "Alerts",
  props: {
    alerts: Array
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  color: #C0975F;
  font-weight: bold;
  opacity: 1;
  text-align: left;
  margin: 0 0 9px 0;
  font-size: 12px;
}
li:last-child {
  margin: 0 0 20px 0;
}
</style>