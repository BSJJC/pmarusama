<template>
    <div id="p-contact-container" class="relative flex justify-center items-center flex-col  gap-8 py-10 px-3 mb-20">

        <!-- title image -->
        <img src="../../assets/imgs/title-contact.png" alt="contact title image">

        <!-- intro -->
        <span class="m-plus-rounded-1c text-center text-[#787878] font-bold">
            内容によっては、ご連絡にお時間がかかる場合や、お答えできない場合がございます。
            <br>
            あらかじめご了承ください。
        </span>

        <!-- form -->
        <div class="w-full flex justify-center items-center flex-col gap-4">

            <div v-for="(i, index) in formData" :key="index" class="w-full flex items-center flex-col gap-2">
                <div class=" relative w-full flex items-center gap-4 font-bold" style="font-family: 'M PLUS Rounded 1c';">
                    <div class="text-[#787878]">{{ i.title }}</div>

                    <div v-if="i.required" class="text-white bg-[#ff5889] px-2 rounded-full">必须</div>

                    <Transition name="fade-up">
                        <div v-show="i.verificationPassed === false"
                            class="absolute right-[5px] text-white bg-[#ff5889] px-2 rounded-full">ダメです！</div>
                    </Transition>
                </div>

                <input v-if="i.inputType === 'input'" type="text"
                    class="w-full border-[1.5px] border-[#00d991] rounded-lg p-2 text-sm focus:outline-none"
                    :style="{ borderColor: i.verificationPassed || i.verificationPassed === undefined ? '' : '#ff5889' }"
                    v-model="i.text" @input="i.checkFunction" @blur="i.checkFunction">

                <textarea v-else-if="i.inputType === 'textarea'" v-model="i.text" rows="10"
                    class="w-full border-[1.5px] border-[#00d991] rounded-lg p-2 text-sm focus:outline-none"
                    :style="{ borderColor: i.verificationPassed || i.verificationPassed === undefined ? '' : '#ff5889' }"
                    @input="i.checkFunction" @blur="i.checkFunction"></textarea>
            </div>

        </div>
    </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref } from "vue"
import validateEmail from "../../utils/validateEmail"

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
</script>
  
<style scoped>
#p-contact-container {
    background: rgba(255, 255, 255, .7);
}

#p-contact-container::before {
    position: absolute;
    content: "";
    margin: auto;
    box-sizing: border-box;
    vertical-align: middle;
    top: -6px;
    width: 100%;
    height: 6px;
    background: url(../../assets/imgs/section-bg-top.png) center bottom/auto 100%;
}

#p-contact-container::after {
    position: absolute;
    content: "";
    margin: auto;
    box-sizing: border-box;
    vertical-align: middle;
    bottom: -6px;
    width: 100%;
    height: 6px;
    background: url(../../assets/imgs/section-bg-bottom.png) center bottom/auto 100%;
}

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