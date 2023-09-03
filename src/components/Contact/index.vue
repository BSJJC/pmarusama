<template>
    <div id="p-contact-container" class="relative flex justify-center items-center flex-col  gap-8 py-10 px-3 mb-20">

        <img src="../../assets/imgs/title-contact.png" alt="contact title image">

        <span class="m-plus-rounded-1c text-center text-[#787878] font-bold">
            内容によっては、ご連絡にお時間がかかる場合や、お答えできない場合がございます。
            <br>
            あらかじめご了承ください。
        </span>

        <div class="w-full flex justify-center items-center flex-col gap-4">

            <div v-for="(i, index) in entries" :key="index" class="w-full flex justify-center items-center flex-col gap-2">

                <!-- title -->
                <div class="m-plus-rounded-1c w-full flex justify-start items-center gap-4 font-bold">
                    <div class="text-[#787878]">{{ i.title }}</div>

                    <div class="text-white bg-[#ff5889] px-2 rounded-full">必须 </div>
                </div>

                <!-- input area -->
                <input v-if="i.inputType === 'text'" type="text"
                    class="w-full border-[#00d991] border-[1.5px] rounded-lg p-2 text-sm focus:outline-none">

                <textarea v-else-if="i.inputType === 'textarea'" :rows="i.textArea!.rows"
                    class="w-full border-[#00d991] border-[1.5px] rounded-lg p-2 text-sm focus:outline-none"
                    :style="{ resize: i.textArea!.resize ? undefined : 'none' }"></textarea>
            </div>

            <button
                class="m-plus-rounded-1c bg-[#ff5872] text-white font-bold text-[1.5rem] p-3 px-10 rounded-full mt-2">送信</button>
        </div>

    </div>
</template>
  
<script setup lang='ts'>

interface IEntries {
    title: string,
    reuired: boolean,
    inputType: "text" | "textarea",
    textArea?: {
        resize: boolean,
        rows: number
    }
}

const entries: Array<IEntries> = [
    {
        title: "お名前",
        reuired: true,
        inputType: "text"
    },
    {
        title: "件名",
        reuired: true,
        inputType: "text"
    },
    {
        title: "メールアドレス",
        reuired: true,
        inputType: "text"
    },
    {
        title: "お問い合わせ内容",
        reuired: true,
        inputType: "textarea",
        textArea: {
            resize: false,
            rows: 7
        }
    },
];
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

.m-plus-rounded-1c,
.m-plus-rounded-1c>* {
    font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style> 