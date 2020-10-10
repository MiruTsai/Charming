<template>
  <b-container class="treatmentDetail">
    <b-row>
      <b-col class="type1">
        <img src="" alt="" class="pic">
        <div class="detail">
          <h2 class="title">診療項目</h2>
          <div class="info">簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</div>
        </div>
      </b-col>
      <b-col class="type2">
        <div class="detail">
          <h2 class="title">診療項目</h2>
          <div class="info">簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</div>
        </div>
        <img src="" alt="" class="pic">
      </b-col>
    </b-row>
    <b-row>
      <b-col class="type1">
        <img src="" alt="" class="pic">
        <div class="detail">
          <h2 class="title">診療項目</h2>
          <div class="info">簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</div>
        </div>
      </b-col>
      <b-col class="type2">
        <div class="detail">
          <h2 class="title">診療項目</h2>
          <div class="info">簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介</div>
        </div>
        <img src="" alt="" class="pic">
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
  background-color: orange;
}

</style>
