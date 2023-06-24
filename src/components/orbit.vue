<template>
  <div>
    <a-table :dataSource="props.dataSource" :columns="columns" />
  </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps(['datasource'])
</script>
<style lang="less">
  
</style>