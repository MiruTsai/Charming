<template>
  <b-breadcrumb :items="nav"></b-breadcrumb>
</template>
<script>
export default {
  props: ['nav'],
  data () {
    return {}
  }
}
</script>
<style scoped>
.breadcrumb {
  width: 100%;
  background-color: transparent;
  padding: 0;
  margin: 30px 0;
  color: #aaaaaa;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
  margin: 0 20px;
}
.breadcrumb a {
  color: #aaaaaa;
}
.breadcrumb-item.active
{
  color: #aaaaaa;
}
</style>
