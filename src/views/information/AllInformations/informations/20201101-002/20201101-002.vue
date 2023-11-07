<template>
  <div class="info-container">
    <span class="info-date">2020.11.01</span>

    <h1 class="h1-title">11月14日(土)よりオリジナル新商品、発売決定！</h1>

    <p>
      P丸様。オリジナル新商品の発売が決定しました。
      <br />
      P☻shopの他、アニメイトやヴィレッジヴァンガード（いずれも一部店舗）の店舗や、それぞれのオンラインショップでもお買い求めいただけます。お見逃しなく！
    </p>

    <p>
      <img src="./img/20201101002-01.jpg" alt="content price information" />
    </p>

    <li v-for="(i, index) in contentInfo" :key="index" class="flex space-x-5">
      <div>◎</div>
      <div>
        {{ i }}
      </div>
    </li>

    <table class="mt-6">
      <tr>
        <td>発売日：</td>
        <td><strong>2020年11月14日(土)</strong></td>
      </tr>
      <tr>
        <td>販売店舗：</td>
        <td><strong>P☻shop(ぴーまるしょっぷ)並びに以下店舗</strong></td>
      </tr>
      <tr>
        <td></td>
        <td>
          <p>
            [ヴィレッジヴァンガード]
            <br />
            札幌エスタ店、新潟ビルボードプレイス店、横浜ワールドポーターズ店、ららぽーとTOKYO
            BAY店、PLUSイオンレイクタウンmori店、イオンモール高崎店、静岡パルコ店、イオンモール大高店、イオンモールKYOTO店、広島サンモール店、徳島クレメントプラザ店、オンラインストア
          </p>
          <p>
            [アニメイト]
            <br />
            池袋本店、札幌店、仙台店、渋谷店、新宿ハルク店、秋葉原本館、町田店、横浜ビブレ店、名古屋店、長野店、梅田店、天王寺店、三宮店、姫路店、京都店、広島店、福岡パルコ店、小倉店、熊本店、那覇国際通り店、アニメイト通販
          </p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
const contentInfo = [
  'ゆるふわ～マグカップ！。【全2種類】　価格：1,800円(税込)',
  'P丸様。アクリルキーホルダー　食いしん坊ver.　価格：800円(税込)',
  'P丸様。アクリルキーホルダー　げんき！ver.　価格：800円(税込)',
  'ゆるふわ～ふれーくしーる！。　価格：800円(税込)',
  'P丸様。めだまやきふせん！。　価格：600円(税込)',
];
</script>

<style scoped>
@import url('@/css/information.css');
</style>
