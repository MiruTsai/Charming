<template>
  <div id="app">
    <v-navbar />
    <router-view/>
    <v-footer />
  </div>
</template>

<script>
import navBar from './components/NavBar'
import footer from './components/Footer'

export default {
  components: {
    'v-navbar': navBar,
    'v-footer': footer
  },
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: NotoSansCJKtc;
  src: url('../static/fonts/NotoSansCJKtc-Regular.otf');
}
@font-face {
  font-family: HelveticaNeueLTStd-BdCnO;
  src: url('../static/fonts/helveticaneue/HelveticaNeueBd.ttf');
}
@font-face {
  font-family: HelveticaNeueLTStd-MdCn;
  src: url('../static/fonts/helveticaneue/HelveticaNeueMed.ttf');
}
@font-face {
  font-family: HelveticaNeue;
  src: url('../static/fonts/helveticaneue/HelveticaNeue.ttf');
}
#app {
  margin: 0 auto;
  text-decoration: none;
  font-family: NotoSansCJKtc;
  position: relative;
}
ul {
  list-style: none;
}

.brown {
  background-color: #bfb7ac;
}
</style>
