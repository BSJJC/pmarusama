<template>
  <iframe id="player" type="text/html" width="640" height="360" :src=url></iframe>
</template>
  
<script setup lang='ts'>
interface Config {
  url: string
}

const props = defineProps<Config>()

const url = `https://www.youtube.com/embed/${props.url}`
</script>