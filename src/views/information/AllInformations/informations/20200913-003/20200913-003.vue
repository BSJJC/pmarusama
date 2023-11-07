<template>
  <div class="info-container">
    <div class="info-date">2020.09.13</div>

    <h1 class="h1-title">P丸様。のすべてがわかる！待望のファンブック！！ 「ぴーまるぶっく！。」発売決定！</h1>

    <div class="flex flex-col">
      <div class="img-center">
        <img src="./img/20200913003-01.jpg" alt="pmaru book image" />
      </div>

      <div>
        <table>
          <tr v-for="(i, index) in bookInfo" :key="index">
            <td>
              {{ i[0] }}
            </td>
            <td>{{ i[1] }}</td>
          </tr>
        </table>

        <br />

        <p>
          <strong>P丸様。のすべてがわかるオフィシャルファンブックがついに発売決定！</strong>
        </p>

        <br />

        <p>
          声とイラストでみんなを笑顔にする動画クリエイター「P丸様。」。YouTubeちゃんねるの登録者数130万人、再生数5億2000万回を突破したその大人気の秘密と魅力が122ページにたっぷり詰まっています。
          <br />
          描き下ろし新作コミックとして、動画でもおなじみの『ゆるふわ～』『なんでなん川島』『お嬢様と執事』を収録。「ぴーまるファミリー（キャラクター紹介）」のコーナーでは、「なっきー」「よにんはプリティア！」なども登場。さらに、人気キャラグラビア「うさぎさんとくまくんの原宿さんぽ」も。
          <br />
          P丸様。のイラストを堪能できる「ぴーまるぎゃらりー！。」、これまでの活動を振り返る「ぴーまるストーリー」、「100の質問」に本人が答えるQ&Aコーナーなどを含めた「ぴーまるプロフィール」など、もっともっとP丸様。を好きになれるコーナーともりだくさん。
          <br />
          さらには、P丸様。あこがれの声優、金田朋子さんとのアフレコ密着記事や、ハンバーグ作りに「再チャレンジ」する「ぴーまるくっきんぐ！。」、そしてそして、何と「禁断の袋とじ」まで……。
        </p>

        <br />

        <p>P丸様。の魅力の詰まった1冊です！</p>

        <h2 class="h2-title border-dashed border-[#f60] border-b-[2px]">[CONTENTS]</h2>

        <div v-for="(i, index) in contenInfo" :key="index" class="mb-[20px]">
          <h3 class="font-bold text-[#787878]">{{ i[0] }}</h3>

          <p>
            {{ i[1] }}
          </p>

          <ul>
            <li v-for="(p, pIndex) in i[2]" :key="pIndex" class="ml-[20px]">
              {{ p }}
            </li>
          </ul>
        </div>

        <div class="w-[98%] m-auto rounded-lg bg-[#f60] grid grid-cols-2 p-2 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="(i, index) in shopImages" :key="index" class="flex justify-center items-center p-1">
            <a :href="i.url" target="_blank">
              <img :src="i.src" :alt="i.alt" class="w-full transition-all duration-300 ease-in-out hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import amazon from './img/shop_amazon.png';
import rakuten from './img/shop_rakuten-books.png';
import sevenNet from './img/shop_7net.png';
import animate from './img/shop_animate.png';
import towerrecords from './img/shop_towerrecords.png';
import tsutaya from './img/shop_tsutaya.png';
import kinokuniya from './img/shop_kinokuniya.png';
import eHome from './img/shop_e-hon.png';
import hmvbooks from './img/shop_hmvbooks.png';
import honto from './img/shop_honto.png';

const bookInfo = [
  ['■書名：', 'ぴーまるぶっく！。'],
  ['■定価：', '本体1,800円＋税'],
  ['■発売日：', '2020年9月30日'],
  ['■種別：', '書籍'],
  ['■ページ数：', '122ページ'],
  ['■ISBN：', '978-4-8456-3547-4'],
  ['■出版社：', 'STPR BOOKS'],
];

const contenInfo = [
  [
    '◎これまでの活動を振りかえる！',
    'ぴーまるひすとりー！。',
    ['ぴーまるストーリー', 'ぴーまるファミリー', 'コミックらいんなっぷ', '『妖怪ウォッチ』で声優に挑戦!!'],
  ],
  [
    '◎P丸様。をもっと知りたい!!',
    'ぴーまるプロフール',
    [
      'P丸 くりえいてぃぶ ふぁいる',
      'かわいい家族を紹介！',
      'P-Question & Answer 100',
      'P丸様。ってどんな人？',
      'P-Beauty’s Side',
    ],
  ],
  ['◎かわいいイラストをお届け！', 'ぴーまるぎゃらりー！。', []],
  ['◎どんな生活をしているの？', 'P丸様。の1日', []],
  ['◎ハンバーグづくりに挑戦!!', 'ぴーまるくっきんぐ！。', []],
  ['◎「未来」をみてもらったよ♪', 'ドキドキ!? タロットうらない', []],
  ['◎『ゆるふわ』の人気キャラグラビア', 'うさぎさんとくまくんの原宿さんぽ', []],
  ['◎かわいいグッズたちをチェック!!', 'P丸様。のオリジナルグッズ紹介', []],
  ['◎あこがれの声優さんと共演♡', '金田朋子さんとのアフレコに密着', []],
  ['◎P丸様。ちゃんねる情報', '', []],
  ['◎コミック', '', ['ゆるふわ～', 'なんでなん川島', 'なんでなん川島 高校生！ まんが！', 'お嬢様と執事']],
];

const shopImages = [
  { src: amazon, url: 'https://www.amazon.co.jp/dp/484563547X/ref=cm_sw_r_tw_dp_x_jYUvFb41KKJ7T', alt: 'amazon' },
  { src: rakuten, url: 'https://books.rakuten.co.jp/rb/16450562/', alt: 'rakuten' },
  { src: sevenNet, url: 'https://7net.omni7.jp/detail/1107129967', alt: 'seven net' },
  { src: animate, url: 'https://www.animate-onlineshop.jp/pn/pd/1842543/', alt: 'animate' },
  { src: towerrecords, url: 'https://tower.jp/item/5099019', alt: 'towerrecords' },
  { src: tsutaya, url: 'https://shop.tsutaya.co.jp/book/product/9784845635474/', alt: 'tsutaya' },
  { src: kinokuniya, url: 'https://www.kinokuniya.co.jp/f/dsg-01-9784845635474', alt: 'kinokuniya' },
  {
    src: eHome,
    url: 'https://www.e-hon.ne.jp/bec/SA/Detail?refShinCode=0100000000000034118858&Action_id=121&Sza_id=F2',
    alt: 'e home',
  },
  {
    src: hmvbooks,
    url: 'https://www.hmv.co.jp/artist_P%E4%B8%B8%E6%A7%98%E3%80%82_000000000847430/item_%E3%81%B4%E3%83%BC%E3%81%BE%E3%82%8B%E3%81%B6%E3%81%A3%E3%81%8F-P%E4%B8%B8%E6%A7%98%E3%80%82%E3%81%AE%E3%81%99%E3%81%B9%E3%81%A6%E3%81%8C%E3%82%8F%E3%81%8B%E3%82%8B-%E5%BE%85%E6%9C%9B%E3%81%AE%E3%83%95%E3%82%A1%E3%83%B3%E3%83%96%E3%83%83%E3%82%AF_11206592',
    alt: 'hmvbooks',
  },
  { src: honto, url: 'https://honto.jp/netstore/pd-book_30533180.html', alt: 'honto' },
];
</script>

<style scoped>
@import url('@/css/information.css');
</style>
