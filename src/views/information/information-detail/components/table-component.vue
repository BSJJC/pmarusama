<template>
  <div>
    <table>
      <tr v-for="(trArr, index) in props.data?.text" :key="index">
        <td v-for="(tdArr, strIndex) in trArr" :key="strIndex">
          <template v-for="text in tdArr" :key="tdArr[text]">
            <span v-if="text" class="block">{{ text }}</span>
            <br v-else />
          </template>
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
  // The text content, each element is a 3D array representing table rows and cells
  text: Array<Array<Array<string | null>>>;
};

const props = defineProps({
  data: Object as () => TData,
});
</script>

<style scoped>
table {
  word-break: break-all;
  line-height: 1.8;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

tr td:first-child {
  display: flex;
  white-space: nowrap;
  padding-right: 4px;
  font-size: 0.9rem;
  font-weight: bold;
}
</style>
