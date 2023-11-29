<template>
  <div>
    <table :class="props.data?.className">
      <tr v-for="(trArr, index) in props.data?.text" :key="index">
        <td v-for="(tdArr, strIndex) in trArr" :key="strIndex">
          <span v-for="(text, textIndex) in tdArr" :key="textIndex">{{ text || '' }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
/**
 * Example data for a table component.
 *
 * const tableData: TData = {
 *   className: "tableClass",
 *
 *   text: [
 *     // First <tr> tag
 *     [
 *       // First <td> tag
 *       ['Cell 1', null], // If 'Cell 1' is meaningful, render it; otherwise, render a <br/>
 *       // Second <td> tag
 *       ['Cell 2', 'Cell 3'], // Render 'Cell 2' and 'Cell 3'
 *       // ...
 *     ],
 *     // Second <tr> tag
 *     [
 *       ['Cell 4', null],
 *       ['Cell 5', 'Cell 6'],
 *       // ...
 *     ],
 *     // ...
 *   ],
 * };
 *
 *
 * In this example, `tableData` is an instance of the `TData` type, representing a table with class name
 * "tableClass" and specific content for each <td> tag, including handling for meaningful strings and null values.
 */
type TData = {
  className: string;
  // The text content, each element is a 3D array representing table rows and cells
  text: Array<Array<Array<string | null>>>;
};

const props = defineProps({
  data: Object as () => TData,
});
</script>

<style scoped>
@import url('@/css/information.css');
</style>
