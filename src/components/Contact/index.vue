<template>
    <div id="p-contact-container" class="relative flex justify-center items-center flex-col  gap-8 py-10 px-3 mb-20">

        <img src="../../assets/imgs/title-contact.png" alt="contact title image">

        <span class="text-center text-[#787878] font-bold">
            内容によっては、ご連絡にお時間がかかる場合や、お答えできない場合がございます。
            <br>
            あらかじめご了承ください。
        </span>

        <div class="w-full flex justify-center items-center flex-col gap-4">

            <div v-for="(i, index) in entries" :key="index" class="w-full bg-red-200">

                <div class="m-plush-rounded-1c w-full flex justify-start items-center gap-4">
                    <div>{{ i.title }}</div>

                    <div class="text-white font-bold bg-[#ff5889] px-2 rounded-full">必须 </div>
                </div>

            </div>

        </div>

    </div>
</template>
  
<script setup lang='ts'>

interface IEntries {
    title: string,
    reuired: boolean,
    textArea: {
        resize: boolean,
        rows: number
    }
}

const entries: Array<IEntries> = [
    {
        title: "お名前",
        reuired: true,
        textArea: {
            resize: false,
            rows: 1
        }
    },
    {
        title: "件名",
        reuired: true,
        textArea: {
            resize: false,
            rows: 1
        }
    },
    {
        title: "メールアドレス",
        reuired: true,
        textArea: {
            resize: false,
            rows: 1
        }
    },
    {
        title: "お問い合わせ内容",
        reuired: true,
        textArea: {
            resize: true,
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

.m-plush-rounded-1c>* {
    font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style> 