<template>
  <div
    id="drag-card"
    class="draggable-card"
    :class="{ 'red-shadow': hasError,'green-shadow': !hasError }"
    @mousedown="dragStart" @mousemove="dragging" @mouseup="dragEnd"
    :style="{ top: cardPosition.top + 'px', left: cardPosition.left + 'px' }"
  >
    <div class="header" :class="{ 'round': !showContent}">
      <div class="title" >{{cardTitle || '异常状态列表' }}</div>
      <div class="collapse-icon">
        <plus-outlined v-if="!showContent" @click="showContent = true"/>
        <minus-outlined v-else @click="showContent = false"/>
      </div>
    </div>
    <div class="content" v-if="showContent">
      <div v-if="hasError">
        <div class="error-list" v-for="(item, index) in errorList" :key="index">
          <div class="sat-name">{{ item.name }}</div>
          <!-- <div class="sat-id"></div> -->
          <div class="sat-error">{{ item.error }}</div>
        </div>
      </div>
      <div class="normal-text"  v-else>所有轨道卫星均正常运行</div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import {
  PlusOutlined,
  MinusOutlined
} from '@ant-design/icons-vue';

const props = defineProps(['cardTitle'])
const showContent = ref(true)
const hasError = ref(false)
const isDragging = ref(false)

const cardPosition = reactive({
  top: 200,
  left: 1200,
  startX: 0,
  startY: 0
})

// const collapsed = ref(false)

const dragStart = (event) => {
  // 将卡片的id和拖动效果设置为数据传递
  console.log('event ', event);
  isDragging.value = true;
  cardPosition.startX = event.clientX - cardPosition.left;
  cardPosition.startY = event.clientY - cardPosition.top;
}

const dragging = (event) => {
  if (!isDragging.value) return;
  // 拖动结束时 边界检测
      // 更新卡片的位置
  // const target = event.target;
  cardPosition.left = event.clientX - cardPosition.startX;
  cardPosition.top = event.clientY - cardPosition.startY;
}
const dragEnd = () => {
  isDragging.value = false
}
</script>
<style lang="less" scoped>
.draggable-card {
  width: 400px;
  position: absolute;
  background: #fff;
  top: 10%;
  right: 10%;
  z-index: 999;
  border-radius: 8px;
  box-shadow: 4px 4px 14px #888;
  
  
  .header {
    background: #93CFF5;
    display: flex;
    padding: 5px 20px;
    justify-content: space-between;
    border-radius: 8px 8px 0 0 ;
    &.round {
      border-radius: 8px;
    }
  }
  .content {
    min-height: 100px;
    padding: 20px;

    .normal-text {
      color: #00FF2A;
      font-size: 24px;
      font-weight: bold;
    }
  }
}
.red-shadow {
  border: 2px solid red;
  animation: flowing-red 3s ease-in-out infinite;
}
.green-shadow {
  border: 2px solid #00FF2A;
  animation: flowing-green 3s ease-in-out infinite;
}
@keyframes flowing-red {
  0% {
    border-color: red;
    box-shadow: 0px 0px 12px red;
  }
  50% {
    border-color: #F5ABAB;
    box-shadow: 0px 0px 12px #F5ABAB;
  }
  100% {
    border-color: red;
    box-shadow: 0px 0px 12px red;
  }
}
@keyframes flowing-green {
  0% {
    border-color: #00FF2A;
    box-shadow: 0px 0px 12px #00ff2a;
  }
  50% {
    border-color: #D3FEDE;
    box-shadow: 0px 0px 12px #D3FEDE;
  }
  100% {
    border-color: #00FF2A;
    box-shadow: 0px 0px 12px #00ff2a;
  }
}
</style>