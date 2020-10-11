<template>
  <b-container fluid class="footer">
    <b-container>
      <b-row>
        <b-col cols="5">
          <img src="/static/images/logo.png" alt="" class="footer-logo" />
          <p class="info">
            碩美牙醫擁有經驗豐富的台大專業醫師團隊及頂尖的數位醫療設備，在這裡您將感受親切服務誠摯溝通、醫師的縝密診斷與適切治療為您把關口腔健康，讓您重拾自信的微笑。
          </p>
          <div class="copyRight">Copyright 2020 © 碩美牙醫診所</div>
        </b-col>
        <b-col cols="3">
          <div class="title">SITE MAP</div>
          <ul class="mapList">
            <li class="site">關於碩美</li>
            <li class="site">診所資訊</li>
            <li class="site">診療項目</li>
            <li class="site">聯絡我們</li>
            <li class="site">案例分享</li>
            <li class="site">隱私權政策</li>
            <li class="site">牙醫百顆</li>
            <li class="site">服務條款</li>
          </ul>
        </b-col>
        <b-col cols="4">
          <div class="title">CONTACT US</div>
          <div class="contactIcon">
            <img src="/static/images/ic-message.png" alt="" />
            <img src="/static/images/ic-phone.png" alt="" />
          </div>
          <ul>
            <li>
              <img src="/static/images/ic-mail.png" alt="" /><span class="info">Charmingclinic@gmail.com</span>
            </li>
            <li>
              <img src="/static/images/ic-contact.png" alt="" /><span class="info">(02) 8369-2796</span>
            </li>
            <li>
              <img src="/static/images/ic-location.png" alt="" /><span class="info"
                >台北市建國南路二段276號9樓</span
              >
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <div class="blueBar">
    </div>
  </b-container>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
}
.footer {
  background-color: #bfb7ac;
  color: #fff;
  height: 365.4px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
}
.footer-logo {
  margin-bottom: 12px;
}
.title {
  padding: 10px 0;
  border-bottom: 1px solid #fff;
  margin-bottom: 20px;
}
.info {
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
}
.copyRight {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.43;
  letter-spacing: 2.8px;
}
.mapList {
  display: flex;
  flex-wrap: wrap;

}
.mapList li {
  flex-basis: 50%;
  margin-bottom: 10px;
}
li img {
  padding-right: 10px;
}
.info {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.43;
  letter-spacing: 2.8px;
}
.contactIcon {
  margin-bottom: 10px;
}
.blueBar {
  width: 590px;
  height: 61px;
  background-color: #639cb9;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
