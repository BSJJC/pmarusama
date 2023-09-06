<template>
  <div id="p-header-container" class="top-[10px] right-[10px] fixed z-[9999]">
    <div class="w-[50px] h-[50px] bg-[#ff5872] rounded-full flex justify-center items-center flex-col gap-[0.3rem]">
      <p id="top"></p>
      <p id="middle"></p>
      <p id="bottom"></p>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref } from "vue"

function openNavigation(): void {

}
</script>
  
<style scoped>
#close {}

p {
  width: 60%;
  height: 4px;
  border-radius: 9999px;
  background-color: white;
}
</style>