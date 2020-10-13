<template>
  <div class="box">
    <img :src="equip.img" alt="" class="pic">
    <div>
      <h6 class="articleTitle">{{equip.title}}</h6>
      <p class="article" v-html="equip.article"></p>
      <!-- <h6 class="articleTitle">Planmeca 數位3D電腦斷層X光機</h6>
      <p class="article">傳統牙科Ｘ光攝影所得的2D平面影像，容易受到組織重疊的影響，而無法觀察到牙齒內部的實際狀況，造成醫師誤判；為解決此問題，就需要牙科專用的3D電腦斷層攝影；若與傳統醫療電腦斷層相比較，牙科3D電腦斷層攝影有很多優點，如輻射劑量只有一般電腦斷層的1/50；採站姿（或坐姿）攝影，方便行動不便的患者。</p> -->
    </div>
</div>
</template>
<script>
export default {
  props: ['equip'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.box {
  border-radius: 10px;
  background-color: #eae8e440;
  padding: 35px;
  display: flex;
}
.box img{
  flex-basis: 30%;
  margin-right: 20px;
}
.articleTitle {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #bfb7ac;
}
.article {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.9px;
  color: #646464;
}
</style>
