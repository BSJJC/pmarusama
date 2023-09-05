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

            <!-- name -->
            <div class="input-entries">
                <!-- title -->
                <div id="title-area">
                    <div id="title">お名前</div>

                    <div id="required">必须 </div>
                </div>

                <!-- input area -->
                <input type="text" id="input-area" v-model="name" @change="nameCheck">
            </div>

            <!-- subject -->
            <div class="input-entries">
                <!-- title -->
                <div id="title-area">
                    <div id="title">件名</div>

                    <div id="required">必须 </div>
                </div>

                <!-- input area -->
                <input type="text" id="input-area" v-model="subject" @change="subjectCheck">
            </div>

            <!-- email address -->
            <div class="input-entries">
                <!-- title -->
                <div id="title-area">
                    <div id="title">メールアドレス</div>

                    <div id="required">必须 </div>
                </div>

                <!-- input area -->
                <input type="text" id="input-area" v-model="email" @change="emailCheck"
                    @keydown.space="(event) => event.preventDefault()">
            </div>

            <!-- content of inquiry -->
            <div class="input-entries">
                <!-- title -->
                <div id="title-area">
                    <div id="title">お問い合わせ内容</div>

                    <div id="required">必须 </div>
                </div>

                <!-- input area -->
                <textarea id="input-area" rows="7" style="resize: none;" v-model="inquiry"
                    @change="inquiryCheck"></textarea>
            </div>

        </div>
    </div>
</template>
  
<script setup lang='ts'>
import { ref, Ref } from "vue"

const name: Ref<string> = ref("")
const subject: Ref<string> = ref("")
const email: Ref<string> = ref("")
const inquiry: Ref<string> = ref("")

function nameCheck(): void {
    console.log(name.value);
}

function subjectCheck(): void {
    console.log(subject.value);
}

function emailCheck(): void {
    
}

function inquiryCheck(): void {
    console.log(inquiry.value);
}
</script>
  
<style lang="less" scoped>
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

.input-entries {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    #title-area {
        font-family: 'M PLUS Rounded 1c', sans-serif;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 700;

        #title {
            color: #787878;
        }

        #required {
            color: white;
            background-color: #ff5889;
            padding: 0px 0.5rem 0px 0.5rem;
            border-radius: 9999px;
        }
    }

    #input-area {
        width: 100%;
        border-width: 1.5px;
        border-color: #00d991;
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;

        &:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
        }
    }
}
</style> 