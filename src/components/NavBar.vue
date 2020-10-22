<template>
  <b-container fluid>
    <b-row>
      <b-col cols="5" class="brown">
        <router-link to="/" exact>
          <img src="/static/images/logo.png" alt="" class="logo">
        </router-link>
      </b-col>
      <b-col cols="7">
        <b-navbar toggleable="lg">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item><router-link to="/about" exact>關於碩美</router-link><span class="decoration"></span></b-nav-item>
              <b-nav-item><router-link to="/diagnosis" exact>診療項目</router-link><span class="decoration"></span></b-nav-item>
              <b-nav-item><router-link to="/encyclopedia" exact>牙醫百科</router-link><span class="decoration"></span></b-nav-item>
              <b-nav-item><router-link to="/location" exact>診所資訊</router-link><span class="decoration"></span></b-nav-item>
              <b-nav-item><router-link to="/contact" exact>諮詢顧問</router-link><span class="decoration"></span></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
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
  position: relative;
  z-index: 100;
  background-color: #fff;
}
.navbar-collapse {
  justify-content: flex-end;
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

a.router-link-active {
  border-top: 1px solid #6799ba;
  color: #6799ba;
}
.nav-item {
  position: relative;
}
.decoration {
  display: none;
}
a.router-link-active + .decoration {
  position: absolute;
  top: 0;
  right: 13px;
  height: 0;
  width: 25px;
  border-bottom: solid 8px #639cb9;
  display: block;
}
@media (max-width: 1200px){
  .nav-link {
    margin: 0 10px;
  }
}
</style>
