<template>
  <div class="carousel">
    <div class="carouselController">
      <div class="top">
        <h2 class="year">2020</h2>
        <div class="box">
          <img src="/static/images/Group_3963.png" alt="">
          <img src="/static/images/Group_3964.png" alt="">
        </div>
      </div>
      <div class="bottom">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="left">
        <div class="line"></div>
        <div class="slogan">
        <div>START TO LOVE YOUR</div>
        <div>CHARMING SMILE</div>
        <div>AGAIN.</div>
      </div>
        <div class="infoBox">
          <div class="title">碩造您完美的微笑</div>
          <p>碩美牙醫擁有經驗豐富的台大專業醫師團隊及頂尖的數位醫療設備，在這裡您將感受親切服務誠摯溝通、醫師的縝密診斷與適切治療為您把關口腔健康，讓您重拾自信的微笑。</p>
          <button class="btn">EXPLORE</button>
        </div>
      </div>
      <div class="right">
        <img src="/static/images/Group_3929.png" alt="">
      </div>
    </div>
    <div class="carousel-item active">
      <div class="leftBox">
        <div class="left2">
          <div class="line"></div>
          <div class="slogan">
          <div>PRIVATE DENTISTRY</div>
          <div>IN A RELAXING</div>
          <div>HIGH-TECH</div>
          <div>ENVIRONMENT</div>
        </div>
          <div class="infoBox">
            <button class="btn">EXPLORE</button>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/static/images/Mask_Group_289.png" alt="">
      </div>
    </div>
    <div class="carousel-item">
      <div class="left">
        <div class="line"></div>
        <div class="slogan">
        <div>START TO LOVE YOUR</div>
        <div>CHARMING SMILE</div>
        <div>AGAIN.</div>
      </div>
        <div class="infoBox">
          <div class="title">碩造您完美的微笑</div>
          <p>碩美牙醫擁有經驗豐富的台大專業醫師團隊及頂尖的數位醫療設備，在這裡您將感受親切服務誠摯溝通、醫師的縝密診斷與適切治療為您把關口腔健康，讓您重拾自信的微笑。</p>
          <button class="btn">EXPLORE</button>
        </div>
      </div>
      <div class="right">
        <img src="/static/images/Mask_Group_290.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped>
.carousel {
  text-align: right;
  background-color: #bfb7ac;
  padding-bottom: 270px;
  display: block;
  height: 1000px;
}
.carousel-item {
  display: none;
}
.carousel-item.active {
  display: flex;

}

.left, .left2 {
  position: absolute;
  z-index: 10;
  text-align: left;
  color: #fff;
}
.left {
  top: 200px;
  left: 100px;
}
.leftBox {
  position: absolute;
  z-index: 11;
  opacity: 0.71;
  background-color: #6799ba;
  height: 729px;
  width: 682px;
}
.left2{
  z-index: 12;
  top: 200px;
  left: 100px;
}
.line {
  border: solid 5px #fff;
  width: 30%;
  margin-bottom: 20px;
}
.left .slogan {
  font-family: HelveticaNeueLTStd-BdCnO;
  font-size: 85px;
  line-height: 0.95;
  font-style: italic;
  font-stretch: narrower;
}
.left2 .slogan {
  font-family: HelveticaNeueLTStd-MdCn;
  font-size: 65px;
  line-height: 0.92;
}
.infoBox {
  width: 40%;
}
.infoBox .title {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  margin: 20px auto;
}
.infoBox p {
  line-height: 1.43;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
}
.btn {
  color: #fff;
  border: 1px solid #fff;
  width: 100%;
}
.right {
  position: absolute;
  right: 0;
}
.carouselController {
  position: absolute;
  z-index: 10;
  bottom: 330px;
  right: 30px;
  width: 17%;
}
.year {
  font-family: HelveticaNeue;
  font-size: 46px;
  font-weight: 200;
  color: #313131;
  font-style: italic;
  line-height: 1.17;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 3px #ffffff;
}
.top .box {
  display: flex;
  width: 40%;
  justify-content: space-between;
}
.bottom {
  display: flex;
}
.bottom .dot {
  width: 10px;
  height: 10px;
  opacity: 0.68;
  background-color: #ffffff;
  border-radius: 99px;
  margin:10px;
}
.dot.active{
  background-color: #806949;
}
</style>
