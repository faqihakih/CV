<template>
  <div id="app">
    <Nav/>
    <Home/>
    <Team/>
  </div>
</template>

<script>
import Nav from './components/Navbar'
import Home from './components/Home'
import Team from './components/Team'

export default {
  name: 'app',
  components: {
    Nav,Home,Team
  },
}
</script>

<style>

</style>
