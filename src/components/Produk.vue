<template>
  <div class="Product">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#1B1A1F"
      img-width="1024"
      img-height="350"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <div class="container teks">
        <h1>Produk</h1>
      </div>
      <b-carousel-slide img-blank background="#1B1A1F">
        <b-card-group class="deck row">
          <div class="col-6">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="/assets/logo.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-6">
            <div class="deskripsi">
              <p v-if="!readMoreActivated">{{longText.slice(0, 80)}}</p>
              <b-button variant="outline-primary" class="tombol" v-if="!readMoreActivated" @click="activateReadMore" href="#">Read More</b-button>
              <p v-if="readMoreActivated" v-html="longText"></p>
            </div>
          </div>
        </b-card-group>
      </b-carousel-slide>
      <b-carousel-slide img-blank background="#1B1A1F">
        <b-card-group class="deck row">
          <div class="col-6">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="/assets/logo.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-6">
            <div class="deskripsi">
              <p v-if="!readMoreActivated">{{longText.slice(0, 60)}}</p>
              <b-button variant="outline-primary" class="tombol" v-if="!readMoreActivated" @click="activateReadMore" href="#">Read More</b-button>
              <p v-if="readMoreActivated" v-html="longText"></p>
            </div>
          </div>
        </b-card-group>
      </b-carousel-slide>
      <b-carousel-slide img-blank background="#1B1A1F">
        <b-card-group class="deck row">
          <div class="col-6">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="/assets/logo.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-6">
            <div class="deskripsi">
              <p v-if="!readMoreActivated">{{longText.slice(0, 60)}}</p>
              <b-button variant="outline-primary" class="tombol" v-if="!readMoreActivated" @click="activateReadMore" href="#">Read More</b-button>
              <p v-if="readMoreActivated" v-html="longText"></p>
            </div>
          </div>
        </b-card-group>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
// import detail from '../views/detail'

export default {
  name: "Produk",
  props: {
    msg: String
  },
  data(){
        return {
            slide: 0,
            longText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cupiditate?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cupiditate?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cupiditate?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cupiditate?`,
            readMoreActivated: false
        }
    },
    methods: {
        activateReadMore(){
            this.readMoreActivated = true;
        },
    }
};
</script>

<style  scoped>
@font-face {
  font-family: "Gilroy-Light";
  src: url("/assets/Gilroy-Light.otf");
}
@font-face {
  font-family: "Gilroy-Bold";
  src: url("/assets/Gilroy-ExtraBold.otf");
}
.deck {
  padding-bottom: 150px;
}
.deskripsi {
  color: white;
  font-family: "Gilroy-Light", sans-serif;
}
.teks {
  padding-top: 50px;
  margin-top: 50px;
  color: white;
  font-family: "Gilroy-Bold", sans-serif;
}
/* Mobile Css */
@media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
    padding-bottom: 40px;
    height: 100%;
  }
  .deck {
    /* padding-top: 10px; */
    margin-bottom: -270px;
  }
  .deck img{
    /* padding-top: 10px; */
    margin-top: 40px;
  }
  .teks {
    /* padding-top: -50px; */
    margin-top: -30px;
    margin-bottom: 30px;
    color: white;
  }
  .tombol{
      margin-top: -70px;
      /* padding-top: 20px; */
      font-size: 12px;
  }
  .deskripsi p{
      padding-top: -50px;
      text-align: left;
  }
}
</style>