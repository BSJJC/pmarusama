<template>
  <div id="body" class="flex flex-col">
    <Header></Header>

    <Top></Top>

    <Inforemation></Inforemation>

    <Profile></Profile>

    <Youtube></Youtube>

    <Discography></Discography>

    <Sns></Sns>

    <Contact></Contact>

    <Footer></Footer>
  </div>
</template>
  
<script setup lang='ts'>
import Header from "./components/Header/index.vue"
import Top from "./components/Top/index.vue"
import Inforemation from "./components/Infomation/index.vue"
import Profile from "./components/Profile/index.vue"
import Youtube from "./components/Youtube/index.vue"
import Discography from "./components/Discography/index.vue"
import Sns from "./components/Sns/index.vue"
import Contact from "./components/Contact/index.vue"
import Footer from "./components/Footer/index.vue"
</script>
  
<style scoped>
#body {
  background: #fff8a9 url(./assets//imgs//body-bg.png) center top/100% auto;
}
</style>