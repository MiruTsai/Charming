<template>
  <b-container class="article">
    <div class="content">
      <div class="time">{{article.time}}</div>
      <img :src="article.img" alt="" class="pic">
      <div class="title">{{article.title}}</div>
      <div class="author">{{article.author}}</div>
      <div class="articleData" v-html="article.article"></div>
    </div>
  </b-container>
</template>
<script>
export default {
  props: ['article'],
  data () {
    return {}
  }
}
</script>
<style scoped>
.article {
  border-radius: 10px;
  background-color: #eae8e440;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
}
.content {
  width: 70%;
  margin: 30px 0;
}
.time {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #bfb7ac;
}
.pic {
  width: 100%;
}
.title {
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1.2px;
  color: #727272;
  margin: 10px 0;
}
.author {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.45;
  color: #639cb9;
  border-bottom: 1px solid #e8e8e8;
  width: 95%;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.articleData {
  color: #727272;
  line-height: 1.5;
  letter-spacing: 0.9px;
  font-size: 18px;
  font-weight: 300;
}
</style>
