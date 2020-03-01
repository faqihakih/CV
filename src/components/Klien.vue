<template>
  <div class="Client" id="client">
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
      <div class="wave">
        <b-img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhLS0gR2VuZXJhdG9yOiBHcmF2%0D%0AaXQuaW8gLS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xh%0D%0AdGUiIHZpZXdCb3g9IjU3OS4yNzggMjQwMCA3MDAuNzIyIDI5OS4yNCIgd2lkdGg9IjcwMi4zOTki%0D%0AIGhlaWdodD0iMjY3LjYzMyI+PGcgaWQ9IkdlbG9tYmFuZyA0Ij48ZyBvcGFjaXR5PSIwLjIiPjxs%0D%0AaW5lYXJHcmFkaWVudCBpZD0iX2xncmFkaWVudF8yMCIgeDE9IjEwNC4wOTQ5NTE3MTYwODYwNyUi%0D%0AIHkxPSItMTE0Ljg3MzI2MDczNzMyOTQ1JSIgeDI9IjM3LjQyNDIzNzgzMzc5NDQzNiUiIHkyPSIx%0D%0AMTIuNDkxOTU3NzI1NjUxMTklIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLW9wYWNpdHk9IjEiIHN0%0D%0AeWxlPSJzdG9wLWNvbG9yOnJnYigyNTUsMjU1LDI1NSkiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0%0D%0Ab3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDIzLDIzLDI5KSIvPjwvbGluZWFy%0D%0AR3JhZGllbnQ+PHBhdGggZD0iIE0gMTI4MCAyNTQxLjkyNCBDIDExOTUuMzE5IDI0OTMuMTMxIDEx%0D%0AMjIuMDU4IDI0OTcuMTg1IDk3Ny4xNzEgMjQ3MS44MzEgQyA5MTkuMjM5IDI0NjEuNjkzIDg3NS4w%0D%0AODEgMjQzNS4xMTUgODM5LjY5OSAyNDAwIEwgNjc2LjU2NyAyNDAwIEMgNzA4LjQyMSAyNDgxLjU3%0D%0ANCA3ODYuNDU2IDI1ODQuMTA4IDg2OC4xNSAyNjM3LjEyNSBDIDk2NC41MjQgMjY5OS42NyAxMDQ4%0D%0ALjc3NSAyNzE3LjQwMyAxMjMxLjEyNyAyNjc5LjIxNSBDIDEyNDcuNTg2IDI2NzUuNzY4IDEyNjMu%0D%0AODc4IDI2NzQuMzI1IDEyODAgMjY3NC45MzEgTCAxMjgwIDI1NDEuOTI0IFogIiBmaWxsPSJ1cmwo%0D%0AI19sZ3JhZGllbnRfMjApIi8+PC9nPjxnIG9wYWNpdHk9IjAuMiI+PGxpbmVhckdyYWRpZW50IGlk%0D%0APSJfbGdyYWRpZW50XzIxIiB4MT0iMTA0LjA5NDk1MTcxNjA4NjA3JSIgeTE9Ii0xMTQuODczMjYw%0D%0ANzM3MzI5NDUlIiB4Mj0iMzcuNDI0MjM3ODMzNzk0NDM2JSIgeTI9IjExMi40OTE5NTc3MjU2NTEx%0D%0AOSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6%0D%0AcmdiKDI1NSwyNTUsMjU1KSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1vcGFjaXR5PSIxIiBz%0D%0AdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjMsMjMsMjkpIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBk%0D%0APSIgTSAxMjgwIDI0NDQuMjcgQyAxMjY0LjQwMiAyNDM2LjA1OCAxMjQ4LjA3NCAyNDI3LjU2NSAx%0D%0AMjMxLjIxIDI0MTguNjY2IEMgMTIxNi43NyAyNDExLjA0NyAxMjAyLjkyOSAyNDA0LjkwNSAxMTg5%0D%0ALjM3NiAyNDAwIEwgNTc5LjI3OCAyNDAwIEMgNjIyLjYzNSAyNDc3LjA0MiA3MDEuMzk4IDI1NTku%0D%0AMTY0IDc4MC4zNDIgMjU5Ni40NTIgQyA4ODQuMjMzIDI2NDUuNTIyIDk3Mi40MDkgMjY0Ny4zNzMg%0D%0AMTE1Ny43NjkgMjU2Ni4zMDUgQyAxMTk4LjY4IDI1NDguNDEzIDEyMzkuNDI0IDI1NDQuMDQ2IDEy%0D%0AODAgMjU1My4yMzUgTCAxMjgwIDI0NDQuMjcgWiAiIGZpbGw9InVybCgjX2xncmFkaWVudF8yMSki%0D%0ALz48L2c+PC9nPjwvc3ZnPgo="></b-img>
    </div>
      <b-carousel-slide img-blank background="#232428" class="Slider">
        <b-card-group class="deck row">
          <div class="col-3">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="https://raw.githubusercontent.com/faqihakih/Img/master/acer.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="https://raw.githubusercontent.com/faqihakih/Img/master/gigabyte.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="https://raw.githubusercontent.com/faqihakih/Img/master/indosat.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="https://raw.githubusercontent.com/faqihakih/Img/master/intel.png"
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
              src="https://raw.githubusercontent.com/faqihakih/Img/master/nvida.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
            <b-img
              class="full"
              @click="fullWidthImage = !fullWidthImage"
              src="https://raw.githubusercontent.com/faqihakih/Img/master/telkom.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="https://raw.githubusercontent.com/faqihakih/Img/master/lenovo.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="https://raw.githubusercontent.com/faqihakih/Img/master/acer.png"
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
              src="https://raw.githubusercontent.com/faqihakih/Img/master/gigabyte.png"
              fluid
              alt="Klien"
            ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="https://raw.githubusercontent.com/faqihakih/Img/master/indosat.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="https://raw.githubusercontent.com/faqihakih/Img/master/intel.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
          <div class="col-3">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="https://raw.githubusercontent.com/faqihakih/Img/master/telkom.png"
                fluid
                alt="Klien"
              ></b-img>
          </div>
        </b-card-group>
      </b-carousel-slide>
    </b-carousel>
      <div class="wave1">
        <b-img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhLS0gR2VuZXJhdG9yOiBHcmF2%0D%0AaXQuaW8gLS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xh%0D%0AdGUiIHZpZXdCb3g9IjAgMjgzMS4xNzIgNzU1LjM4NCAzNjguODI4IiB3aWR0aD0iNzU1LjM4NCIg%0D%0AaGVpZ2h0PSIzNjguODI4Ij48ZyBpZD0iR2Vsb21iYW5nIDQiPjxnIG9wYWNpdHk9IjAuMiI+PGxp%0D%0AbmVhckdyYWRpZW50IGlkPSJfbGdyYWRpZW50XzAiIHgxPSIxMDQuMDk0OTUxNzE2MDg2MDclIiB5%0D%0AMT0iLTExNC44NzMyNjA3MzczMjk0NSUiIHgyPSIzNy40MjQyMzc4MzM3OTQ0MzYlIiB5Mj0iMTEy%0D%0ALjQ5MTk1NzcyNTY1MTE5JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1vcGFjaXR5PSIxIiBzdHls%0D%0AZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI1NSwyNTUpIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9w%0D%0ALW9wYWNpdHk9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigyMywyMywyOSkiLz48L2xpbmVhckdy%0D%0AYWRpZW50PjxwYXRoIGQ9IiBNIDY1MC4yNjggMzIwMCBDIDY0OS43NTIgMzE5Ni40NzggNjQ5LjI1%0D%0ANyAzMTkzLjEyOCA2NDguNzc5IDMxODkuOTA5IEMgNjM2LjA4OCAzMTA0LjU4OCA1NTAuNjYzIDI5%0D%0ANjkuMjUgNDU3LjEyOCAyOTAyLjUzNSBDIDM2My41OTIgMjgzNS44MiAyODAuMiAyODE0LjQwNiA5%0D%0ANi4zNDcgMjg0NC41NTMgQyA2My4yMTcgMjg0OS45ODUgMzEuMSAyODQ3LjQ2NiAwIDI4MzYuOTU1%0D%0AIEwgMCAyOTQ5LjU3MiBDIDMuODYxIDI5NTIuNTEzIDcuODUzIDI5NTUuNTg4IDExLjg3OSAyOTU4%0D%0ALjY5OCBDIDEwNy42NTcgMzAzMi42NzYgMTgwLjQxOCAzMDI3LjQ2NiAzNDAuOTU2IDMwNjIuODg1%0D%0AIEMgNDI2LjczOCAzMDgxLjgxMSA0ODAuMjExIDMxMzYuMDMyIDUxOS4xMTggMzIwMCBMIDY1MC4y%0D%0ANjggMzIwMCBaICIgZmlsbD0idXJsKCNfbGdyYWRpZW50XzApIi8+PC9nPjxnIG9wYWNpdHk9IjAu%0D%0AMiI+PGxpbmVhckdyYWRpZW50IGlkPSJfbGdyYWRpZW50XzEiIHgxPSIxMDQuMDk0OTUxNzE2MDg2%0D%0AMDclIiB5MT0iLTExNC44NzMyNjA3MzczMjk0NSUiIHgyPSIzNy40MjQyMzc4MzM3OTQ0MzYlIiB5%0D%0AMj0iMTEyLjQ5MTk1NzcyNTY1MTE5JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1vcGFjaXR5PSIx%0D%0AIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI1NSwyNTUpIi8+PHN0b3Agb2Zmc2V0PSIxMDAl%0D%0AIiBzdG9wLW9wYWNpdHk9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigyMywyMywyOSkiLz48L2xp%0D%0AbmVhckdyYWRpZW50PjxwYXRoIGQ9IiBNIDc1NS4zODQgMzIwMCBDIDcyNi41MTYgMzExMC43NDIg%0D%0ANjM2LjM1OSAyOTk2LjIwOSA1NDMuMDY1IDI5NDcuMDI0IEMgNDQxLjQyOCAyODkzLjQ0IDM1My40%0D%0AMTkgMjg4Ny43MjEgMTY0LjY3OSAyOTYwLjU3NCBDIDEwOC4zOTYgMjk4Mi4yOTkgNTMuNTAyIDI5%0D%0ANzkuMzcgMCAyOTUxLjczNCBMIDAgMzA1NS4wODggTCAwIDMwNTUuMDg4IEMgMjYuMTU4IDMwNzAu%0D%0AOTM2IDU0LjYxOSAzMDg3LjE3IDg0LjgyOCAzMTA0Ljg0NyBDIDE4OS4yODggMzE2NS45NzIgMjY0%0D%0ALjQ0MyAzMTQ0LjU2NCA0MzMuNDczIDMxNDkuMTYyIEMgNDkwLjA1IDMxNTAuNyA1MzQuNDE4IDMx%0D%0ANzAuMjY2IDU3MC42NjIgMzIwMCBMIDc1NS4zODQgMzIwMCBaICIgZmlsbD0idXJsKCNfbGdyYWRp%0D%0AZW50XzEpIi8+PC9nPjwvZz48L3N2Zz4="></b-img>
      </div>
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
  padding-bottom: 225px;
}
.teks {
  padding-top: 50px;
  margin-top: 50px;
  color: white;
}
.wave{
  margin-top : -155px;
  margin-left : 648px;
  /* position: relative; */
}
.wave1{
  margin-top : -369px;
  /* margin-right: -300px; */
  position: absolute;
}
@media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
  }
  .deck {
    padding-top: 10px;
    margin-bottom: -160px;
  }
  .teks {
  /* padding-top: -50px; */
  margin-top: -20px;
  margin-bottom: 30px;
  color: white;
}
    .wave{
        display: none;
    }
    .wave1{
  display: none;
}
}
</style>