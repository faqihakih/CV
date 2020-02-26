<template>
  <div id="home">
    <b-jumbotron class="jumbotron jumbotron-fluid">
      <b-container fluid="md">
        <b-row style="margin-bottom: 50px">
          <b-col style="margin-top: 50px" md="6">
            <div class="Home">
              <h1>
                Pelita Utama
                <br />Gaharu
              </h1>
              <p>
                Menjadikan teknologi terbaru
                <br />dalam proses kerja kami
              </p>
            </div>
          </b-col>
          <b-col md="6">
            <div class="Dev">
              <b-img
                class="full"
                @click="fullWidthImage = !fullWidthImage"
                src="https://raw.githubusercontent.com/faqihakih/Img/master/mobile_dev.png"
                fluid
                alt="HOME"
              ></b-img>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="wave">
        <b-img
          fluid
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhLS0gR2VuZXJhdG9yOiBHcmF2%0D%0AaXQuaW8gLS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xh%0D%0AdGUiIHZpZXdCb3g9IjAgMjQ2IDEyODEgNDE3Ljc2MyIgd2lkdGg9IjEzODEiIGhlaWdodD0iNDE3%0D%0ALjc2MyI+PGcgaWQ9IkdlbG9tYmFuZyAxIj48ZyBvcGFjaXR5PSIwLjIiPjxsaW5lYXJHcmFkaWVu%0D%0AdCBpZD0iX2xncmFkaWVudF8xNCIgeDE9IjEwNC4wOTQ5NTE3MTYwODYwNyUiIHkxPSItMTE0Ljg3%0D%0AMzI2MDczNzMyOTQ1JSIgeDI9IjM3LjQyNDIzNzgzMzc5NDQzNiUiIHkyPSIxMTIuNDkxOTU3NzI1%0D%0ANjUxMTklIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLW9wYWNpdHk9IjEiIHN0eWxlPSJzdG9wLWNv%0D%0AbG9yOnJnYigyNTUsMjU1LDI1NSkiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3Atb3BhY2l0eT0i%0D%0AMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDIzLDIzLDI5KSIvPjwvbGluZWFyR3JhZGllbnQ+PHBh%0D%0AdGggZD0iIE0gMCA1OTkuNDQ2IFEgMTAwLjk1NiA1OTguNTc3IDE3MiA1NTggQyAyODEuMTk2IDQ5%0D%0ANS42MzMgNDEzLjg4NCAzOTUuOTc2IDU2NCA0NjMgQyA3MTQuMTE2IDUzMC4wMjQgNzY5LjUwNCA1%0D%0ANzcuNDkzIDg5MC41IDU3NSBDIDEwMTEuNDk2IDU3Mi41MDcgMTEwNS44NiA1NzQuMjk4IDExNzUg%0D%0ANTM4IEMgMTE5OS40MiA1MjUuMTggMTIzNy4wMzIgNTA2LjI3NCAxMjgxIDQ4OC40MzkgTCAxMjgx%0D%0AIDQyOC4yNyBDIDExMDIuNjkyIDUxNS44MzQgOTcyLjUzMyA1MTcuMzk3IDg5MC41IDQzMyBDIDc2%0D%0AMC42NDUgMjk5LjQwMyA2ODAuODczIDI2Ny4wMTEgNTY2IDI2NSBDIDQ1MS4xMjcgMjYyLjk4OSAz%0D%0AMDEuOTU0IDMyMC45NjUgMjQxIDM4MiBDIDE4Ni41NjMgNDM2LjUxIDgxLjIxNiA1NDQuODcgMCA1%0D%0ANjQuODY2IEwgMCA1OTkuNDQ2IFogIiBmaWxsPSJ1cmwoI19sZ3JhZGllbnRfMTQpIi8+PC9nPjxn%0D%0AIG9wYWNpdHk9IjAuMiI+PGxpbmVhckdyYWRpZW50IGlkPSJfbGdyYWRpZW50XzE1IiB4MT0iMTA0%0D%0ALjA5NDk1MTcxNjA4NjA3JSIgeTE9Ii0xMTQuODczMjYwNzM3MzI5NDUlIiB4Mj0iMzcuNDI0MjM3%0D%0AODMzNzk0NDM2JSIgeTI9IjExMi40OTE5NTc3MjU2NTExOSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0%0D%0Ab3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSwyNTUsMjU1KSIvPjxzdG9w%0D%0AIG9mZnNldD0iMTAwJSIgc3RvcC1vcGFjaXR5PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjMs%0D%0AMjMsMjkpIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSIgTSAwIDU0OS40MTYgUSAxOC4xOTgg%0D%0ANTQzLjU2OCAzNS4yMjUgNTM1LjI1OCBDIDE1Mi45NzggNDc3Ljc4NiAyOTkuNzAxIDM4MC40Njgg%0D%0ANDM4LjMwOSA0NzcuMzE5IEMgNTc2LjkxNyA1NzQuMTcxIDYyNC41OTYgNjM2LjA4NSA3NDQuOTI1%0D%0AIDY0OS4wODcgQyA4NjUuMjU1IDY2Mi4wOSA5NTguNTMyIDY3Ni41MzIgMTAzMi42MDMgNjQzLjgx%0D%0ANiBDIDEwODIuNjAzIDYyMS43MzEgMTE4My43NTkgNTgwLjM3OSAxMjgxIDU3MC45MjcgTCAxMjgx%0D%0AIDQ4NC45OTIgTCAxMTg2LjQ3MSA1MTcuNzU2IFEgODc0LjkzOSA2NTYuNDQ5IDc2Ni41NTggNDg1%0D%0ALjYxNiBDIDY1OC4xNzcgMzE0Ljc4MiA1ODQuMDMgMjY3LjAyOCA0NzAuNDU2IDI0OS42NDMgQyAz%0D%0ANTYuODgyIDIzMi4yNTcgMjAwLjE2NiAyNzkuNDMgMTMwLjQ0MSAzNDEuNjk4IEMgOTguMjI5IDM3%0D%0AMC40NjQgNTAuMzE5IDQxNC4wMyAwIDQ1MS4wOTkgTCAwIDU0OS40MTYgWiAiIGZpbGw9InVybCgj%0D%0AX2xncmFkaWVudF8xNSkiLz48L2c+PC9nPjwvc3ZnPgo="
        ></b-img>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Gilroy-Light";
  src: url("/assets/Gilroy-Light.otf");
}

@font-face {
  font-family: "Gilroy-Bold";
  src: url("/assets/Gilroy-ExtraBold.otf");
}

.wave {
  margin-top: -450px;
  /* width: 1350px !important; */
}

.jumbotron {
  background-color: #1b1a1f;
  color: white;
  font-family: "Gilroy", sans-serif;
  padding-top: 150px;
}

h1 {
  font-size: 64px;
  font-family: "Gilroy-Bold", sans-serif;
}

.Home {
  font-family: "Gilroy-Light", sans-serif;
  margin-left: 100px;
}

.Home p {
  margin-top: 40px;
}
.full {
  width: auto;
  height: auto;
  opacity: 0.3;
  filter: alpha(opacity=30);
  /* For IE8 and earlier */
}

/* Mobile Css */
@media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
  }

  .Home {
    margin-left: -10px;
  }

  .wave {
    display: none;
  }
}
</style>