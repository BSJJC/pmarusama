<template>
  <div class="info-container">
    <span class="info-date">2022.07.02</span>

    <h1 class="h1-title">『P丸様。1st Live “Peace Parade!!“』BD&DVD、8月17日(水)発売決定！</h1>

    <p>
      <img src="./img/20220702001-01.jpg" alt="release date" />
    </p>

    <p>
      昨年12月に両国国技館で行われた初ライブ『Peace Parade!!』のBD&DVDの発売が決定！
      <br />
      「シル・ヴ・プレジデント」はもちろん、「ときめきブローカー」「メンタルチェンソー」「Magical Word」などを収録予定。
      <br />
      ステージ上を一瞬で移動したり、バルーンで浮遊したりとバーチャルライブならではの演出が盛り沢山の必見の作品です。
    </p>

    <h2 class="h2-title">ライブBD&DVD 『P丸様。1st Live “Peace Parade!!”』概要</h2>

    <div class="flex space-x-8">
      <div class="space-y-2">
        <img src="./img/20220702001-02.jpg" alt="Blu-ray cover" />
        <p class="text-center">
          【Blu-ray 1枚組】
          <br />
          STPR-4001 ¥7,700(税込)
        </p>
      </div>

      <div class="space-y-2">
        <img src="./img/20220702001-03.jpg" alt="dvd cover" />
        <p class="text-center">
          【DVD 1枚組】
          <br />
          STPR-5001 ¥6,600(税込)
        </p>
      </div>
    </div>

    <h2 class="h2-title">店舗別オリジナル特典</h2>

    <p>
      <img src="./img/20220702001-04.jpg" alt="other content" />
    </p>

    <table>
      <tr>
        <td>アニメイト:</td>
        <td>歌ってみたCD「おちゃめ機能」</td>
      </tr>
      <tr>
        <td>タワーレコード:</td>
        <td>歌ってみたCD「アスノヨゾラ哨戒班」</td>
      </tr>
      <tr>
        <td>TSUTAYA:</td>
        <td>A2ポスター</td>
      </tr>
      <tr>
        <td>Amazon:</td>
        <td>ビジュアルシート(2種類)</td>
      </tr>
      <tr>
        <td>楽天ブックス:</td>
        <td>ミニアクリルスタンド</td>
      </tr>
      <tr>
        <td>共通特典:</td>
        <td>ブロマイド</td>
      </tr>
    </table>

    <shopList :shopImages="shopImages"></shopList>
  </div>
</template>

<script setup lang="ts">
import shopList from '../../common-components/shop-list.vue';
import animate from '../../shop-images/shop_animate.png';
import tower from '../../shop-images/shop_towerrecords.png';
import tsutaya from '../../shop-images/shop_tsutaya.png';
import amazon from '../../shop-images/shop_amazon.png';
import rakuten from '../../shop-images/shop_rakuten-books.png';
import sevenNet from '../../shop-images/shop_7net.png';
import village from '../../shop-images/shop_village-v.png';

const shopImages = [
  {
    src: animate,
    url: 'https://www.animate-onlineshop.jp/pn/pd/2116738/',
    alt: 'animate',
  },
  {
    src: tower,
    url: 'https://tower.jp/search/advanced/item/search?titleId=5128576',
    alt: 'tower',
  },
  {
    src: tsutaya,
    url: 'https://shop.tsutaya.co.jp/search_result.html?searchType=3&sakuhinCd=10736255',
    alt: 'tsutaya',
  },
  {
    src: amazon,
    url: 'https://www.amazon.co.jp/s?field-asin=B0B5DQTYWR%7CB0B5CN4M69',
    alt: 'amazon',
  },
  {
    src: rakuten,
    url: 'https://books.rakuten.co.jp/search?sitem=2100013023725+2100013023732+4988031520260+4988031520277&f=O&scid=su_47',
    alt: 'rakuten',
  },
  {
    src: sevenNet,
    url: 'https://7net.omni7.jp/search/?keyword=pmaru0817&searchKeywordFlg=1',
    alt: '7 net',
  },
  {
    src: village,
    url: 'https://vvstore.jp/i/vv_000000000288330/',
    alt: 'village',
  },
];
</script>

<style scoped>
@import url('@/css/information.css');
</style>
