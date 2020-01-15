<template>
  <div id="app">
    <Nav/>
    <Team/>
  </div>
</template>

<script>
import Nav from './components/Navbar'
import Team from './components/Team'

export default {
  name: 'app',
  components: {
    Nav,Team
  },
}
</script>

<style>

</style>
