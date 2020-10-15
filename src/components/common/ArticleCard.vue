<template>
  <b-card
    :img-src="blog.img"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
  >
  <div class="top">
    <div class="time">{{blog.time}}</div>
    <div class="author">{{blog.author}}</div>
  </div>
    <b-card-text>
      {{blog.title}}
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  props: ['blog'],
  data () {
    return {}
  }
}
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author {
  color: #639cb9;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}
.time {
  color: #bfb7ac;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}
.card-text {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.9px;
  color: #727272;
  margin-top: 10px;
}
</style>
