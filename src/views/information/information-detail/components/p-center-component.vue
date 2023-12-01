<template>
  <div>
    <p v-html="text" class="text-center"></p>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

type TData = {
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

<style scoped>
p {
  line-height: 1.8;
  color: #787878;
  margin-bottom: 20px;
}
</style>
