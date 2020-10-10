<template>
  <b-container class="about">
    <img src="" alt="" class="banner">
    <main>
      <side-bar />
      <b-breadcrumb :items="items"></b-breadcrumb>
    </main>
  </b-container>
</template>

<script>
import sideBar from './about/SideBar'
export default {
  components: {
    'side-bar': sideBar
  },
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
.banner {
  height: 349.6px;
  width: 1200px;
  background-color: yellow;
  margin: 30px auto;
}
main {
  display: flex;
}
</style>
