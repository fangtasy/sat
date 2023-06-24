<script setup>
import dragCard from './components/dragCard.vue'
</script>

<template>
  <h2 class="title">卫星信息统计</h2>
  <drag-card></drag-card>
  <router-view></router-view>
</template>

<style scoped>
.title {
  width: 100%;
  margin: auto;
  text-align: center;
  height: 60px;
  font-size: 36px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
