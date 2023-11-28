<template>
  <div class="info-container">
    <dateTest :dateText="date"></dateTest>

    <DynamicComponent v-for="(i, index) in form" :key="index" :tagName="form[index].tagName" :data="i.data" />
  </div>
</template>

<script setup lang="ts">
import jsonData from './test.json';
import dateTest from './date-test.vue';
import DynamicComponent from './DynamicComponent.vue';

const date: string = jsonData.date;
const form = jsonData.form;

console.log(form);
</script>

<style scoped>
@import url('@/css/information.css');
</style>
