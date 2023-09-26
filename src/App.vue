<template>
    <el-scrollbar ref="scrollbarRef"
        height="100vh">
        <div id="body">
            <Home></Home>
        </div>
    </el-scrollbar>
</template>
  
<script setup lang='ts'>
import { ref, provide } from "vue"
import Home from "./views/home/index.vue"

const scrollbarRef = ref()

function scrollTo(distanceFromTop: number): void {
    scrollbarRef.value.setScrollTop(distanceFromTop)
}

provide("scrollTo", scrollTo)
</script>
  
<style >
#body {
    background: #fff8a9 url(./assets/imgs/body-bg.png) center top/100% auto;
}

.el-scrollbar__wrap {
    scroll-behavior: smooth;
}
</style>