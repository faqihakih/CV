<template>
    <div>
        <b-jumbotron class="jumbotron jumbotron-fluid">
            <b-container fluid="md">
                    <div class="Home">
                        <h1>Produk</h1>
                        <img src="/assets/ux.png" alt="Produk">
                        <p>PLUGIN adalah perusahaan pengembangan perangkat <br>
                        lunak yang berlokasi di Tegal, Indonesia yang berfokus <br>
                        pada membantu startup untuk meningkatkan bisnis <br>
                        dengan menggunakan teknologi terbaru dan <br>
                        mengeksplorasi ide-ide baru. Layanan kami meliputi: <br>
                        membuat MVP(Produk yang layak minimum), <br>
                        membangun aplikasi seluler, memperluas tim yang ada <br>
                        dan meluncurkan fitur baru untuk startup.</p>
                    </div>
            </b-container>
        </b-jumbotron>
    </div> 
</template>

<script>
export default {
    name:'Produk',
    props: {
        msg: String
    }
}
</script>

<style  scoped>



    img{
        float: left;
        height: 220px;
        width: auto;
        margin-right: 50px;
        margin-top: 40px;
    }
    @font-face {
    font-family: "Gilroy-Light";
    src: url('/assets/Gilroy-Light.otf');
  }
  @font-face {
    font-family: "Gilroy-Bold";
    src: url('/assets/Gilroy-ExtraBold.otf');
  }
    .jumbotron{
        background-color:  #1B1A1F;
        color: white;
        font-family: 'Gilroy', sans-serif;
        padding-top: 100px;
    }
    h1{
        color: white;
        font-family: 'Gilroy-Bold', sans-serif;
        margin-top: 8px !important;
        font-family: 'Gilroy-Bold', sans-serif;
    }
    .Home{
        font-family: 'Gilroy-Light', sans-serif;
        margin-left: 10px;
    }
    .Home p{
        margin-top: 60px;
        margin-bottom: 100px;
    }

    

    /* Mobile Css */
    @media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
    }
    .Home{
        margin-left: -10px;
    }

}

</style>