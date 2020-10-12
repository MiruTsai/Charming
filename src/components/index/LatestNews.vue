<template>
  <b-container class="latestNews">
      <div class="title">最新消息<span class="decoration"></span></div>
      <b-row>
        <b-col>
          <b-card
            title="Card Title"
            img-src="/static/images/Mask_Group_253.png"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="/static/images/Mask_Group_254.png"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="/static/images/Mask_Group_255.png"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.latestNews {
  margin-top: -170px;
  margin-bottom: 70px;
}
.title {
  color: #fff;
  position: relative;
  width: 15%;
  border-bottom: 1px solid #639cb9;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.46;
  margin-bottom: 40px;
}
.decoration {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 0;
  width: 35px;
  border-bottom: solid 6px#639cb9;
}
article {
  border-radius: 10px;
}
.card-img-top {
  border-radius: 10px 10px 0 0;
}

</style>
