<template>
  <div class="container">
    <div class="header">
      <a-row>
      <div class="label">任务代码：</div>
      <a-select
        ref="select"
        v-model:value="selectedSat"
        :options="satList"
        @change="handleChange"
        style="width: 200px"
        placeholder="单星选择"
      ></a-select>
    </a-row>
    </div>
    <div>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="0" tab="卫星统计"><statistic :data="statisticData" :chartData="chartData" /></a-tab-pane>
        <a-tab-pane key="1" tab="网管计划"><plan :data="planData"/></a-tab-pane>
        <a-tab-pane key="2" tab="轨道根数"><orbit :data="orbitData" /></a-tab-pane>
       
      </a-tabs>
    </div>
    <div class="content"></div>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive } from 'vue'
import statistic from '../components/statistic.vue'
import orbit from '../components/orbit.vue'
import plan from '../components/plan.vue'
import api from '../api/index';

const selectedSat = ref();
const satList = ref([]);
const statisticData = reactive([
  {
    name: '单星总量',
    value: '100KB',
  },
  {
    name: '当前圈次',
    value: '1',
  },
  {
    name: '下一轨道时间',
    value: '2023-06-22 12:00:00',
  },
  {
    name: '当前速率',
    value: '100kbps',
  },
]);
const chartData = reactive();
const orbitData = reactive();
const planData = reactive();

onMounted(()=>{
  api.getSatIndexes().then(res => {
    console.log('res  ', res);
    satList.value = res.data;
  }).catch(e => {console.error('getSatIndex failed ', e)})
  satList.value = [
    {value: 'SAT-001', label: 'SAT-001'},
    {value: 'SAT-002', label: 'SAT-002'},
    {value: 'SAT-003', label: 'SAT-003'},
    {value: 'SAT-004', label: 'SAT-004'},
    {value: 'SAT-005', label: 'SAT-005'},
    {value: 'SAT-006', label: 'SAT-006'},
    {value: 'SAT-007', label: 'SAT-007'},
  ]
})


</script>
<style lang="less" scoped>
.container {
  margin: 20px;

  .label {
    display: flex;
    place-items: center;
  }
}
</style>