<template>
  <div class="m-plus-rounded-1c w-full flex justify-center items-center flex-col gap-4 lg:max-w-[1060px] lg:m-auto">

    <!-- form -->
    <div v-for="(i, index) in formData"
      :key="index"
      class="relative w-full flex items-center flex-col gap-2 md:flex-row md:px-4 md:mt-5">
      <div class=" relative w-full flex items-center gap-4 font-bold md:w-[30%] md:justify-end">
        <div class="text-[#787878]">{{ i.title }}</div>

        <div v-if="i.required"
          class="text-white bg-[#ff5889] px-2 rounded-full">必须</div>
      </div>

      <!-- error notice -->
      <Transition name="fade-up">
        <div v-show="i.verificationPassed === false"
          class="absolute right-[5px] text-white bg-[#ff5889] px-2 rounded-full animate-bounce md:right-[18px] md:top-[-27px]">
          ダメです！
        </div>
      </Transition>

      <input v-if="i.inputType === 'input'"
        type="text"
        class="w-full border-[1.5px] border-[#00d991] rounded-lg p-2 text-sm focus:outline-none md:w-[80%]"
        :style="{ borderColor: i.verificationPassed || i.verificationPassed === undefined ? '' : '#ff5889' }"
        v-model="i.text"
        @input="i.checkFunction"
        @blur="i.checkFunction">

      <textarea v-else-if="i.inputType === 'textarea'"
        v-model="i.text"
        rows="10"
        class="w-full border-[1.5px] border-[#00d991] rounded-lg p-2 text-sm resize-none focus:outline-none md:w-[80%]"
        :style="{ borderColor: i.verificationPassed || i.verificationPassed === undefined ? '' : '#ff5889' }"
        @input="i.checkFunction"
        @blur="i.checkFunction"></textarea>
    </div>
  </div>

  <!-- submit button -->
  <button class="m-plus-rounded-1c text-white bg-[#ff5872] text-[1.5rem] font-bold px-8 py-3 rounded-full"
    @click="submit">送信</button>
</template>
  
<script setup lang='ts'>
import { ref, Ref } from "vue"
import _ from "lodash"
import validateEmail from "@/utils/validateEmail"

interface IFormData {
  title: string,
  required: boolean,
  text: string,
  verificationPassed: boolean | undefined,
  inputType: "input" | "textarea",
  checkFunction: Function
}

const formData: Ref<IFormData[]> = ref([
  {
    title: "お名前",
    required: true,
    text: "",
    verificationPassed: undefined,
    inputType: "input",
    checkFunction: nameCheck
  },
  {
    title: "件名",
    required: true,
    text: "",
    verificationPassed: undefined,
    inputType: "input",
    checkFunction: subjectCheck
  },
  {
    title: "メールアドレス",
    required: true,
    text: "",
    verificationPassed: undefined,
    inputType: "input",
    checkFunction: emailCheck
  },
  {
    title: "お問い合わせ内容",
    required: true,
    text: "",
    verificationPassed: undefined,
    inputType: "textarea",
    checkFunction: inquiryCheck
  }
])

/**
 * name check
 */
function nameCheck(): void {
  if (formData.value[0].text.trim().length === 0) formData.value[0].verificationPassed = false
  else formData.value[0].verificationPassed = true
}

/**
 * subject check
 */
function subjectCheck(): void {
  if (formData.value[1].text.trim().length === 0) formData.value[1].verificationPassed = false
  else formData.value[1].verificationPassed = true
}

/**
 * email adderess check
 */
function emailCheck(): void {
  const email = formData.value[2].text.trim();

  if (validateEmail(email)) formData.value[2].verificationPassed = true
  else formData.value[2].verificationPassed = false
}

/**
 * inquiry check
 */
function inquiryCheck(): void {
  if (formData.value[3].text.trim().length === 0) formData.value[3].verificationPassed = false
  else formData.value[3].verificationPassed = true
}

/**
 * submit form
 */
function submit(): void {
  const status = _.map(formData.value, 'verificationPassed')

  if (status.every(el => el === true)) {
    console.log("OK");
  }
  else {
    _.forEach(formData.value, item => {
      if (item.verificationPassed === undefined) item.verificationPassed = false
    })
  }
}
</script>
  
<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>