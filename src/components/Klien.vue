<template>
  <div class="Client">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide img-blank img-blank-color="#232428">
       <div class="teks">
            <h1>Tim</h1>
        </div>
        <b-card-group class="deck">
        <div class="responsif">
            <img src="/assets/logo.png" alt="Photos" style="float:left"> 
        </div>
        <div class="text">
            <h3>Dhiya</h3> <h5>Reksa</h5> <p>CEO</p>
        </div>
                <div class="responsif">
            <img src="/assets/logo.png" alt="Photos" style="float:left"> 
        </div>
        <div class="text">
            <h3>Izzatur</h3> <h5>Royhan</h5> <p>Backend</p>
        </div>
                <div class="responsif">
            <img src="/assets/logo.png" alt="Photos" style="float:left"> 
        </div>
        <div class="text">
            <h3>Preiyudha</h3> <h5>Akadita</h5> <p>Mobile Dev</p>
        </div>
          </b-card-group>
          <b-card-group class="deck">
        <div class="responsif">
            <img src="/assets/logo.png" alt="Photos" style="float:left"> 
        </div>
        <div class="text">
            <h3>Nurul</h3> <h5>Chotimah</h5> <p>Backend</p>
        </div>
                <div class="responsif">
            <img src="/assets/logo.png" alt="Photos" style="float:left"> 
        </div>
        <div class="text">
            <h3>Faqih</h3> <h5>Zada</h5> <p>Web Dev</p>
        </div>
          </b-card-group>
      </b-carousel-slide>
      <!-- Text slides with image -->
      <b-carousel-slide img-blank img-blank-color="#232428"
      ><div class="teks">
            <h1>Tim</h1>
        </div>
        </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-blank img-blank-color="#232428">
        <h1>Hello world!</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    }
  }
</script>

<style scoped>
@font-face {
    font-family: "Gilroy-Bold";
    src: url('/assets/Gilroy-ExtraBold.otf');
    }
.Client{
    margin-top: -45px;
    /* padding-left: 50px; */
    background-color: #232428;
    /* height: max-content; */
    padding-bottom: 10px;
    font-family: 'Gilroy-Bold', sans-serif;
}


@media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
    /* padding-left: -20px; */
    /* margin-left: 20px !important; */
    }

}
</style>