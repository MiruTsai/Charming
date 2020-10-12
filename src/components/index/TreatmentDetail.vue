<template>
  <b-container class="treatmentDetail">
    <b-row>
      <b-col class="type1">
        <img src="/static/images/Mask_Group_264.png" alt="" class="pic">
        <div class="detail">
          <div class="title">診療項目</div>
          <div class="info">簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</div>
          <div class="more"><span class="decoration"></span>>>> MORE</div>
        </div>
      </b-col>
      <b-col class="type2">
        <div class="detail">
          <div class="title">診療項目</div>
          <div class="info">簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</div>
          <div class="more"><span class="decoration"></span>>>> MORE</div>
        </div>
        <img src="/static/images/Mask_Group_263.png" alt="" class="pic">
      </b-col>
    </b-row>
    <b-row>
      <b-col class="type1">
        <img src="/static/images/Mask_Group_265.png" alt="" class="pic">
        <div class="detail">
          <div class="title">診療項目</div>
          <div class="info">簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</div>
          <div class="more"><span class="decoration"></span>>>> MORE</div>
        </div>
      </b-col>
      <b-col class="type2">
        <div class="detail">
          <div class="title">診療項目</div>
          <div class="info">簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</div>
          <div class="more"><span class="decoration"></span>>>> MORE</div>
        </div>
        <img src="/static/images/Mask_Group_266.png" alt="" class="pic">
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
.treatmentDetail {
  margin: 50px auto;
}
.row {
  flex-wrap: wrap;
  margin: 10px 0;
}
.col {
  display: flex;
  padding: 0;
}
.col:nth-child(odd), .col:nth-child(odd) .pic{
  margin-right:10px;
}

.col:nth-child(even), .col:nth-child(even) .pic{
  margin-left: 10px;
}
.pic {
  width: 285px;
  height: 186px;
  border-radius: 10px;
}

.title{
  font-size: 20px;
  font-weight: 500;
  line-height: 1.45;
  color: #646464;
  text-align: left;
  margin-bottom: 10px;
}
.info {
  text-align: left;
  font-size: 16px;
  color: #646464;
  line-height: 1.5;
  letter-spacing: 0.8px;
  font-weight: 300;
  margin-bottom: 25px;
}
.detail {
  text-align: right;
}
.more {
  font-size: 11px;
  font-weight: 500;
  line-height: 1.55;
  color: #639cb9;
  position: relative;
  text-align: right;
  border-bottom: 1px solid #639cb9;
  width: 70%;
  margin-left: 58px;
}
.more .decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0;
  width: 35px;
  border-bottom: solid 6px #639cb9;
}
</style>
