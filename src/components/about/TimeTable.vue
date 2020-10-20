<template>
  <div class="timeTable">
    <div class="titleBar">
      <span class="empty"></span>
      <span class="weekday">星期一</span>
      <span class="weekday">星期二</span>
      <span class="weekday">星期三</span>
      <span class="weekday">星期四</span>
      <span class="weekday">星期五</span>
      <span class="weekday">星期六</span>
    </div>
    <ul class="dayTime">
      <li class="list"><div class="time"><span>上午</span><span>09:00 - 12:00</span></div><span id="1m"></span><span id="2m"></span><span id="3m"></span><span id="4m"></span><span id="5m"></span><span id="6m"></span></li>
      <li class="list"><div class="time"><span>下午</span><span>14:00 - 17:30</span></div><span id="1a"></span><span id="2a"></span><span id="3a"></span><span id="4a"></span><span id="5a"></span><span id="6a"></span></li>
      <li class="list"><div class="time"><span>晚上</span><span>06:00 - 21:00</span></div><span id="1e"></span><span id="2e"></span><span id="3e"></span><span id="4e"></span><span id="5e"></span><span id="6e"></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avalibleTime: ['1m', '2m', '3m', '3a', '4a', '4e'],
      doctorName: '張杏如醫師'
    }
  },
  mounted () {
    this.fillSchedule()
  },
  methods: {
    fillSchedule () {
      this.avalibleTime.forEach(time => {
        document.getElementById(time).textContent = this.doctorName
      })
    }
  }
}
</script>
<style scoped>

.titleBar {
  background-color: #eae8e4;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  border: solid 1px #bfb7ac;
  padding: 10px 0;
}
.empty {
  flex-basis: 28%;
}

.weekday {
  flex-basis: 12%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.8px;
  color: #b1a390;
}
.dayTime {
  display: flex;
  flex-direction: column;
  padding-left: 0;
}
.dayTime .list {
  display: flex;
  border: solid 1px #bfb7ac;
}
.dayTime span {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.9px;
  color: #535353;
  flex-basis: 12%;
  border-left: solid 1px #bfb7ac;
  border-right: solid 1px #bfb7ac;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dayTime .time {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 28%;
  background-color: #f5f5f5;
  padding-left: 0;
  padding: 5px 0;
}
.dayTime .list span:last-child {
  border-right: none;
}
.dayTime .list:last-child{
  border-radius: 0 0 10px 10px;
}
.dayTime .list:last-child .time {
  border-radius: 0 0 10px 10px;
}
.dayTime .time span {
  border: none;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.8px;
  color: #b1a390;
}

</style>
