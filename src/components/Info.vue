<template>
<b-container class="infoContainer">
  <v-nav />
  <div class="title">診所資訊<span class="decoration"></span></div>
  <main>
    <div class="info">
      <div class="phone">
        <div class="desc">診所電話</div>
        <div class="text">(02) 8369-2796</div>
      </div>
      <div class="address">
        <div class="desc">診所地址</div>
        <div class="text">台北市建國南路二段276號9樓</div>
      </div>
      <div class="time">
        <div class="desc">看診時間</div>
        <div class="highlight">週一至週五</div>
        <div class="text">上午 9:00-12:00</div>
        <div class="text">下午 14:00-17:30</div>
        <div class="text">晚上 18:00-21:00</div>
        <div class="highlight">週六</div>
        <div class="text">上午 9:00-12:00</div>
        <div class="highlight">週日</div>
        <div class="text">休診</div>
      </div>
    </div>
    <div class="map">
      <img src="/static/images/map.jpg" alt="">
    </div>
  </main>

</b-container>
</template>
<script>
import nav from './common/Nav'
export default {
  components: {
    'v-nav': nav
  }
}
</script>
<style scoped>
.infoContainer{
  margin-bottom: 100px;
}
.title {
  border-bottom: 1px solid#639cb9;
  position: relative;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.46;
  color: #646464;
  width: 20%;
  margin-bottom: 20px;
}
.title .decoration {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 0;
  width: 35px;
  border-bottom: solid 6px #639cb9;
}
main {
  display: flex;
}
.info {
  border-radius: 10px;
  background-color: #eae8e440;
  padding: 35px 50px;
  margin-right: 15px;
}
.desc {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #bfb7ac;
  margin-top: 30px;
}
.text {
  color: #646464;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 3.2px;
}
.highlight {
  margin-top: 20px;
  color: #646464;
  line-height: 1.5;
  letter-spacing: 3.6px;
  font-size: 18px;
  font-weight: 700;
}
.map {
  max-width: 1000px;
}
.map img{
  width:100%;
}
</style>
