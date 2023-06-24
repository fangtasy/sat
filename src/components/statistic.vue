<template>
  <div class="container">
    <div class="chart">
      <div class="label"> 请选择时间： <a-range-picker v-model:value="value2" show-time ok="handleTime" :locale="locale" /></div>
      <div id="echart" />
    </div>
    <div >
      <div class="title">单星信息</div>
    <div class="info-panel">
      
      <div class="info-row" v-for="(item, index) in data" :key="index">
        <a-statistic :title="item.name " :value="item.value"></a-statistic>
      </div>  
    </div>
  </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import * as echarts from 'echarts';

const props = defineProps(['data', 'chartData'])
// const locale = locale;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
]

let myChart;

onMounted(()=> {
  const chartDom = document.getElementById('echart');
  myChart = echarts.init(chartDom, null, {height: '600px'});
  const option = {
    xAxis: {
      type: 'time',
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
    },
    series: [
      {
        data: '',
        type: 'line',
        smooth: false,
      }
    ]
  };
  option && myChart.setOption(option);
  window.addEventListener('resize', myChart.resize);
})

const handleTime = () => {

}

</script>
<style lang="less" scoped>
.container {
  display: flex;

  .chart {
    flex: 4 0 20%;
  }
}
.info-panel {
  background: rgb(147 166 245 / 30%);
  display: grid;
  flex: 1 0 30%;
  padding: 20px;
  grid-auto-columns: auto;
  grid-auto-rows: minmax(46px, auto);
  gap: 10px;

}

.title {
    font-size: 24px;
  }
.info-row {
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  color: #c53b19;

  .left-name {
    font-weight: bold;
  }
  .right-value {

  }
}
</style>