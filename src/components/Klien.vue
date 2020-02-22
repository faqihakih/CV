<template>
  <div class="Client">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#232428"
      img-width="1024"
      img-height="350"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <div class="container teks">
        <h1>Klien</h1>
      </div>
      <b-carousel-slide img-blank background="#232428" class="Slider">
        <b-card-group class="deck row">
          <div class="col-3">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="/assets/logo.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="/assets/logo.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="/assets/logo.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="/assets/logo.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
        </b-card-group>
      </b-carousel-slide>
      <b-carousel-slide img-blank background="#232428" class="Slider">
        <b-card-group class="deck row">
          <div class="col-3">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="/assets/logo.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="/assets/logo.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="/assets/logo.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="/assets/logo.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
        </b-card-group>
      </b-carousel-slide>
      <b-carousel-slide img-blank background="#232428" class="Slider">
        <b-card-group class="deck row">
          <div class="col-3">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="/assets/logo.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="/assets/logo.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="/assets/logo.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="/assets/logo.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
        </b-card-group>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Klient",
  props: {
    msg: String
  },
  data(){
        return {
            slide: 0,
        }
    }
};
</script>

<style scoped>
@font-face {
  font-family: "Gilroy-Bold";
  src: url("/assets/Gilroy-ExtraBold.otf");
}
.Client {
  margin-top: -45px;
  font-family: "Gilroy-Bold", sans-serif;
}
.deck {
  padding-bottom: 150px;
}
.teks {
  padding-top: 50px;
  margin-top: 50px;
  color: white;
}
@media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
  }
  .deck {
    padding-top: 10px;
    margin-bottom: -100px;
  }
  .teks {
  /* padding-top: -50px; */
  margin-top: -20px;
  margin-bottom: 30px;
  color: white;
}
}
</style>