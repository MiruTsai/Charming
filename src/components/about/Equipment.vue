<template>
  <div class="box">
    <img :src="equip.img" alt="" class="pic">
    <div>
      <h6 class="articleTitle">{{equip.title}}</h6>
      <p class="article" v-html="equip.article"></p>
    </div>
</div>
</template>
<script>
export default {
  props: ['equip'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.box {
  border-radius: 10px;
  background-color: #eae8e440;
  padding: 35px;
  display: flex;
  margin: 15px 0;
}
.box img{
  flex-basis: 30%;
  margin-right: 20px;
}
.articleTitle {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #bfb7ac;
}
.article {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.9px;
  color: #646464;
}
</style>
