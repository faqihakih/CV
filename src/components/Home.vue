<template>
    <div>
        <b-jumbotron class="jumbotron jumbotron-fluid">
            <div class="container">
            <b-row style="margin-bottom: 50px">
                <b-col style="margin-top: 50px">
                    <div class="Home">
                        <h1>Pelita Utama <br> Gaharu</h1>
                        <p>Menjadikan teknologi terbaru <br>dalam proses kerja kami</p>
                    </div>
                </b-col>
            <b-col>
                <div class="Dev">
                  <img :class="full" @click="fullWidthImage = !fullWidthImage" src="https://raw.githubusercontent.com/faqihakih/Img/master/mobile_dev.png" alt="">
                </div>
            </b-col>
            </b-row>
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
    width: 400px;
    height: 450px;
    }
    .Dev{
        
    }

    /* Mobile Css */
    @media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
  }
    .full {
    width: 100%;
    height: auto;
    }
    img {
    width: 200px;
    height: 250px;
    }
    img:hover {
    cursor: pointer;
    }
}


</style>