<template>
  <div id="app">
    <Main />
    <Footer />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Main,
    Footer
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
a {
  text-decoration: none;
  &:hover {
    color: rgb(51, 20, 224);
  }
}
</style>
