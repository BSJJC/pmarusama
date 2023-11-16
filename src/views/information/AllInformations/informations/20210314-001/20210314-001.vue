<template>
  <div class="info-container">
    <span class="info-date">2021.03.14</span>

    <h1 class="h1-title">1stフルアルバム「Sunny!!」3月17日(水)発売決定！</h1>

    <p>
      <img src="./img/20210314001-01.jpg" alt="release date" />
    </p>

    <p>
      ななもり。(すとぷり)プロデュースによって満を持してCDデビュー！
      <br />
      1stフルアルバム「Sunny!!」を3月17日(水)にSTPR Recordsより発売！
    </p>

    <p>
      記念すべき初のフルアルバム「Sunny!!」には”超歌手”大森靖子、ミュージシャンとしてだけではなく執筆活動でも注目を集めるクリープハイプのVo./Gt.
      尾崎世界観、楽曲とライブパフォーマンスが常に話題になるインターネットポップロックバンド神聖かまってちゃん、その幅広い音楽性で世界的に活動しているTeddyLoidなど豪華クリエイター陣が集結。
      <br />
      普段の動画配信では見ることができない”P丸様。”の魅力をギュッと詰め込んだ全15曲を収録予定です。
    </p>

    <p>
      ジャケットイラストでは、P丸様。がかねてから注目していた
      <a href="https://twitter.com/_akiakane" target="_blank">クリエイター秋赤音氏</a>
      とコラボレーション。「かっ飛ばして叫ぶ、明るく元気な」P丸様。を秋赤音氏の世界観で制作いただきました 。
    </p>

    <h2 class="h2-title">収録楽曲</h2>

    <p>
      <img src="./img/20210314001-02.jpg" alt="music list" />
    </p>

    <h2 class="h2-title">XFD動画公開！</h2>

    <p>
      <img src="./img/20210314001-03.jpg" alt="Sunny cover" />

      <a href="https://www.youtube.com/watch?v=Mls1MlMpDaY&feature=youtu.be" target="_blank">
        https://youtu.be/Mls1MlMpDaY
      </a>
    </p>

    <h2 class="h2-title">アルバム収録楽曲「メンタルチェンソー」MV先行公開！</h2>

    <div class="w-full flex justify-center flex-col space-y-6 md:flex-row md:space-x-4">
      <div class="md:w-1/2">
        <img src="./img/20210314001-04.jpg" alt="mentaru cover" class="w-full" />
      </div>

      <div class="md:w-1/2">
        <strong>P丸様。「メンタルチェンソー」</strong>
        <br />
        MV URL：
        <a href="https://youtu.be/bhjNyUPFCyk" target="_blank">https://youtu.be/bhjNyUPFCyk</a>
        <br />
        Words & Music & Arrangement：かいりきベア
        <br />
        Illust：P丸様。
        <br />
        Movie：利波 雷
      </div>
    </div>

    <h2 class="h2-title">アルバム収録楽曲「シャーベット」MV先行公開！</h2>

    <div class="w-full flex justify-center flex-col space-y-6 md:flex-row md:space-x-4">
      <div class="md:w-1/2">
        <img src="./img/20210314001-05.jpg" alt="mentaru cover" class="w-full" />
      </div>

      <div class="md:w-1/2">
        <strong>P丸様。「シャーベット」</strong>
        <br />
        MV URL：
        <a href="https://youtu.be/Dskm9HUZqYY" target="_blank">https://youtu.be/Dskm9HUZqYY</a>
        <br />
        Words & Music & Arrangement：ぷす(fromツユ) 様
        <br />
        piano:miro(fromツユ) 様
        <br />
        Movie：大鳥 様
      </div>
    </div>

    <p class="mt-8">
      <img src="./img/20210314001-06.jpg" alt="special cover" />
    </p>

    <h2 class="h2-title">予約はこちら</h2>

    <shopList :shopImages="shopImages"></shopList>
  </div>
</template>

<script setup lang="ts">
import shopList from '../../common-components/shop-list.vue';
import animate from '../../shop-images/shop_animate.png';
import towerrecords from '../../shop-images/shop_towerrecords.png';
import tsutaya from '../../shop-images/shop_tsutaya.png';
import amazon from '../../shop-images/shop_amazon.png';
import rakuten from '../../shop-images/shop_rakuten-books.png';
import sevenNet from '../../shop-images/shop_7net.png';
import neowing from '../../shop-images/shop_neowing.png';
import hmvbooks from '../../shop-images/shop_hmvbooks.png';

const shopImages = [
  { src: animate, url: 'https://www.animate-onlineshop.jp/pn/pd/1898616/', alt: 'animate' },
  { src: towerrecords, url: 'https://tower.jp/search/advanced/item/search?titleId=4849657', alt: 'towerrecords' },
  { src: tsutaya, url: 'https://shop.tsutaya.co.jp/cd/product/4988031424117/', alt: 'tsutaya' },
  { src: amazon, url: 'https://www.amazon.co.jp/s?hidden-keywords=B08VX4KH21%7CB08VX6WDC8', alt: 'amazon' },
  { src: rakuten, url: 'https://books.rakuten.co.jp/search?sitem=4988031424117+4988031424124&f=O', alt: 'rakuten' },
  {
    src: sevenNet,
    url: 'https://7net.omni7.jp/search/?keyword=pmarusama20210317&searchKeywordFlg=1&userKeywordFlg=1',
    alt: 'seven net',
  },
  { src: neowing, url: 'https://www.neowing.co.jp/products?term.prodkey=STPR-9021,STPR-1011', alt: 'neowing' },
  {
    src: hmvbooks,
    url: 'https://www.hmv.co.jp/news/article/2102041020/',
    alt: 'hmvbooks',
  },
];
</script>

<style scoped>
@import url('@/css/information.css');
</style>
