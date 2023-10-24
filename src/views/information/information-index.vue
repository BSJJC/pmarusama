<template>
  <div id="/">
    <Header></Header>

    <Title></Title>

    <Informations></Informations>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import('@/components/Common/CommonHeader.vue'));
const Title = defineAsyncComponent(() => import('./Title/title-index.vue'));
const Informations = defineAsyncComponent(() => import('./Informations/informations-index.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Common/CommonFooter.vue'));
</script>

<style></style>
