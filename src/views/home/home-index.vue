<template>
  <div id="/">
    <Header></Header>

    <Top></Top>

    <Information></Information>

    <Profile></Profile>

    <Youtube></Youtube>

    <Discography></Discography>

    <Sns></Sns>

    <Contact></Contact>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Common/CommonHeader.vue';
import Top from './Top/top-index.vue';
import Information from './Infomation/infomation-index.vue';
import Profile from './Profile/profile-index.vue';
import Youtube from './Youtube/youtube-index.vue';
import Discography from './Discography/discography-index.vue';
import Sns from './Sns/sns-index.vue';
import Contact from './Contact/contact-index.vue';
import Footer from '@/components/Common/CommonFooter.vue';
</script>

<style></style>
