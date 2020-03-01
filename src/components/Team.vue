<template>
    <div class="Team">
        <div class="container teks" id="team">
            <h1>Tim</h1>
        <div class="tahu">
        <div class="circle"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        <div class="circle5"></div>
        <div class="circle6"></div>
        <div class="circle7"></div>
        <div class="circle8"></div>
        <div class="circle9"></div>
        <div class="circle10"></div>
        <div class="circle11"></div>
        <div class="circle12"></div>
        <div class="circle13"></div>
        <div class="circle14"></div>
        <div class="circle15"></div>
        <div class="circle16"></div>
        </div>
        </div>
        <b-card-group class="deck">
        <div class="responsif">
            <b-img class="full" @click="fullWidthImage = !fullWidthImage" 
            src="/assets/logo.png" fluid alt="Team">
            </b-img>
        </div>
        <div class="text">
            <h3>Dhiya</h3> <h5>Reksa</h5> <p>CEO</p>
        </div>
            <div class="responsif">
                <b-img class="full" @click="fullWidthImage = !fullWidthImage" 
                src="/assets/logo.png" fluid alt="Team">
                </b-img>
            </div>
        <div class="text">
            <h3>Izzatur</h3> <h5>Royhan</h5> <p>Backend</p>
        </div>
        <div class="responsif">
            <b-img class="full" @click="fullWidthImage = !fullWidthImage" 
            src="/assets/logo.png" fluid alt="Team">
            </b-img>
        </div>
        <div class="text">
            <h3>Preiyudha</h3> <h5>Akadita</h5> <p>Mobile Dev</p>
        </div>
          </b-card-group>
          <b-card-group class="deck">
        <div class="responsif">
            <b-img class="full" @click="fullWidthImage = !fullWidthImage" 
            src="/assets/logo.png" fluid alt="Team">
            </b-img>
        </div>
        <div class="text">
            <h3>Nurul</h3> <h5>Chotimah</h5> <p>Backend</p>
        </div>
        <div class="responsif">
            <b-img class="full" @click="fullWidthImage = !fullWidthImage" 
            src="/assets/logo.png" fluid alt="Team">
            </b-img>
        </div>
        <div class="text">
            <h3>Faqih</h3> <h5>Zada</h5> <p>Web Dev</p>
        </div>
          </b-card-group>
          <div class="bulat">
            <div class="circle"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
            <div class="circle5"></div>
            <div class="circle6"></div>
            <div class="circle7"></div>
            <div class="circle8"></div>
            <div class="circle9"></div>
            <div class="circle10"></div>
            <div class="circle11"></div>
            <div class="circle12"></div>
            <div class="circle13"></div>
            <div class="circle14"></div>
            <div class="circle15"></div>
            <div class="circle16"></div>
          </div>
          <div class="view">
          <a href="#"><h4>Lihat Semua Tim</h4></a>
          </div>
          <div class="wave">
            <b-img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhLS0gR2VuZXJhdG9yOiBHcmF2%0D%0AaXQuaW8gLS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xh%0D%0AdGUiIHZpZXdCb3g9IjAgMTIxNi43ODggNzMzLjU2NiAzODMuMjEyIiB3aWR0aD0iNzMzLjU2NiIg%0D%0AaGVpZ2h0PSIzODMuMjEyIj48ZyBpZD0iR2Vsb21iYW5nIDIiPjxnIG9wYWNpdHk9IjAuMiI+PGxp%0D%0AbmVhckdyYWRpZW50IGlkPSJfbGdyYWRpZW50XzE2IiB4MT0iMTA0LjA5NDk1MTcxNjA4NjA3JSIg%0D%0AeTE9Ii0xMTQuODczMjYwNzM3MzI5NDUlIiB4Mj0iMzcuNDI0MjM3ODMzNzk0NDM2JSIgeTI9IjEx%0D%0AMi40OTE5NTc3MjU2NTExOSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3Atb3BhY2l0eT0iMSIgc3R5%0D%0AbGU9InN0b3AtY29sb3I6cmdiKDI1NSwyNTUsMjU1KSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3Rv%0D%0AcC1vcGFjaXR5PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjMsMjMsMjkpIi8+PC9saW5lYXJH%0D%0AcmFkaWVudD48cGF0aCBkPSIgTSA3MzMuNTY2IDE2MDAgUSA3MDcuNTM4IDE1NzYuODUgNjkwLjQx%0D%0ANyAxNTQ0Ljg3NCBDIDYwMi40NzEgMTM4MC42MjkgNTM0LjczNiAxMzI3LjQ4MiA0MjQuODc5IDEy%0D%0AOTMuODQ4IEMgMzE1LjAyMSAxMjYwLjIxNCAxNTUuNjQyIDEyNzQuNzczIDgwLjIxMSAxMzE2LjYx%0D%0ANyBDIDU4Ljc0NSAxMzI4LjUyNSAzMC44MDIgMTM0NC4yNjIgMCAxMzYwLjA3NCBMIDAgMTM2MC4w%0D%0ANzQgTCAwIDE0NTcuODc2IEMgMTE1LjkyMiAxNDI3LjM5NSAyNTQuMTYyIDEzODcuNTUyIDM2OC4z%0D%0AMTYgMTQ4My42MDcgQyA0MjQuNjExIDE1MzAuOTc3IDQ2My43NTEgMTU2OS4zNDcgNTAwLjI3OCAx%0D%0ANjAwIEwgNzMzLjU2NiAxNjAwIFogIiBmaWxsPSJ1cmwoI19sZ3JhZGllbnRfMTYpIi8+PC9nPjxn%0D%0AIG9wYWNpdHk9IjAuMiI+PGxpbmVhckdyYWRpZW50IGlkPSJfbGdyYWRpZW50XzE3IiB4MT0iMTA0%0D%0ALjA5NDk1MTcxNjA4NjA3JSIgeTE9Ii0xMTQuODczMjYwNzM3MzI5NDUlIiB4Mj0iMzcuNDI0MjM3%0D%0AODMzNzk0NDM2JSIgeTI9IjExMi40OTE5NTc3MjU2NTExOSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0%0D%0Ab3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSwyNTUsMjU1KSIvPjxzdG9w%0D%0AIG9mZnNldD0iMTAwJSIgc3RvcC1vcGFjaXR5PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjMs%0D%0AMjMsMjkpIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSIgTSA1NzIuMjAzIDE2MDAgUSA1NjIu%0D%0AODY5IDE1ODIuMDEyIDU1Ni43NjcgMTU2MS4yNDMgQyA0OTkuNzM5IDEzNjcuMTM1IDQ0MS42NDkg%0D%0AMTMwMC43NzIgMzM3LjI4MyAxMjUyLjcyIEMgMjM4Ljc3NiAxMjA3LjM2NiA4Ny40NTUgMTIwNi42%0D%0AODUgMCAxMjQwLjkxMSBMIDAgMTI0MC45MTEgTCAwIDEzNzkuNzMgQyA4OC44NTkgMTM3MC44MTYg%0D%0AMTc3Ljg3OSAxMzgxLjY4OSAyNDMuNTU1IDE0NjIuNjg1IEMgMjg4LjUyIDE1MTguMTM5IDMxOS42%0D%0AMjQgMTU2My4xMzQgMzQ4Ljk4MiAxNjAwIEwgNTcyLjIwMyAxNjAwIFogIiBmaWxsPSJ1cmwoI19s%0D%0AZ3JhZGllbnRfMTcpIi8+PC9nPjwvZz48L3N2Zz4="></b-img>
          </div>
          
    </div>    
</template>

<script>
export default {
  name: 'Team',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@font-face {
font-family: "Gilroy-Light";
src: url('/assets/Gilroy-Light.otf');
}
@font-face {
font-family: "Gilroy-Bold";
src: url('/assets/Gilroy-ExtraBold.otf');
}
.Team{
    margin-top: -45px;
    /* padding-left: 50px; */
    background-color: #232428;
    height: max-content;
    /* padding-bottom: 10px; */
}
.wave{
  margin-top : -390px;
  /* padding-bottom: -5px; */
}
.view{
  margin-top: -10px;
  padding-bottom: 10px;
}
h4{
    /* margin-left: -20px !important; */
    color: white;
    font-family: 'Gilroy-Bold', sans-serif;
    font-size: 24px;
    text-align: center;
    margin-top: 30px !important;
}
/* h5{
    margin-left: -15px;
    color: white;
    font-family: 'Gilroy-Bold', sans-serif;
    margin-top: 8px !important;
} */
.text p{
    /* margin-left: -15px; */
    /* margin-top: 8px !important; */
    font-size: 16px;
    color: white;
    font-family: 'Gilroy-Light', sans-serif;
}
.text{
    margin-top: 50px !important;
    margin-left: -15px;
    color: white;
    font-family: 'Gilroy-Bold', sans-serif;
}
.teks{
    color: white;
    font-family: 'Gilroy-Bold', sans-serif;
    margin-top: 8px !important;
    margin-bottom: 30px;
    padding-top: 90px;
}
.deck img{
    border-radius: 10px !important;
    width: auto;
    height: auto;
    opacity: 0.4;
    filter: alpha(opacity=40); /* For IE8 and earlier */
    /* margin-left: 30px; */
    /* margin-top: 40px; */
}
.deck{
    /* margin-left: 200px; */
    margin-top: 30px;
    justify-content: center;   
}
.circle {
  margin-top: -55px;
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
}
.circle2 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-top:3px;
}
.circle3 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-top:3px;
}
.circle4 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-top:3px;
}
.circle5 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-top: -74px;
  margin-left:23px;
}
.circle6 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-left:23px;
  margin-top:3px;
}
.circle7 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-left:23px;
  margin-top:3px;
}
.circle8 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-left:23px;
  margin-top:3px;
}
.circle9 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-top: -73px;
  margin-left:46px;
}
.circle10 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-left:46px;
  margin-top:3px;
}
.circle11 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-left:46px;
  margin-top:3px;
}
.circle12 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-left:46px;
  margin-top:3px;
}
.circle13 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-top: -73px;
  margin-left:69px;
}
.circle14 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-left:69px;
  margin-top:3px;
}
.circle15 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-left:69px;
  margin-top:3px;
}
.circle16 {
  height: 16px;
  width: 16px;
  background-color: #555;
  border-radius: 50%;
  margin-left:69px;
  margin-top:3px;
}
.bulat{
    position: absolute;
    right: 15%;
    bottom: -90%;
}
@media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
    /* padding-left: -20px; */
    /* margin-left: 20px !important; */
    }
  .bulat{
    display: none;
}
.tahu{
    display: none;
}
.wave{
  display: none;
}
}
</style>