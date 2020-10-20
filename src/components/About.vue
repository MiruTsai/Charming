<template>
  <div class="about">
    <img src="/static/images/Mask_Group_275.png" alt="" class="banner" />
    <b-container fluid>
      <side-bar />
      <div class="right">
        <v-nav :nav="nav"/>
        <div class="forGroup">
          <div class="block">
            <div class="title">醫療團隊<span class="decoration"></span></div>
            <p class="info">碩美牙醫由院長周裕人醫師領軍，多位臺大醫院牙科部總醫師所組成的專業醫療團隊，強調醫療分科服務，由各專科醫師負責專門的診療項目，如：根管治療、牙齒矯正、牙周病…等，此外，針對每位病患我們都會做詳盡的檢測，並依照其口腔狀況，會診各專科醫師，量身打造專屬治療計劃，以確保每位病患均可得到高品質的治療成效。</p>
          </div>
          <div class="intro">醫師介紹</div>
          <doctor-intro />
        </div>
        <div class="forEnvironment">
          <div class="block">
            <div class="title environment">診所環境設備<span class="decoration"></span></div>
            <div id="digital" class="intro">數位診療設備</div>
            <p class="info">數位科技發展為牙科醫學帶起了嶄新的發展，過去牙醫師只能靠X光片拼湊牙齒的狀況，現在有了3D斷層掃描和數位口掃機可以提供完整的資訊，讓醫師可以在診療前，更全面的掌握患者口腔狀況，碩美牙醫引進了全套的數位檢測設備，包含：口內根尖 X光片、環口全景攝影、3D全口斷層掃瞄、側顱攝影等，除能更了解患者的口腔狀態，更能大大地減少患者所接收的輻射劑量；此外，在治療上，我們也引進了3D全彩口內掃描機DSD - digital smile design微笑設計、牙科顯微鏡、活髓治療、3D齒雕機…等，透過科技輔助，讓醫師在診療時可以更即時且清楚了解患者的狀況外，更能給予患者最適洽的診療方式，提升醫療品質。</p>
          </div>
          <div v-for="(item, index) in digital" :key="index">
            <equipment :equip="item" />
          </div>
        </div>
        <div id="prevention" class="intro">防疫、消毒設備</div>
        <p class="info">徹底器械消毒是交叉感染控制的第一關，環境消毒更是傳染病控制的必要手段，碩美牙醫採用高規格的三度抽真空Class B消毒鍋設備，真空高溫消毒，讓所有器械不僅肉眼看的到的部分徹底消毒，細微的孔徑，也能滴水不漏地把關。此外，針對防疫措施，我們除了為每位患者準備專屬的醫療器械外，更採最高標準的預防交叉感染措施，每個診間均安裝空氣清淨機淨化空氣中的飛沫感染源，當每位患者完成診療時，診間、治療椅我們會將每個細節、所有設備(包含隙縫處)皆以消毒液噴灑，再以消毒紙巾仔細擦拭後，覆上乾淨的膠膜，保障患者在最安全的就醫環境完成診療。
        </p>
        <div v-for="(item, index) in equipment" :key="index">
            <equipment :equip="item" />
          </div>
        <div id="environment" class="intro">舒適診療環境</div>
        <div class="boxContainer">
          <div class="pictureBox">
            <img src="/static/images/Group_3952.png" alt="">
            <div class="imgTitle">入口櫃台</div>
          </div>
          <div class="pictureBox">
            <img src="/static/images/Group_3953.png" alt="">
            <div class="imgTitle">候診區</div>
          </div>
          <div class="pictureBox">
            <img src="/static/images/Group_3954.png" alt="">
            <div class="imgTitle">第一診療室</div>
          </div>
          <div class="pictureBox">
            <img src="/static/images/Group_3954.png" alt="">
            <div class="imgTitle">第二診療室</div>
          </div>
          <div class="pictureBox">
            <img src="/static/images/Group_3954.png" alt="">
            <div class="imgTitle">第三診療室</div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import nav from './common/Nav'
import sideBar from './about/SideBar'
import doctorIntro from './about/DoctorIntro'
import equipment from './about/Equipment'

export default {
  components: {
    'side-bar': sideBar,
    'doctor-intro': doctorIntro,
    'v-nav': nav,
    equipment
  },
  data () {
    return {
      nav: [
        {
          text: '首頁',
          href: '#'
        },
        {
          text: '關於碩美',
          href: '#'
        },
        {
          text: '醫療團隊',
          active: true
        }
      ],
      digital: [
        {
          img: '/static/images/Mask_Group_277.png',
          title: 'Planmeca 數位3D電腦斷層X光機',
          article: '傳統牙科Ｘ光攝影所得的2D平面影像，容易受到組織重疊的影響，而無法觀察到牙齒內部的實際狀況，造成醫師誤判；為解決此問題，就需要牙科專用的3D電腦斷層攝影；若與傳統醫療電腦斷層相比較，牙科3D電腦斷層攝影有很多優點，如輻射劑量只有一般電腦斷層的1/50；採站姿（或坐姿）攝影，方便行動不便的患者。'
        },
        {
          img: '/static/images/Mask_Group_278.png',
          title: '3shape Trios全彩口內取像儀',
          article: '傳統印模常伴隨著不適，強烈的異物感總是讓人想吐。有了3shape Trios口內取像儀 快速取得口腔資料，除可免除傳統印模的不適感，更比印模更精準，避免人為錯誤影響數據。此外，傳統取模常需耗時20-30分鐘，口內取像儀僅需5分鐘，讓取模變得簡單快速又舒適。'
        },
        {
          img: '/static/images/Group_3955.png',
          title: '德國CEREC MC XL – 3D齒雕乾濕兩用四軸研磨機',
          article: '可研磨超精細的全瓷贋復體，單顆研磨時間少於10分鐘，當日即可完成假牙膺復，對於忙碌的現代人是一大福音。透過一日美齒，數位治療與同步分工製作流程，你只需要一天的時間。除了增加患者的治療意願外，患者看診滿意度也因整體治療時間的明顯下降，而有大幅的提升。'
        },
        {
          img: '/static/images/Mask_Group_281.png',
          title: '德國CEREC SpeedFire – 3D齒雕氧化鋯燒結爐',
          article: '世界最快最先進的氧化鋯燒結爐可在10-15分燒結完成，可當日完成氧化鋯瓷冠。'
        },
        {
          img: '/static/images/Mask_Group_282.png',
          title: '德國 VITA VACUMAT 6000M/MS – 3D齒雕烤瓷爐',
          article: '傳統牙科Ｘ光攝影所得的2D平面影像，容易受到組織重疊的影響，而無法觀察到牙齒內部的實際狀況，造成醫師誤判；為解決此問題，就需要牙科專用的3D電腦斷層攝影；若與傳統醫療電腦斷層相比較，牙科3D電腦斷層攝影有很多優點，如輻射劑量只有一般電腦斷層的1/50；採站姿（或坐姿）攝影，方便行動不便的患者。'
        },
        {
          img: '/static/images/Mask_Group_283.png',
          title: 'Zeiss牙科顯微鏡',
          article: '德國蔡司Ｚeiss 牙科顯微鏡<br/>牙齒結構小而複雜，不論是蛀牙，假牙或是根管治療，差之毫釐，失之千里，顯微膺復、顯微根管治療在牙科顯微鏡下，更大更明亮的視野讓我們可以更專注於對細節的處理和對完美的追求。'
        },
        {
          img: '/static/images/Mask_Group_284.png',
          title: 'CEREC Omnicam – 3D齒雕全彩口內取像儀',
          article: '碩美採用德國CEREC數位口內掃瞄機，及3D齒雕設備，在診所內以數位取像方式記錄患者的詳細口內資訊，取代傳統印模、牙模運送與製作的時間，讓患者能輕鬆完成一日美齒計劃。'
        },
        {
          img: '',
          title: 'DSD - digital smile design微笑設計',
          article: '「數位微笑設計」是近年最夯的技術，它不僅是一個有效的溝通工具，也是牙醫師強大的工具。透過研究患者的面部、牙齒、牙齦和嘴唇間的細節，牙醫師會用數位虛擬方式設計治療計畫。這項技術誕生於現代患者對美學更高的追求。透過牙醫師的專業美感和技術，使每位患者擁有最完美微笑比例。'
        }
      ],
      equipment: [
        {
          img: '/static/images/Group_3960.png',
          title: '義大利Axyia Plus B真空滅菌機',
          article: '三度抽真空Class B消毒鍋，為最高等級消毒鍋，有別於傳統消毒鍋（俗稱火車頭），在高溫滅菌前先進行多次預抽真空，使消毒鍋內產生負壓後釋放高溫高壓空氣，確保高溫高壓空氣可進入細長管路進行滅菌，達到完全滅菌的標準。'
        },
        {
          img: '/static/images/Mask_Group_288.png',
          title: 'Dac universal手機保養機',
          article: '傳統消毒程序只針對手機外部進行清潔，卻忽略了內部管路清潔，所以長期累積的汙垢和感染控制問題謂為詬病，Dac universal 的高壓高溫134℃蒸氣逆沖洗技術讓手機從裡到外全部乾乾淨淨，全程電腦監控自動化清潔，提供病患高等級歐規的感染防護，免除對交叉感染的恐懼。'
        },
        {
          img: '',
          title: '二氧化氯消毒噴霧機',
          article: '二氧化氯是一種強氧化劑，對細菌、病毒、黴菌等微生物的細胞壁有較強的吸附和穿透能力，能有效地氧化細胞內的酶，以及快速抑制蛋白質合成，達到抑菌、殺菌的效果，且由於不含重金屬、不易殘留毒性、易揮發等特性，二氧化氯是對環境、人體及動物較為友善的綠色消毒劑。'
        }
      ]
    }
  }
}
</script>
<style scoped>
.about {
  width: 88%;
  margin: 20px auto;
}
.info {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.9px;
  color: #646464;
}
.container-fluid {
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.banner {
  height: 349.6px;
  width: 100%;
  background-color: yellow;
  margin: 30px auto;
}
main {
  display: flex;
}
.right {
  flex-basis: 80%;
  margin-left: 30px;
}

.title {
  font-size: 26px;
  font-weight: 500;
  line-height: 1.46;
  text-align: left;
  border-bottom: 1px solid #639cb9;
  position: relative;
  width:15%;
  color:#646464;
  margin-bottom: 20px;
}
.title.environment {
  width:20%;
}
.title .decoration {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 0;
  width: 35px;
  border-bottom: solid 8px #639cb9;
}
.intro {
  color: #6799ba;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.45;
  margin: 10px 0;
}
.boxContainer {
  display: flex;
  flex-wrap: wrap;
}
.pictureBox {
  flex-basis: 50%;
  justify-self: center;
  align-self: stretch;
}

.imgTitle {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #bfb7ac;
  margin: 20px 0;
}
</style>
