<template>
  <div class="info-container">
    <div class="info-date">2020.11.01</div>

    <h1 class="h1-title">オリジナル曲「ガチやべぇじゃん feat.ななもり。」公開！</h1>

    <p>
      <img src="./img/20201101001-01.jpg" alt="gachiyabexejang image" />
    </p>

    <p>
      今回のオリジナル曲には、P丸様。のコラボ動画でもお馴染み！すとぷりの”ななもり。”が、ゲストボーカルとして参加しています。いつものおもしろ動画が目に浮かぶような二人の掛け合いと、中毒性のある「えいりな刃物」氏によるMVが見事にマッチしていて、「P丸様。」ワールド全開の一度聞いたら忘れられない癖になる楽曲です！
    </p>

    <h2 class="h2-title">「ガチやべぇじゃん feat.ななもり。」</h2>

    <table>
      <tr>
        <td>MV URL :</td>
        <td>
          <a href="https://youtu.be/lgxCR49HG1g" target="_blank">https://youtu.be/lgxCR49HG1g</a>
        </td>
      </tr>
      <tr v-for="(i, index) in info" :key="index">
        <td>{{ i[0] }}:</td>
        <td>{{ i[1] }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
const info = [
  ['Vocal ', 'P丸様。'],
  ['Guest Vocal ', 'ななもり。'],
  ['Music ', '烏屋茶房・篠崎あやと'],
  ['Words ', '烏屋茶房'],
  ['Arrange ', '篠崎あやと'],
  ['Movie & Illust ', 'えいりな刃物'],
];
</script>

<style scoped>
@import url('@/css/information.css');
</style>
