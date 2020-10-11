<template>
  <div class="sidebar">
    <div class="box">
      <img src="" alt="" class="pic" />
      關於碩美
    </div>
    <div class="box">
      <button class="btn collapsed" v-b-toggle.collapse-1>醫療團隊</button>
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
      <button class="btn collapsed" v-b-toggle.collapse-2>診所環境設備</button>
      <b-collapse id="collapse-2" class="mt-2">
        <ul>
          <li><span>—</span>數位診療設備</li>
          <li><span>—</span>防疫、消毒設備</li>
          <li><span>—</span>舒適診療環境</li>
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
.sidebar {
  background-color: #eae8e4;
  width: 20%;
}
ul {
  padding: 0;
  color: #727272;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
ul li {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
}
ul li:hover{
  color: #6799ba;
}
.box {
  margin: 10px auto;
}
.btn:focus{
  color: #6799ba;
  box-shadow: none;
}
</style>
