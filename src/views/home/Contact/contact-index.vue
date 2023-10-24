<template>
  <div
    id="p-contact"
    class="lace-top relative flex justify-center items-center bg-[#ffffffb3] flex-col gap-8 py-20 px-3"
  >
    <Titlte></Titlte>

    <Intro></Intro>

    <Form></Form>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Titlte = defineAsyncComponent(() => import('./components/contact-title.vue'));
const Intro = defineAsyncComponent(() => import('./components/contact-intro.vue'));
const Form = defineAsyncComponent(() => import('./components/contact-form.vue'));
</script>

<style scoped></style>
