<template>
  <div class="info-container">
    <dateTest :dateText="date"></dateTest>

    <DynamicComponent :tagName="form[0].tagName" :data="form[0].data" />
  </div>
</template>

<script setup lang="ts">
import jsonData from './test.json';
import dateTest from './date-test.vue';
import DynamicComponent from './DynamicComponent.vue';

const date: string = jsonData.date;
const form = jsonData.form;

console.log(form[0]);
</script>

<style scoped>
@import url('@/css/information.css');
</style>
