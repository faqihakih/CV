<template>
  <div id="app">
    <Nav/>
    <Home/>
    <Team/>
    <About/>
    <Klient/>
    <Product/>
  </div>
</template>

<script>
import Nav from './components/Navbar'
import Home from './components/Home'
import Team from './components/Team'
import About from './components/About'
import Klient from './components/Klien'
import Product from './components/Produk'

export default {
  name: 'app',
  components: {
    Nav,Home,Team,About,Klient,Product
  },
}
</script>

<style>

</style>
