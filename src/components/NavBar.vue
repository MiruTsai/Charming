<template>
  <b-container fluid>
    <b-row>
      <b-col cols="5" class="brown">
        <img src="/static/images/logo.png" alt="" class="logo">
      </b-col>
      <b-col cols="7">
        <b-navbar>
          <b-navbar-nav>
            <b-nav-item><router-link to="/about" exact>關於碩美</router-link></b-nav-item>
            <b-nav-item href="#">診療項目</b-nav-item>
            <b-nav-item href="#"><router-link to="/encyclopedia" exact>牙醫百科</router-link></b-nav-item>
            <b-nav-item href="#">診所資訊</b-nav-item>
            <b-nav-item href="#">諮詢顧問</b-nav-item>
          </b-navbar-nav>
        </b-navbar>
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
.brown {
  background-color: #bfb7ac;
  padding: 0;

}
.navbar {
  justify-content: flex-end;
  height: 80px;
}
.nav-link {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #646464;
  margin: 0 30px;
}
.logo{
  height: 80px;
  background-color: #6799ba;
  padding: 10px 150px 10px 10px;
  line-height: 70px;
}
</style>
