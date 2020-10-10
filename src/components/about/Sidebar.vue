<template>
  <div class="sidebar">
    <div class="box">
      <img src="" alt="" class="pic" />
      關於碩美
    </div>
    <div class="box">
      <b-button v-b-toggle.collapse-1>醫療團隊</b-button>
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
      <b-button v-b-toggle.collapse-2 variant="primary">醫療團隊</b-button>
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
ul {
  padding: 0;
}
</style>
