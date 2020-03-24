<template>
  <v-app id="home">
    <Nav/>
    <Home/>
    <Team/>
    <About/>
    <Klient/>
    <Product/>
    <Kontak/>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from '../components/Navbar'
import Home from '../components/Home'
import Team from '../components/Team'
import About from '../components/About'
import Klient from '../components/Klien'
import Product from '../components/Produk'
import Kontak from '../components/Kontak'
import Footer from '../components/Footer'

export default {
  name: 'app',
  components: {
    Nav,Home,Team,About,Klient,Product,Kontak,Footer
  },
}
</script>

<style>

</style>
