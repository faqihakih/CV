<template>
    <div class="Team">
        <div class="container teks">
            <h1>Tim</h1>
        </div>
        <b-card-group class="deck">
        <div class="responsif">
            <b-img :class="full" @click="fullWidthImage = !fullWidthImage" 
            src="/assets/logo.png" fluid alt="Team">
            </b-img>
        </div>
        <div class="text">
            <h3>Dhiya</h3> <h5>Reksa</h5> <p>CEO</p>
        </div>
            <div class="responsif">
                <b-img :class="full" @click="fullWidthImage = !fullWidthImage" 
                src="/assets/logo.png" fluid alt="Team">
                </b-img>
            </div>
        <div class="text">
            <h3>Izzatur</h3> <h5>Royhan</h5> <p>Backend</p>
        </div>
        <div class="responsif">
            <b-img :class="full" @click="fullWidthImage = !fullWidthImage" 
            src="/assets/logo.png" fluid alt="Team">
            </b-img>
        </div>
        <div class="text">
            <h3>Preiyudha</h3> <h5>Akadita</h5> <p>Mobile Dev</p>
        </div>
          </b-card-group>
          <b-card-group class="deck">
        <div class="responsif">
            <b-img :class="full" @click="fullWidthImage = !fullWidthImage" 
            src="/assets/logo.png" fluid alt="Team">
            </b-img>
        </div>
        <div class="text">
            <h3>Nurul</h3> <h5>Chotimah</h5> <p>Backend</p>
        </div>
        <div class="responsif">
            <b-img :class="full" @click="fullWidthImage = !fullWidthImage" 
            src="/assets/logo.png" fluid alt="Team">
            </b-img>
        </div>
        <div class="text">
            <h3>Faqih</h3> <h5>Zada</h5> <p>Web Dev</p>
        </div>
          </b-card-group>
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
    margin-top: 30px;
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
@media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
    /* padding-left: -20px; */
    /* margin-left: 20px !important; */
    }

}
</style>