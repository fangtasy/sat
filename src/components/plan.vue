<template>
  <div>
    <a-table :dataSource="props.dataSource" :columns="columns" />
  </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps(['datasource'])
  const columns = [
    {
      title: '航天器',
      dataIndex: '',
      key: '',
    },
    {
      title: '测控设备',
      dataIndex: '',
      key: '',
    },
    {
      title: '圈次',
      dataIndex: '',
      key: '',
    },
    {
      title: '升降轨',
      dataIndex: '',
      key: '',
    },
    {
      title: '最高仰角',
      dataIndex: '',
      key: '',
    },
    {
      title: '网管开始',
      dataIndex: '',
      key: '',
    },
    {
      title: '任务开始',
      dataIndex: '',
      key: '',
    },
    {
      title: '捕获开始',
      dataIndex: '',
      key: '',
    },
    {
      title: '跟踪开始',
      dataIndex: '',
      key: '',
    },
    {
      title: '跟踪开始',
      dataIndex: '',
      key: '',
    },
    {
      title: '跟踪结束',
      dataIndex: '',
      key: '',
    },
    {
      title: '任务结束',
      dataIndex: '',
      key: '',
    },
  ]
</script>
<style lang="less">
  
</style>