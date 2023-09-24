<template>
    <Header></Header>

    <Top></Top>

    <Information></Information>

    <Profile></Profile>

    <Youtube></Youtube>

    <Discography></Discography>

    <Sns></Sns>

    <Contact></Contact>

    <Footer></Footer>
</template>
  
<script setup lang='ts'>
// import Header from "./Header/index.vue"
// import Top from "./Top/index.vue"
// import Information from "./Infomation/index.vue"
// import Profile from "./Profile/index.vue"
// import Youtube from "./Youtube/index.vue"
// import Discography from "./Discography/index.vue"
// import Sns from "./Sns/index.vue"
// import Contact from "./Contact/index.vue"
// import Footer from "./Footer/index.vue"


import { defineAsyncComponent } from "vue"

const Header = defineAsyncComponent(() => import("./Header/index.vue"))
const Top = defineAsyncComponent(() => import("./Top/index.vue"))
const Information = defineAsyncComponent(() => import("./Infomation/index.vue"))
const Profile = defineAsyncComponent(() => import("./Profile/index.vue"))
const Youtube = defineAsyncComponent(() => import("./Youtube/index.vue"))
const Discography = defineAsyncComponent(() => import("./Discography/index.vue"))
const Sns = defineAsyncComponent(() => import("./Sns/index.vue"))
const Contact = defineAsyncComponent(() => import("./Contact/index.vue"))
const Footer = defineAsyncComponent(() => import("./Footer/index.vue"))
</script>
  
<style></style>