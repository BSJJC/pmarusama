<template>
  <div>inforamtion</div>
  <br />
  <div v-html="data.informations[0].text"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref('');

onMounted(() => {
  axios.get('http://localhost:5000/api/information/get').then((res) => {
    data.value = res.data;
  });
});
</script>

<style></style>
