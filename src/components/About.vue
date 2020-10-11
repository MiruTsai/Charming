<template>
  <div class="about">
    <img src="/static/images/Mask_Group_275.png" alt="" class="banner" />
    <b-container fluid>
      <side-bar />
      <div class="right">
        <v-nav />
        <div class="group">
          <h2>醫療團隊</h2>
          <p class="info">碩美牙醫由院長周裕人醫師領軍，多位臺大醫院牙科部總醫師所組成的專業醫療團隊，強調醫療分科服務，由各專科醫師負責專門的診療項目，如：根管治療、牙齒矯正、牙周病…等，此外，針對每位病患我們都會做詳盡的檢測，並依照其口腔狀況，會診各專科醫師，量身打造專屬治療計劃，以確保每位病患均可得到高品質的治療成效。</p>
        </div>
        <div class="title">醫師介紹</div>
        <doctor-intro />
      </div>
    </b-container>
  </div>
</template>

<script>
import nav from './common/Nav'
import sideBar from './about/SideBar'
import doctorIntro from './about/DoctorIntro'
export default {
  components: {
    'side-bar': sideBar,
    'doctor-intro': doctorIntro,
    'v-nav': nav
  },
  data () {
    return {

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
.title {
  color: #6799ba;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.45;
}
.right {
  flex-basis: 80%;
  margin-left: 20px;
}
</style>
