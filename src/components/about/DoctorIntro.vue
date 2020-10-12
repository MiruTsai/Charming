<template>
  <b-container fluid class="intro">
    <div class="top">
      <button class="btn reservationBtn">立即預約</button>
      <div class="doctorIntro">
        <img src="/static/images/Mask_Group_276.png" class="pic">
        <div class="doctorProfile">
          <div class="name">張杏茹 <span class="doctor">醫師</span></div>
          <div class="detail">
            <div class="experience">
              <div class="list">臺大牙醫學系畢業</div>
              <div class="list">臺大醫院牙科部總醫師</div>
              <div class="list">臺大醫院補綴科及牙體復形科總醫師</div>
              <div class="list">臺大醫院補綴科兼任主治醫師</div>
              <div class="list">中華民國全人照護牙學會專科醫師</div>
            </div>
            <div class="major">
              <div class="sub">醫師專長</div>
              <div class="specialize">
                <div v-for="(item, index) in specialize"
                :key="index" class="list">{{ item }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="seperate">
        <div class="line"></div>
          <button class="btn collapsed" v-b-toggle.detail>收起詳情</button>
         <div class="line"></div>
      </div>
    </div>
    <div class="bottom">
      <b-collapse id="detail">
        <p class="introduce">張杏茹醫師素以仔細的問診、細膩的診療手法聞名，看診前她一定先看過所有病歷及X光，了解每位病人的狀況，擬定好治療計畫，指示助理當日看診應注意的細節，診療時，張醫師擅長於顯微鏡牙科治療，每個環節放大檢視，確保每位病人在就診時，可以得到最好的診療品質!!</p>
        <p class="introduce">此外，張醫師”輕盈” 的治療手法及注意診療時病人的感受，讓每位病人在診療時，都可得到最佳的診療體驗。</p>
        <div class="title">醫師專欄</div>
        <doctor-column />
        <div class="title">看診時間</div>
      </b-collapse>
    </div>
  </b-container>
</template>
<script>
import doctorColumn from '../common/DoctorColumn'
export default {
  components: {
    'doctor-column': doctorColumn
  },
  data () {
    return {
      specialize: ['美容牙科', '植牙膺復', '全口重建', '顯微膺復']
    }
  }
}
</script>
<style scoped>
.intro {
  display: flex;
  flex-direction: column;
}
.top {
  border-radius: 10px;
  background-color: #fafaf9;
  width: 100%;
  text-align: right;
  margin: 10px 10px 10px 0;
}
.reservationBtn {
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #6799ba;
  color: #fff;
  width: 20%;
  margin: 20px;
}
.doctorIntro{
  position: relative;
}
.doctorIntro .pic{
  position: absolute;
  bottom: 0;
}
.doctorProfile {
  width: 90%;
  margin-left: 220px;
  padding-bottom: 5px;
}
.name {
  font-size: 20px;
  font-weight: bold;
  line-height: 1.45;
  letter-spacing: 4px;
  color: #6799ba;
  border-bottom: 1px solid #fff;
  width: 81%;
  margin: 20px auto;
  padding-bottom: 5px;
}
.name span {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 2.8px;
  color: #8e8e8e;
}
.doctorIntro {
  background-color: #e0ebf1;
  display: flex;
  text-align: left;
  align-items: center;
}

.detail {
  display: flex;
  justify-content: space-around;
}
.sub {
  font-size: 10px;
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: solid 1px #bbcad3;
  line-height: 1.5;
  letter-spacing: 2px;
  text-align: left;
  color: #8e8e8e;
}
.experience .list{
  color: #8e8e8e;
  margin: 3px auto;
  line-height: 1.43;
  letter-spacing: 0.7px;
  font-size: 14px;
  font-weight: 300;
}
.major {
  border-radius: 10px;
  background-color:rgba(255, 255, 255, 0.5);
  padding: 10px;
  margin-bottom: 15px;
  width: 30%;
}
.major .specialize {
  display: flex;
  flex-wrap: wrap;
}
.specialize .list {
  flex-basis: 50%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.8px;
  color: #6799ba;
  text-align: center;
  margin: 10px auto;
}
.seperate {
  display: flex;
  justify-content: center;
  align-items: center;
}
.seperate .line {
  flex-basis: 40%;
  height: 0;
  border: solid 1px #e6e6e6;
}
.btn.collapsed {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: #6799ba;
}
#detail .introduce {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.8px;
  color: #808080;
}
#detail .title {
  color: #bfb7ac;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
}
</style>
