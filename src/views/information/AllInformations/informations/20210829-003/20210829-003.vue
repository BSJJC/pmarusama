<template>
  <div class="info-container">
    <span class="info-date">2021.09.29</span>

    <h1 class="h1-title">公式ファンブック第2弾「ぴーまる。Diary!!」発売＆「ぴーまるぶっく！。」重版決定！！</h1>

    <p>
      <img src="./img/20210829003-01.jpg" alt="pmaru diary" />
    </p>

    <p>
      公式ファンブックの第2弾となる「ぴーまる。Diary!!」が2021年9月30日より全国の書店にて順次発売決定！発売に先駆け、2021年8月30日(月)より、予約受付もスタート！
    </p>

    <p>
      本誌のための描き下ろしイラストの他、動画でお馴染みのキャラクターたちが登場する完全描き下ろしのオリジナル漫画を多数収録！さらに、1stフルアルバム「Sunny!!」収録曲への本人のコメントなど、全112ページに渡ってお届け！
    </p>

    <div>
      <p class="img-center">
        <img src="./img/20210829003-02.jpg" alt="pmaru dairy cover" />
      </p>

      <h2 class="font-bold">「ぴーまる。Diary!!」</h2>

      <table>
        <tr>
          <td>■発行：</td>
          <td>STPR BOOKS</td>
        </tr>
        <tr>
          <td>■企画・プロデュース：</td>
          <td>ななもり。</td>
        </tr>
        <tr>
          <td>■著者：</td>
          <td>P丸様。× ななもり。</td>
        </tr>
        <tr>
          <td>■発売日：</td>
          <td>2021年9月30日(木)～順次</td>
        </tr>
        <tr>
          <td>■定価：</td>
          <td>2,200円（本体2,000円＋税10％）</td>
        </tr>
        <tr>
          <td>■サイズ等：</td>
          <td>B5変形 112ページ</td>
        </tr>
        <tr>
          <td>■取扱店舗：</td>
          <td>
            Amazon / HMV&BOOKS / honto / TOWER RECORDS / TSUTAYA / アニメイト / ヴィレッジヴァンガード / ジュンク堂書店
            / セブンネットショッピング / 楽天ブックス / ヨドバシカメラ / 楽譜ネット / 丸善書店 / 紀伊國屋書店 / 啓文社 /
            三洋堂書店 / 勝木書店 / 大垣書店 / 谷島屋 / 島村楽器 / 文苑堂書店 / 文真堂書店 / 平安堂 / 平惣 / 未来屋書店
          </td>
        </tr>
      </table>

      <shopList :shopImages="shopImages"></shopList>
    </div>

    <div>
      <p class="img-center">
        <img src="./img/20200913003-03.jpg" alt="pmaru book" />
      </p>

      <p>重版決定！</p>

      <h2 class="font-bold">「ぴーまるぶっく！。」</h2>

      <table>
        <tr>
          <td>■定価：</td>
          <td>¥1,980（本体1,800円＋税10％）</td>
        </tr>
        <tr>
          <td>■サイズ等：</td>
          <td>A5 122ページ</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import shopList from '../../common-components/shop-list.vue';
import amazon from '../../shop-images/shop_amazon.png';
import rakuten from '../../shop-images/shop_rakuten-books.png';
import sevenNet from '../../shop-images/shop_7net.png';
import animate from '../../shop-images/shop_animate.png';
import tower from '../../shop-images/shop_towerrecords.png';
import eHon from '../../shop-images/shop_e-hon.png';

const shopImages = [
  { src: amazon, url: 'https://www.amazon.co.jp/dp/4845636816?/', alt: 'amazon' },
  { src: rakuten, url: 'https://books.rakuten.co.jp/rb/16865494/?l-id=search-c-item-text-02', alt: 'rakuten' },
  { src: sevenNet, url: 'https://7net.omni7.jp/detail/1107228985', alt: '7net' },
  { src: animate, url: 'https://www.animate-onlineshop.jp/pn/pd/1978525/', alt: 'aniamte' },
  {
    src: tower,
    url: 'https://tower.jp/item/5245590/%E3%81%B4%E3%83%BC%E3%81%BE%E3%82%8B%E3%80%82Diary!!',
    alt: 'tower',
  },
  { src: eHon, url: 'https://www.e-hon.ne.jp/bec/SA/Detail?refBook=978-4-8456-3681-5&Sza_id=MM', alt: 'eHon' },
];
</script>

<style scoped>
@import url('@/css/information.css');
</style>
