<template>
  <header id="p-header-container" class="top-[10px] right-[10px] fixed z-[9999]">
    <!-- switcher -->
    <div :id="status ? 'open' : ''"
      class="w-[50px] h-[50px] bg-[#ff5872] rounded-full relative flex justify-center items-center flex-col gap-[0.3rem] hover:cursor-pointer"
      @click="openNavigation">
      <p id="top" class=" translate-y-[9px]"></p>
      <p id="middle"></p>
      <p id="bottom" class=" translate-y-[-9px]"></p>
    </div>


    <Transition name="test">
      <nav v-show="status"
        class="px-5 py-2 bg-[#ff5872] flex justify-center items-end flex-col absolute top-[55px] right-0 rounded-3xl transition-all overflow-hidden">
        <a v-for="(i, index) in herfs" :key="index" href=""
          class=" text-white text-lg font-bold my-1 hover:text-[#fff8a9]" style="font-family: 'M PLUS Rounded 1c';">{{ i
          }}</a>
      </nav>
    </Transition>
  </header>
</template>
  
<script setup lang='ts'>
import { ref, Ref } from "vue"

const status: Ref<boolean> = ref(true)

const herfs: Ref<string[]> = ref([
  "TOP",
  "INFORMATION",
  "PROFILE",
  "YouTube",
  "DISCOGRAPHY",
  "MMDモデル",
  "SNS",
  "CONTACT"
])

function openNavigation(): void {
  status.value = !status.value
}
</script>
  
<style scoped>
#open #top {
  height: 5px;
  transform: rotate(45deg)
}

#open #middle {
  opacity: 0;
}

#open #bottom {
  height: 5px;
  transform: rotate(-45deg);
}

p {
  position: absolute;
  width: 60%;
  height: 4px;
  border-radius: 9999px;
  background-color: white;
  transition: all .3s ease-out;
}

.test-enter-active,
.test-leave-active {
  transition: all 0.3s ease-in-out;
}

.test-enter-from,
.test-leave-to {
  width: auto;
  padding: 0px;
}
</style>