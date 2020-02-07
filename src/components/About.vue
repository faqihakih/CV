<template>
    <div>
        <b-jumbotron class="jumbotron jumbotron-fluid">
            <b-container fluid="md">
                    <div class="About">
                        <h1>Tentang</h1>
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
    name:'About',
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
    .jumbotron{
        background-color: #1B1A1F;
        color: white;
        height: 600px;
        font-family: 'Gilroy-Light', sans-serif;
    }
    h1{
        margin-top: 50px !important;
        margin-left: -15px;
        color: white;
        font-family: 'Gilroy-Bold', sans-serif;
    }
    .About{
        font-family: 'Gilroy-Light', sans-serif;
        /* margin-left: 10px; */
        /* padding-left: 50px; */
    }

    

    /* Mobile Css */
    @media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
    margin-left: 0;
    }
    .About{
        margin-left: 0;
    }

}


</style>