<template>
    <div id="p-profile-container"
        class="relative my-8">
        <Title></Title>

        <Profile></Profile>
    </div>
</template>
  
<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';

const Title = defineAsyncComponent(() => import("./components/title.vue"))
const Profile = defineAsyncComponent(() => import("./components/profile.vue"))
</script>
  
<style scoped>
#p-profile-container {
    background: url(@/assets/imgs/parts2.png) top 20vw left -4vw/40vw auto no-repeat;
}

@media (min-width: 768px) {
    #p-profile-container {
        background: url(@/assets/imgs/parts2.png) bottom 3vw left 4vw no-repeat;
    }
}
</style>