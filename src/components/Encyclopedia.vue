<template>
  <b-container>
    <v-nav :nav="nav" />
    <div v-show="!ifArticle" class="classifyArea">
      <div class="classify">
        <div class="title">牙醫百科<span class="decoration"></span></div>
        <div class="searchArea">
          <div class="box">
            <input type="text" class="search" placeholder="請輸入關鍵字" />
            <img src="/static/images/ic-search.png" alt="" class="magnifier" />
            <button class="btn">搜尋</button>
          </div>
          <b-form-select :options="options"></b-form-select>
        </div>
        <b-navbar>
          <b-navbar-nav>
            <b-nav-item @click="isShow('catgoryAll')"
              ><router-link to="#all" exact>全部分類</router-link></b-nav-item
            >
            <b-nav-item @click="isShow('catgory1')"
              ><router-link to="#catgory1" exact
                >分類一</router-link
              ></b-nav-item
            >
            <b-nav-item @click="isShow('catgory2')"
              ><router-link to="#catgory2" exact
                >分類二</router-link
              ></b-nav-item
            >
            <b-nav-item @click="isShow('catgory3')"
              ><router-link to="#catgory3" exact
                >分類三</router-link
              ></b-nav-item
            >
            <b-nav-item @click="isShow('catgory4')"
              ><router-link to="#catgory4" exact
                >分類四</router-link
              ></b-nav-item
            >
            <b-nav-item @click="isShow('catgory5')"
              ><router-link to="#catgory5" exact
                >分類五</router-link
              ></b-nav-item
            >
            <b-nav-item @click="isShow('catgory6')"
              ><router-link to="#catgory6" exact
                >分類六</router-link
              ></b-nav-item
            >
            <b-nav-item @click="isShow('catgory7')"
              ><router-link to="#catgory7" exact
                >分類七</router-link
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-navbar>
        <div v-if="showContent === 'catgoryAll'" id="catgoryAll" class="catgory">
          <article-card v-for="(blog, index) in blogLists.catgoryAll"
          :key="index" :blog="blog" />
        </div>
        <div v-if="showContent === 'catgory1'" id="catgory1" class="catgory">
          <article-card v-for="(blog, index) in blogLists.catgory1"
          :key="index" :blog="blog" />
        </div>
        <div v-if="showContent === 'catgory2'" id="catgory2" class="catgory">
          <article-card v-for="(blog, index) in blogLists.catgory2"
          :key="index" :blog="blog" />
        </div>
        <div v-if="showContent === 'catgory3'" id="catgory3" class="catgory">
          <article-card v-for="(blog, index) in blogLists.catgory3"
          :key="index" :blog="blog" />
        </div>
        <div v-if="showContent === 'catgory4'" id="catgory4" class="catgory">
          <article-card v-for="(blog, index) in blogLists.catgory4"
          :key="index" :blog="blog" />
        </div>
        <div v-if="showContent === 'catgory5'" id="catgory5" class="catgory">
          <article-card v-for="(blog, index) in blogLists.catgory5"
          :key="index" :blog="blog" />
        </div>
        <div v-if="showContent === 'catgory6'" id="catgory6" class="catgory">
          <article-card v-for="(blog, index) in blogLists.catgory6"
          :key="index" :blog="blog" />
        </div>
        <div v-if="showContent === 'catgory7'" id="catgory7" class="catgory">
          <article-card v-for="(blog, index) in blogLists.catgory7"
          :key="index" :blog="blog" />
        </div>
      </div>
    </div>
    <v-article v-show="ifArticle" :article="articleData" />
  </b-container>
</template>
<script>
import nav from './common/Nav'
import doctorColumn from './common/DoctorColumn'
import articleCard from './common/ArticleCard'
import article from './Encyclopedia/Article'
export default {
  components: {
    'v-nav': nav,
    'doctor-column': doctorColumn,
    'v-article': article,
    'article-card': articleCard
  },
  data () {
    return {
      ifArticle: false,
      showContent: 'catgoryAll',
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      nav: [
        {
          text: '首頁',
          href: '/'
        },
        {
          text: '牙醫百科',
          href: '#'
        }
      ],
      articleData: {
        time: '2020/01/01',
        img: '/static/images/Mask_Group_272@3x.png',
        title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題',
        author: '張杏茹醫師',
        article: '小說中常形容美女的外表特徵之一，就是「明眸皓齒」，皓齒形容的是一個人的牙齒潔白光亮，是美貌的一項重要標準。是不是很羨慕別人笑起來時，牙齒潔白純淨的樣子呢？<br/><br/><br/>為什麼擁有一口黃牙？<br/>在我們的成長過程中，從6歲長出恆牙的那一天起，這顆牙齒就跟著我們吃香喝辣，難免容易沾染到食物、飲料的色素而染色，原本潔白的牙齒逐漸變成暗沉的黃色或褐色。雙和醫院贗復假牙科主治醫師林錫奎表示，牙齒變黃或變黑的原因很多，包括常見的幾個因素：<br/><br/><br/>◆曾經進行過根管治療的牙齒，會逐漸變黃或變黑，這是抽過神經後的牙齒容易發生的現象。<br/><br/>◆基因發展不全，導致琺瑯質或牙本質先天不全，牙齒容易變黃、變脆弱。<br/><br/>◆早期使用抗生素，如四環黴素或是過量使用氟，都會造成牙齒變色。如果在懷孕第3期或2～12歲的小孩服用四環黴素，因為正值乳牙、恆牙發育形成期，就易造成牙齒萌發後色澤不均；氟用量過多的時候，也容易在牙齒上生成氟瘢而變色，不過，與其他導致牙齒變色的原因相比，這是屬於比較少見的情形。<br/><br/>◆抽菸、嚼檳榔的人有很高的機會使得牙齒表面、齒縫變黑；含有色素的飲品如咖啡、紅茶等或是醬油，經年累月的堆積下，也容易在牙齒表面染上一層淡淡的黃色。<br/><br/>◆隨著年齡的增長，牙齒使用了40～50年後，琺瑯質因長期磨損而變薄，底下較黃的牙本質裸露出來，使得牙齒表面顏色偏黃，這也是敏感性牙齒的原因，當碰到冰或冷的食物、飲品時，容易有酸痛的現象。<br/><br/><br/>常見牙齒美白的方法<br/><br/>想笑卻不敢露齒而笑，深怕被人發現自己擁有一口黃板牙，真是令人感到困擾。林錫奎指出，每天三餐飯後刷牙是牙齒保健的基本方法，還能清除輕微的咖啡或茶漬染色。除此之外，也可以考慮到牙醫診所自費接受牙齒美白的治療，讓牙齒有煥然一新的美白效果。<br/><br/><img src="/static/images/Mask_Group_271.png"><br/><br/>◆口內噴砂：針對色素沉澱造成的牙齒變色，結合噴砂鹽以及高壓水，清除牙齒表面茶垢、菸垢，達到清潔的效果。自費約2000～3000元不等，不傷牙齦，不會造成牙齒損傷。<br/><br/>→優點：耗費時間短，療程約30分鐘即可美白完畢，適合隔天有面試或需跑業務的人補救之用。<br/><br/>→缺點：沒有抽菸、嚼檳榔習慣的人，若每天有喝咖啡或茶的習慣，口內噴砂後仍能維持2～3年；但有抽菸或檳榔習慣的人則不易維持，容易再次形成菸垢。<br/><br/>◆居家美白：經過牙醫師評估之後，量身製作適合個人的上下牙托，將濃度為15～20％的美白藥劑裝入牙托中，每晚睡前2～3小時套上牙齒，10～14天後能見成效，效果大約能持續1～2年。自費約數千元至1萬元。<br/><br/>→優點：有4～6個色階，在家自行操作，能決定自己想要的美白程度。在進行冷光美白等其他的牙齒美白治療後，依照醫師指示搭配使用居家美白，可以加強美白效果，讓牙齒白得久一些。<br/><br/>→缺點：需長期使用，持之以恆才能見效。<br/><br/>◆冷光美白：利用光線的刺激，激化濃度約35％的美白藥劑產生化學反應，以達到美白牙齒的效果。費用較高，約1～2萬元，牙醫師也會搭配居家美白藥劑，半年後如果美白效果減退，可以自行居家美白。<br/><br/>→優點：約70分鐘的療程，患者只需躺在診療椅上，即可完成牙齒美白。<br/><br/>→缺點：療程後的第一天容易出現牙齒敏感現象，有酸、痛的感覺，牙醫師通常會提供牙托給患者裝氟膠，讓患者套上後以減輕敏感的症狀。<br/><br/>◆瓷牙貼片：醫師為患者量身打造配合牙齒形狀、大小的陶瓷貼片，將貼片覆蓋在牙齒表面上，外觀看起來自然不做作。自費約1萬5千到2萬元。<br/><br/>→優點：療程快速，牙醫師會依據患者的牙齒模型，製作陶瓷貼片，一般來說，第2天就能貼上。瓷牙貼片不只能改變牙齒顏色，還能調整牙齒大小、排列、弧度，甚至是微笑曲線，兼具整牙的美觀效果。<br/><br/>→缺點：在製作陶瓷貼片之前，必須先磨掉一層琺瑯質，將牙齒縮小，因此，會損失一些健康的牙齒。<br/><br/>如果患者本身的牙齒不健康，有蛀牙或牙周病等狀況，建議在美白前都先治療完畢。有些人的牙齒結構比較容易敏感，在進行牙齒美白時，可能會因為美白劑的刺激而產生敏感不舒服的症狀，但這些敏感的現象會在美白治療完成後，也跟著消失。<br/>牙齒經過口內噴砂、居家美白、冷光美白等療程，經過一段時間後仍可能再次變黃、變黑，需要重複進行美白。如果要延緩牙齒再次變色的時間，建議少喝茶、咖啡、可樂等飲料；但瓷牙貼片只要沒有脫落或斷裂，能維持較長的效期。因此，為了保護瓷牙避免斷裂，患者飲食時要注意，別用貼有陶瓷貼片的門牙啃咬較硬的食物，例如硬式法國麵包、甘蔗、帶殼海鮮類的螃蟹或貝類等，牙醫師也會準備一組夜間牙套保護瓷牙，避免在睡覺時因為磨牙或咬緊牙關等情形而造成牙齒直接斷裂的機會。<br/><br/>市售藥劑濃度低<br/><br/>除了牙醫診所有牙齒美白的自費項目外，在一般藥妝店或電視購物頻道中，也能找到相關的產品，而且價格比牙醫診所低廉。林錫奎表示，市售美白產品概念與牙醫診所的居家美白相同，只是美白藥劑的濃度較低約為8％，效果不及居家美白，僅適用輕度牙齒變色的患者。<br/><br/>要特別提醒的是，市售美白產品雖然便宜，但其所搭配的牙托並非量身打造，會有密合度的問題，在配戴牙托時可能會讓牙齦直接接觸到美白藥劑而受傷，要小心發生牙齦損傷的情形。<br/>牙齒變黃、甚至變黑，都是經年累月下的成果，因此，日常的牙齒保養就顯得相當重要，包括養成三餐飯後刷牙習慣、正確的潔牙方式、定期檢查牙齒、每半年牙結石清除治療（洗牙）等，減少抽菸或咀嚼檳榔也能避免牙齒染色。提醒想要進行牙齒美白的民眾，不要為了減低花費而貿然購買一般市售的美白貼片，建議還是先諮詢牙醫師，讓醫師評估哪一種美白療程比較適合自己，以免在不知不覺中傷害了牙齒健康，賠了夫人又折兵。<br/>亮白牙膏效果有限<br/><br/>市面上的各種亮白牙膏是否能幫助牙齒美白呢？牙膏在牙齒保養上的角色是輔助作用，最大的效果是幫助口氣清新，增強牙齒預防蛀牙的能力。亮白牙膏的美白效果僅適用於輕微咖啡或茶的染色患者，若是中度或重度的茶垢，甚至是菸垢、檳榔垢等，光靠亮白牙膏是沒有用的。'

      },
      blogLists: {
        catgoryAll: [
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          }],
        catgory2: [
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          }
        ],
        catgory3: [
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          }],
        catgory4: [],
        catgory5: [
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          }],
        catgory6: [],
        catgory7: [
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_268.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_269.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          },
          {
            img: 'static/images/Mask_Group_270.png',
            author: '張杏如醫師',
            time: '2020/01/01',
            title: '文章標題文章標題文章標題文章標題文章標題文章標題文章標題'
          }]
      }
    }
  },
  methods: {
    isShow (elem) {
      this.showContent = elem
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 26px;
  font-weight: 500;
  line-height: 1.46;
  color: #646464;
  margin: 20px 0;
  border-bottom: 1px solid #639cb9;
  width: 15%;
  position: relative;
}

.decoration {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 0;
  width: 35px;
  border-bottom: solid 6px#639cb9;
}
.searchArea {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.searchArea .box {
  flex-basis: 80%;
  display: flex;
  align-items: center;
}
.search {
  position: relative;
  opacity: 0.42;
  border-radius: 5px;
  border: solid 1px #bfb7ac;
  background-color: #ffffff;
  padding: 8px;
  width: 70%;
}
.magnifier {
  position: absolute;
  left: 45%;
  top: 11px;
  color: #bebebe;
}
.btn {
  border-radius: 5px;
  background-color: #6799ba;
  color: #fff;
  width: 7%;
  padding: 7px;
  margin-left: 10px;
}
select {
  flex-basis: 20%;
}
nav {
  margin: 25px;
  padding-left: 0;
  margin-left: 0;
}
.nav-item {
  border-right: solid 1px #bebebe;
  padding: 0 20px;
}
.nav-item:first-child {
  padding-left: 0;
}
.nav-link {
  padding:0;
}

a.router-link-active {
  color: #6799ba;
}
.catgory {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.catgory .card {
  flex-basis: 30%
}
</style>
