<template>
    <div>
        <b-jumbotron class="jumbotron jumbotron-fluid">
            <b-container fluid="md">
                <b-row style="margin-bottom: 50px">
                <b-col style="margin-top: 50px" md="6">
                    <div class="Home">
                        <h1>Pelita Utama <br> Gaharu</h1>
                        <p>Menjadikan teknologi terbaru <br>dalam proses kerja kami</p>
                    </div>
                </b-col>
                <b-col md="6">
                    <div class="Dev f">
                    <b-img :class="full" @click="fullWidthImage = !fullWidthImage" 
                    src="https://raw.githubusercontent.com/faqihakih/Img/master/mobile_dev.png" fluid alt=""></b-img>
                    </div>
                </b-col>
                </b-row>
            </b-container>
            <div class="container">
            
            </div>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        msg : String
    }
}
</script>

<style scoped>
    .jumbotron{
        background-color: #1B1A1F;
        color: white;
    }
    h1{
        font-size: 64px;
        font-family: gil;
    }
    .Home{
        margin-left: 100px;
    }
    .full {
    width: 100%;
    height: auto;
    }
    img {
    width: auto;
    height: auto;
    }
    .Dev{
        
    }

    /* Mobile Css */
    @media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
  }
    .Home{
        margin-left: -10px;
    }
    .full {
    width: 100%;
    height: auto;
    }
    img {
    width: 300px;
    height: 250px;
    margin-top: 50px;
    }
    img:hover {
    cursor: pointer;
    }
}


</style>