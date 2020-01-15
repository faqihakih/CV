<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="Nav">
        <div class="container">
        <b-navbar-brand href="#">
            <b-img src="https://raw.githubusercontent.com/faqihakih/Img/master/plugin.png" fluid alt="Responsive image" width="175" height="50"></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Tim</b-nav-item>
            <b-nav-item href="#">Tentang</b-nav-item>
            <b-nav-item href="#">Klien</b-nav-item>
            <b-nav-item href="#">Produk</b-nav-item>
            <b-nav-item href="#">Kontak</b-nav-item>
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
  .nav-collapse{
      color: white !important;
      font-family:Georgia, 'Times New Roman', Times, serif;
  }
  .Nav{
      background-color: #1b1a1f;
  }
</style>