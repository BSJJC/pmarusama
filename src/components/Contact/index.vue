<template>
    <div id="p-contact-container" class="relative flex justify-center items-center flex-col  gap-8 py-10 px-3">

        <!-- title  -->
        <Titlte></Titlte>

        <!-- intro -->
        <Intro></Intro>

        <!-- form -->
        <Form></Form>

    </div>
</template>
  
<script setup lang='ts'>
import { defineAsyncComponent } from "vue"

const Titlte = defineAsyncComponent(() => import("./components/title.vue"))
const Intro = defineAsyncComponent(() => import("./components/intro.vue"))
const Form = defineAsyncComponent(() => import("./components/form.vue"))
</script>
  
<style scoped>
#p-contact-container {
    background: rgba(255, 255, 255, .7);
}

#p-contact-container::before {
    position: absolute;
    content: "";
    margin: auto;
    box-sizing: border-box;
    vertical-align: middle;
    top: -6px;
    width: 100%;
    height: 6px;
    background: url(../../assets/imgs/section-bg-top.png) center bottom/auto 100%;
}

#p-contact-container::after {
    position: absolute;
    content: "";
    margin: auto;
    box-sizing: border-box;
    vertical-align: middle;
    bottom: -6px;
    width: 100%;
    height: 6px;
    background: url(../../assets/imgs/section-bg-bottom.png) center bottom/auto 100%;
}

.fade-up-enter-active,
.fade-up-leave-active {
    transition: all 0.3s ease-in-out;
}

.fade-up-enter-from,
.fade-up-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style> 