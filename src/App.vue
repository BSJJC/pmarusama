<template>
  <div id="body">
    <Top></Top>

    <Inforemation></Inforemation>
  </div>
</template>
  
<script setup lang='ts'>
import Top from "./components/Top/index.vue"
import Inforemation from "./components/Infomation/index.vue"
</script>
  
<style scoped>
#body {
  background-image: url(./assets/imgs/body-bg.png);
}
</style>