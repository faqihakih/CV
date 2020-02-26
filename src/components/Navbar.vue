<template>
<div>
  <b-navbar toggleable="lg" class="header" type="dark" fixed="top">
    <div class="container logo">
    <b-img src="https://raw.githubusercontent.com/faqihakih/Img/master/plugin.png"
    alt="Plug-IN"></b-img>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto nav-item">
        <b-nav-item href="#team">Tim</b-nav-item>
        <b-nav-item href="#about">Tentang</b-nav-item>
        <b-nav-item href="#client">Klien</b-nav-item>
        <b-nav-item href="#produk">Produk</b-nav-item>
        <b-nav-item href="#">Komunitas</b-nav-item>
        <b-nav-item href="#kontak">Kontak</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
</template>


<script lang="ts">
export default {
    name: 'Nav',
    props: {
        msg : String
    }
    
}
</script>

<style scoped>
*{
    background-color:  #1b1a1f;
    justify-content: space-between;
    font-family: 'Gilroy-Bold',sans-serif;
    width: auto;
}
 @font-face {
    font-family: "Gilroy-Light";
    src: url('/assets/Gilroy-Light.otf');
  }
  @font-face {
    font-family: "Gilroy-Bold";
    src: url('/assets/Gilroy-ExtraBold.otf');
  }
.logo >img{
    height: 35px;
    width: auto;
}
.header{
    color: #ffffff !important;
}
navbar-item{
  color: #ffffff !important;

}
 
</style>