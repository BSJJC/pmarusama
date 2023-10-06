<template>
  <div
    class="m-plus-rounded-1c w-full flex justify-center items-center flex-col gap-4 lg:max-w-[1060px] lg:m-auto"
  >
    <!-- form -->
    <div
      v-for="(i, index) in formItems"
      :key="index"
      class="relative w-full flex items-center flex-col gap-2 md:flex-row md:px-4 md:mt-5"
    >
      <div
        class="relative w-full flex items-center gap-4 font-bold md:w-[30%] md:justify-end"
      >
        <div class="text-[#787878]">{{ i.title }}</div>

        <div
          v-if="i.required"
          class="text-white bg-[#ff5889] px-2 rounded-full"
        >
          必须
        </div>
      </div>

      <Transition name="fade-up">
        <div
          v-show="i.verificationPassed === false"
          class="absolute right-[5px] text-white bg-[#ff5889] px-2 rounded-full animate-bounce md:right-[18px] md:top-[-27px]"
        >
          ダメです！
        </div>
      </Transition>

      <input
        v-if="i.inputType === 'input'"
        type="text"
        class="w-full border-[1.5px] border-[#00d991] rounded-lg p-2 text-sm focus:outline-none md:w-[80%]"
        :style="{
          borderColor:
            i.verificationPassed || i.verificationPassed === undefined
              ? ''
              : '#ff5889',
        }"
        v-model="i.text"
        @input="i.checkFunction"
        @blur="i.checkFunction"
      />

      <textarea
        v-else-if="i.inputType === 'textarea'"
        v-model="i.text"
        rows="10"
        class="w-full border-[1.5px] border-[#00d991] rounded-lg p-2 text-sm resize-none focus:outline-none md:w-[80%]"
        :style="{
          borderColor:
            i.verificationPassed || i.verificationPassed === undefined
              ? ''
              : '#ff5889',
        }"
        @input="i.checkFunction"
        @blur="i.checkFunction"
      ></textarea>
    </div>
  </div>

  <!-- submit button -->
  <button
    class="m-plus-rounded-1c text-white bg-[#ff5872] text-[1.5rem] font-bold px-8 py-3 rounded-full"
    @click="submit"
  >
    送信
  </button>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import _ from "lodash";
import validateEmail from "@/utils/validateEmail";
import { IItem, itemNames } from "../types/index.ts";

const formItems: Ref<{
  [key in itemNames]: IItem;
}> = ref({
  name: {
    title: "お名前",
    required: true,
    text: "",
    verificationPassed: undefined,
    inputType: "input",
    checkFunction: nameChcke,
  },
  subject: {
    title: "件名",
    required: true,
    text: "",
    verificationPassed: undefined,
    inputType: "input",
    checkFunction: subjectCheck,
  },
  email: {
    title: "メールアドレス",
    required: true,
    text: "",
    verificationPassed: undefined,
    inputType: "input",
    checkFunction: emailCheck,
  },
  inquiry: {
    title: "お問い合わせ内容",
    required: true,
    text: "",
    verificationPassed: undefined,
    inputType: "textarea",
    checkFunction: inquiryCheck,
  },
});

/**
 * Check if a form field is not empty.
 * @param {itemNames} itemName - The name of the form field to check.
 * @returns {boolean} True if the field is not empty, false otherwise.
 */
function checkField(itemName: itemNames): boolean {
  return formItems.value[itemName].text.trim().length > 0;
}

/**
 * Check the 'name' field and update its verification status.
 */
function nameChcke(): void {
  formItems.value["name"].verificationPassed = checkField("name");
}

/**
 * Check the 'subject' field and update its verification status.
 */
function subjectCheck(): void {
  formItems.value["subject"].verificationPassed = checkField("subject");
}

/**
 * Check the 'email' field, validate its format, and update its verification status.
 */
function emailCheck(): void {
  if (!checkField("email")) {
    formItems.value["email"].verificationPassed = false;
    return;
  }

  const email = formItems.value["email"].text;

  formItems.value["email"].verificationPassed = validateEmail(email);
}

/**
 * Check the 'inquiry' field and update its verification status.
 */
function inquiryCheck(): void {
  formItems.value["inquiry"].verificationPassed = checkField("inquiry");
}

/**
 * Handle form submission and log the result.
 */
function submit(): void {
  const status = _.map(formItems.value, "verificationPassed");

  if (status.every((el) => el === true)) {
    console.log("OK");
  } else {
    _.forEach(formItems.value, (item) => {
      if (item.verificationPassed === undefined)
        item.verificationPassed = false;
    });
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
