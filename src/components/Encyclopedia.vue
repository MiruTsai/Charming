<template>
  <b-container>
    <v-nav :nav="nav" />
    <div class="classify">
      <div class="title">牙醫百科</div>
      <div class="searchBox">
          <input type="text" class="search" placeholder="請輸入關鍵字" />
          <b-icon-search />
          <button class="btn">搜尋</button>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
      <b-tabs content-class="mt-3">
        <b-tab title="全部分類"> </b-tab>
        <b-tab title="分類一">
          <doctor-column />
          <doctor-column />
          <doctor-column />
        </b-tab>
        <b-tab title="分類二"></b-tab>
        <b-tab title="分類三"></b-tab>
        <b-tab title="分類四"></b-tab>
        <b-tab title="分類五"></b-tab>
        <b-tab title="分類六"></b-tab>
        <b-tab title="分類七"></b-tab>
      </b-tabs>
    </div>
  </b-container>
</template>
<script>
import nav from './common/Nav'
import doctorColumn from './common/DoctorColumn'
export default {
  components: {
    'v-nav': nav,
    'doctor-column': doctorColumn
  },
  data () {
    return {
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      nav: [
        {
          text: '首頁',
          href: '/'
        },
        {
          text: '牙醫百科',
          href: '#'
        }
      ]
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 26px;
  font-weight: 500;
  line-height: 1.46;
  color: #646464;
  margin: 20px auto;
}
.nav-tabs .nav-link {
  border: none;
}
.nav-tabs .nav-link.active {
  border: none;
  color: #6799ba;
}
.searchBox {
  position: relative;
}
.search {
  position: relative;
  width: 60%;
  opacity: 0.42;
  border-radius: 5px;
  border: solid 1px #bfb7ac;
  background-color: #ffffff;
  padding: 5px;
}
.bi-search {
  position: absolute;
  left: 58%;
  top: 7px;
  color: #bebebe;
}
</style>
