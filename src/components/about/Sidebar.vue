<template>
  <div class="sidebar">
    <div class="box">
      <div class="title">
        <img src="/static/images/ic-about1.png" alt="" class="pic" />
        <span class="desc">關於碩美</span>
      </div>
    </div>
    <div class="box">
      <div class="title">
        <img src="/static/images/ic-about2.png" alt="" class="pic" />
        <button class="btn collapsed" v-b-toggle.collapse-1>醫療團隊</button>
      </div>
      <b-collapse id="collapse-1">
        <ul>
          <li><span>—</span>張杏茹醫師</li>
          <li><span>—</span>張杏茹醫師</li>
          <li><span>—</span>張杏茹醫師</li>
          <li><span>—</span>張杏茹醫師</li>
          <li><span>—</span>張杏茹醫師</li>
          <li><span>—</span>張杏茹醫師</li>
          <li><span>—</span>張杏茹醫師</li>
        </ul>
      </b-collapse>
    </div>
    <div class="box">
      <div class="title">
        <img src="/static/images/ic-about3.png" alt="" class="pic" />
        <button class="btn collapsed" v-b-toggle.collapse-2>診所環境設備</button>
      </div>
      <b-collapse id="collapse-2" class="mt-2">
        <ul>
          <li><a href="#digital"><span>—</span>數位診療設備</a></li>
          <li><a href="#prevention"><span>—</span>防疫、消毒設備</a></li>
          <li><a href="#environment"><span>—</span>舒適診療環境</a></li>
        </ul>
      </b-collapse>
    </div>
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
.desc {
  padding-left: 0.75rem;
}
.sidebar {
  background-color: #eae8e4;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding:30px;
}
ul {
  padding: 0;
  color: #727272;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
ul li {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  margin: 5px 0;
}
ul li:hover{
  color: #6799ba;
}
.box {
  margin: 10px 0;
}
.btn:focus{
  color: #6799ba;
  box-shadow: none;
}
</style>
