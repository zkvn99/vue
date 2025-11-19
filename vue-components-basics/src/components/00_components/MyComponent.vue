<script setup lang="ts">

import {onMounted} from "vue";

onMounted(() => {
  console.log('MyComponent 마운트 완료');
});

</script>

<template>
  <div>
    <h1>My Component 입니다.</h1>
    <h3>단일 컴포넌트 기본 구조</h3>
  </div>
</template>

<style scoped>
  h1 {
    color : red;
  }
</style>