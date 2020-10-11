<template>
  <div class="drGroup">
      <b-row>
        <b-col>
          <h2 class="title">醫師陣容</h2>
          <ul class="drLists">
            <li class="drList"><img src="/static/images/Group_3943.png" class="drPic"><span class="name">周裕人醫師</span></li>
            <li class="drList"><img src="/static/images/Group_3943.png" class="drPic"><span class="name">王俊程醫師</span></li>
            <li class="drList"><img src="/static/images/Group_3943.png" class="drPic"><span class="name">張杏茹醫師</span></li>
            <li class="drList"><img src="/static/images/Group_3943.png" class="drPic"><span class="name">曾筱婷醫師</span></li>
            <li class="drList"><img src="/static/images/Group_3943.png" class="drPic"><span class="name">周佳琳醫師</span></li>
            <li class="drList"><img src="/static/images/Group_3943.png" class="drPic"><span class="name">汪文琲醫師</span></li>
            <li class="drList"><img src="/static/images/Group_3943.png" class="drPic"><span class="name">林宗佑醫師</span></li>
          </ul>
        </b-col>
        <b-col class="drInfo">
          <h2 class="name">張 杏 茹  醫 師</h2>
          <div class="experience">
            <div class="list">臺大牙醫學系畢業</div>
            <div class="list">臺大醫學補綴科及牙體復形科專科醫師訓練</div>
            <div class="list">臺大醫院兼任主治醫師</div>
            <div class="list">中華民國膺復學專科會員</div>
            <div class="list">臺大醫院牙科部總醫師</div>
            <div class="list">臺大醫院補綴科及牙體復形科總醫師</div>
          </div>
          <div class="time">
            <div class="text">門診時間：</div>
            <div class="text">週一至週五 14:00 - 18:00</div>
          </div>
        </b-col>
        <img src="/static/images/hiclipart.com-1.png" alt="" class="pic">
      </b-row>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
.drGroup {
  width: 90%;
  height: 516px;
  background-color: #eae8e4;
  margin: 60px 0;
  display: flex;
  align-items: center;
  position: relative;
}
.drGroup .row {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
ul {
  margin: 0;
  padding: 0;
}
h2 {
  margin: 10px 0;
  width: 35%;
  padding: 10px 0;
  border-bottom: 1px solid #fff;
}
h2.title {
  border-bottom: 1px solid#639cb9;
}
.drLists {
  display: flex;
  flex-wrap: wrap;
}
.drList {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 45%;
  border-radius: 5px;
  border: solid 1.5px #bfb7ac;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.28;
  color: #bfb7ac;
  padding: 10px;
  margin: 7px;
}
.drList:hover{
  background-color: #639cb9;
  color: #fff;
}
.drPic {
  width: 52px;
  height: 52px;
  border-radius: 52px;
}
.drInfo {
  width: 590px;
  height: 396px;
  background-color: #639cb9;
  color: #fff;
}
.list, .text {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.8px;
}
.experience {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.drGroup .pic {
  position: absolute;
  bottom: 0;
  right: 20px;
}
</style>
