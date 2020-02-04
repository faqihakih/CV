<template>
  <div id="app">
    <Nav/>
    <Home/>
    <Team/>
    <About/>
    <Klient/>
  </div>
</template>

<script>
import Nav from './components/Navbar'
import Home from './components/Home'
import Team from './components/Team'
import About from './components/About'
import Klient from './components/Klien'

export default {
  name: 'app',
  components: {
    Nav,Home,Team,About,Klient
  },
}
</script>

<style>

</style>
