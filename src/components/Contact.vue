<template>
<b-container>
  <v-nav :nav="nav" />
  <div class="title">諮詢顧問<span class="decoration"></span></div>
  <b-container class="main">
    <img src="/static/images/Mask_Group_273.png" alt="" class="pic">
    <div class="right">
      <div class="highlight">Dear Patients:</div>
      <div class="text">請留下聯絡資訊及您的問題,櫃檯將盡速與您聯絡</div>
      <div class="desc">詢問項目</div>
      <select name="option" id="option">
        <option value=""></option>
      </select>
      <div class="desc">姓名</div>
      <input type="text" class="name">
      <div class="desc">電話</div>
      <input type="text" class="phone">
      <div class="desc">Email</div>
      <input type="email" class="email">
      <div class="desc">內容</div>
      <textarea name="message" id="" cols="30" rows="10"></textarea>
      <button>送出</button>
    </div>
  </b-container>
</b-container>
</template>
<script>
import nav from './common/Nav'
export default {
  components: {
    'v-nav': nav
  },
  data () {
    return {
      nav: [
        {
          text: '首頁',
          href: '/'
        },
        {
          text: '聯絡我們',
          href: '#'
        }
      ]
    }
  }
}
</script>
<style scoped>
.title {
  border-bottom: 1px solid#639cb9;
  position: relative;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.46;
  color: #646464;
  width: 13%;
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
.pic {
  position: absolute;
  left: -120px;
  bottom: 79px;
}
.main {
  border-radius: 10px;
  background-color: #eae8e440;
  display: flex;
  justify-content: space-around;
  position: relative;
  padding-top: 30px;
  padding-bottom: 70px;
}
.right {
  margin-left: 470px;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
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
select {
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
  background: url("/static/images/dropdown.png") no-repeat right center transparent;
}
select, input, textarea {
  border-radius: 5px;
  border: solid 1px #efedeb;
  background-color: #ffffff;
  width: 90%;
  padding: 5px;
}
button {
  width: 90%;
  border-radius: 5px;
  background-color: #6799ba;
  outline: none;
  border: none;
  color: #fff;
  margin-top: 18px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.45;
  padding: 10px 0;
}
</style>
