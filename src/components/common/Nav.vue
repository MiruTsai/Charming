<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          text: '首頁',
          href: '#'
        },
        {
          text: '關於碩美',
          href: '#'
        },
        {
          text: '醫療團隊',
          active: true
        }
      ]
    }
  }
}
</script>
<style scoped>
.breadcrumb {
  width: 100%;
  background-color: transparent;
  padding: 0;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}
</style>
