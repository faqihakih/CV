<template>
  <div class="Product" id="produk">
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
      <div class="wave">
        <!-- <b-img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhLS0gR2VuZXJhdG9yOiBHcmF2%0D%0AaXQuaW8gLS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xh%0D%0AdGUiIHZpZXdCb3g9IjUyOC45MjMgMzIwMiA3NTAuMDc3IDQyNC4zMiIgd2lkdGg9Ijc1MC4wNzci%0D%0AIGhlaWdodD0iNDI0LjMyIj48ZyBpZD0iR2Vsb21iYW5nIDUiPjxnIG9wYWNpdHk9IjAuMiI+PGxp%0D%0AbmVhckdyYWRpZW50IGlkPSJfbGdyYWRpZW50XzIiIHgxPSIxMDQuMDk0OTUxNzE2MDg2MDclIiB5%0D%0AMT0iLTExNC44NzMyNjA3MzczMjk0NSUiIHgyPSIzNy40MjQyMzc4MzM3OTQ0MzYlIiB5Mj0iMTEy%0D%0ALjQ5MTk1NzcyNTY1MTE5JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1vcGFjaXR5PSIxIiBzdHls%0D%0AZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI1NSwyNTUpIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9w%0D%0ALW9wYWNpdHk9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigyMywyMywyOSkiLz48L2xpbmVhckdy%0D%0AYWRpZW50PjxwYXRoIGQ9IiBNIDEyNzkgMzU4OS43NzYgQyAxMjc1LjcxNSAzNTkwLjQ5NiAxMjcy%0D%0ALjQyOSAzNTkxLjM3NiAxMjY5LjE0MyAzNTkyLjMzOCBDIDEwOTAuMzUyIDM2NDQuNzI2IDEwMDQu%0D%0AOTY5IDM2MzMuNjYzIDkwMy45ODEgMzU3OC44NzggQyA4MDIuOTk0IDM1MjQuMDkzIDcwMS42NzEg%0D%0AMzQwMC4yMDggNjc4LjY1IDMzMTcuMDc3IEMgNjcwLjMxMyAzMjg2Ljk3NSA2NTkuMDQ4IDMyNDUu%0D%0AMDQ3IDY0NC41MDcgMzIwMiBMIDc0Ni44NDQgMzIwMiBMIDc0Ni44NDQgMzIwMiBDIDgwMS43MDIg%0D%0AMzI5NS42OTUgODcwLjMzNSAzMzkzLjI1NCA5OTkuNjg4IDM0MDUuNTMzIEMgMTEzMC4zNDkgMzQx%0D%0ANy45MzcgMTIwMi4zMTggMzQxMS40NzUgMTI3OSAzNDM5Ljc2NCBMIDEyNzkgMzU4OS43NzYgWiAi%0D%0AIGZpbGw9InVybCgjX2xncmFkaWVudF8yKSIvPjwvZz48ZyBvcGFjaXR5PSIwLjIiPjxsaW5lYXJH%0D%0AcmFkaWVudCBpZD0iX2xncmFkaWVudF8zIiB4MT0iMTA0LjA5NDk1MTcxNjA4NjA3JSIgeTE9Ii0x%0D%0AMTQuODczMjYwNzM3MzI5NDUlIiB4Mj0iMzcuNDI0MjM3ODMzNzk0NDM2JSIgeTI9IjExMi40OTE5%0D%0ANTc3MjU2NTExOSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0%0D%0Ab3AtY29sb3I6cmdiKDI1NSwyNTUsMjU1KSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1vcGFj%0D%0AaXR5PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjMsMjMsMjkpIi8+PC9saW5lYXJHcmFkaWVu%0D%0AdD48cGF0aCBkPSIgTSAxMjc5IDM0NjEuMDEzIEMgMTI0Ny44NTUgMzQ2MS4yNDggMTIxNy4yMzkg%0D%0AMzQ2OS40NTEgMTE4Ny4xNDYgMzQ4NS41MzcgQyAxMDA4LjcyMyAzNTgwLjkwOCA5MjAuNjc0IDM1%0D%0AODUuOTg2IDgxMy4yNTEgMzU0NS4yMjQgQyA3MDUuODI4IDM1MDQuNDYxIDU5Mi42MjIgMzM4Ni4y%0D%0ANjggNTYyLjU3MiAzMjk3Ljc0OCBDIDU1My44MTEgMzI3MS45NDEgNTQyLjUwOSAzMjM3LjkyNyA1%0D%0AMjguOTIzIDMyMDIgTCA2NTYuODA2IDMyMDIgTCA2NTYuODA2IDMyMDIgQyA3MTQuNDYyIDMyNzcu%0D%0ANzc4IDc4Ni44MjMgMzM0MS43NzMgODk3LjMyMSAzMzMxLjIwOSBDIDEwNjUuNjQ2IDMzMTUuMTE2%0D%0AIDExMzcuNjIyIDMyODQuNjg1IDEyNDguNzY5IDMzMzIuNTg3IEMgMTI1OS4wODcgMzMzNy4wMzQg%0D%0AMTI2OS4yMDggMzM0MS4zNTYgMTI3OSAzMzQ1LjU0OCBMIDEyNzkgMzQ2MS4wMTMgWiAiIGZpbGw9%0D%0AInVybCgjX2xncmFkaWVudF8zKSIvPjwvZz48L2c+PC9zdmc+"></b-img> -->
      </div>
      <b-carousel-slide
        img-blank
        background="#1B1A1F"
       
      >
        <b-card-group class="deck row" >
          <div class="col-6">
            <b-img
              class="full"
              click="fullWidthImage = !fullWidthImage"
              fluid
              alt="Product"
            ></b-img>
          </div>
          <div class="col-6">
            <div class="deskripsi">
              <!-- <p v-if="!readMoreActivated">{{pro.deskripsi}}</p> -->
              <b-button
                variant="outline-primary"
                class="tombol"
                v-if="!readMoreActivated"
                @click="activateReadMore"
                href="/detail"
              >Read More</b-button>
              <p v-if="readMoreActivated" v-html="longText"></p>
            </div>
          </div>
        </b-card-group>
      </b-carousel-slide>
    </b-carousel>
    <!-- <detail/> -->
  </div>
</template>

<script>
// import detail from '../views/detail'
// import axios from "axios";

export default {
  name: "Produk",
  props: {
    msg: String
  },
  // components:{
  //   detail
  // },
  data() {
    return {
      slide: 0,
      readMoreActivated: false,
      products: [],
      imgProduct: ''
    };
  },
  methods: {
    activateReadMore() {
      this.readMoreActivated = true;
    },
    // created() {
    //   axios
    //     .get("http://192.168.18.45:8000/api/product")
    //     .then(response => {
    //       this.products = response.data.results;
    //       // console.log(this.products);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
  },
  // mounted() {
  //   this.created()
  //   this.imgProduct = "http://192.168.18.45:8000/"          
  // }
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
.wave{
  margin-top : -155px;
  margin-left : 600px;
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
  .deck img {
    /* padding-top: 10px; */
    margin-top: 40px;
  }
  .teks {
    /* padding-top: -50px; */
    margin-top: -30px;
    margin-bottom: 30px;
    color: white;
  }
  .tombol {
    margin-top: -70px;
    /* padding-top: 20px; */
    font-size: 12px;
  }
  .deskripsi p {
    padding-top: -50px;
    text-align: left;
  }
  .wave{
        display: none;
    }
}
</style>