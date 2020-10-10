<template>
  <b-container>
    <b-row>
      <b-col class="brown">
        <div class="rect"></div>
        <img src="" alt="" class="icon">
        <div class="bottom">
          <div class="line"></div>
          <div class="title">診療項目</div>
          <span class="text">小標題小標題小標題</span>
        </div>
      </b-col>
      <b-col class="brown">
        <div class="rect"></div>
        <img src="" alt="" class="icon">
        <div class="bottom">
          <div class="line"></div>
          <div class="title">診療項目</div>
          <span class="text">小標題小標題小標題</span>
        </div>
      </b-col>
      <b-col class="brown">
        <div class="rect"></div>
        <img src="" alt="" class="icon">
        <div class="bottom">
          <div class="line"></div>
          <div class="title">診療項目</div>
          <span class="text">小標題小標題小標題</span>
        </div>
      </b-col>
      <b-col class="brown">
        <div class="rect"></div>
        <img src="" alt="" class="icon">
        <div class="bottom">
          <div class="line"></div>
          <div class="title">診療項目</div>
          <span class="text">小標題小標題小標題</span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {

}
</script>
<style scoped>
.brown {
  width: 285px;
  height: 203px;
  border-radius: 10px;
  margin: 15px;
  color: #fff;
  position: relative;
}
.bottom {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.line{
  width: 41.5px;
  height: 0;
  border: solid 4px #fff;
  margin: 5px 0;
}
.rect {
  width: 20px;
  height: 20px;
  background-color: #639cb9;
  margin: 15px;
}
.title {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  margin: 10px 0;
}
.text {
  word-wrap: break-word;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.55;
}
</style>
