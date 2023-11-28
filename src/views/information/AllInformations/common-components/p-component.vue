<template>
  <p :class="props.data?.className" v-html="text"></p>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

type TData = {
  className: string;
  text: Array<string | null>;
};

const props = defineProps({
  data: Object as () => TData,
});

const text: Ref<string> = ref('');

props.data?.text.forEach((str) => {
  // Concatenate non-null strings or replace null with '<br/>'
  text.value += str || '<br/>';
});
</script>

<style></style>
