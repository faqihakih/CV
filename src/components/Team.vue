<template>
    <div class="Team">
        <div class="container teks">
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
          <a href="#"><h4>Lihat Semua Tim</h4></a>
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
    bottom: -115%;
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
}
</style>