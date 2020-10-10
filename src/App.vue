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
#app {
  margin: 0 auto;
  text-decoration: none;
}
</style>
