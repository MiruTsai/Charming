<template>
  <div class="index">
    <img src="" alt="" class="logo">
    <carousel />
    <latest-news />
    <b-container fluid class="about">
      <img src="" alt="" class="pic">
      <div class="description">
        <div class="title">關於碩美</div>
        <p class="desc">碩美牙醫擁有經驗豐富的台大專業醫師團隊及頂尖的數位醫療設備，在這裡您將感受親切服務誠摯溝通、醫師的縝密診斷與適切治療為您把關口腔健康，讓您重拾自信的微笑。</p>
        <button class="btn">關於碩美</button>
      </div>
      <div class="brown"></div>
    </b-container>
    <latest-news-pic />
    <b-container fluid class="treatment">
      <div class="brown">
        <img src="" alt="" class="pic">
      </div>
      <div class="description">
          <div class="title">診療項目</div>
          <p class="desc">簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</p>
          <button class="btn">關於碩美</button>
      </div>
    </b-container>
    <hr>
    <treatment-detail />
    <treatment />
    <doctor-group />
    <doctor-column />
  </div>
</template>

<script>
import carousel from './index/Carousel'
import doctorColumn from './common/DoctorColumn'
import latestNews from './index/LatestNews'
import latestNewsPic from './index/LatestNewsPic'
import treatment from './index/Treatment'
import treatmentDetail from './index/TreatmentDetail'
import doctorGroup from './index/DoctorGroup'

export default {
  components: {
    'doctor-column': doctorColumn,
    'latest-news': latestNews,
    'latest-news-pic': latestNewsPic,
    'doctor-group': doctorGroup,
    'treatment-detail': treatmentDetail,
    carousel,
    treatment
  }
}
</script>
<style scoped>
.logo {
  position: absolute;
  width: 223.1px;
  height: 185px;
  z-index: 10;
  background-color: #6799ba;
  top: 0;
}
hr {
  width: 77%
}
.img {
  width: 1151px;
  height: 729px;
  background-color: orange;
}
.about {
  background-color: #bfb7ac;
  display: flex;
  padding: 0;
}
.about .title {
  font-size: 26px;
  font-weight: 500;
  line-height: 1.46;
  text-align: right;
}
.about .desc {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.8px;
}
.about .pic{
  width: 822px;
  height: 468px;
  opacity: 0.7;
  background-color: yellow;
}
.about .description {
  background-color: #639cb9;
  color: #fff;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.about .btn {
  border-radius: 5px;
  border: solid 1.5px #ffffff;
  width: 100%;
  padding: 5px;
  color: #fff;
}
.about .brown {
  width: 10%;
}
.treatment {
  margin: 50px 0;
  display: flex;
  padding: 0;
  height: 486px;
  justify-content: space-between;
}

.treatment .brown {
  width: 611px;
  height: 363px;
  position: relative;
}
.treatment .pic {
  width: 702px;
  height: 440px;
  background-color: yellow;
  border-radius: 0 50px 0 50px;
  position: absolute;
  left: 120px;
  top:46px;
}
.treatment .title {
  font-size: 26px;
  font-weight: 500;
  line-height: 1.46;
  text-align: right;
}
.treatment .description {
  flex-basis: 30%;
  color: #000;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;
}
.treatment .desc {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.8px;
}
.treatment .btn {
  border-radius: 5px;
  border: solid 1.5px #000;
  width: 100%;
  padding: 5px;
  color: #000;
}

</style>
