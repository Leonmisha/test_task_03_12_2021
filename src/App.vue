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
button {
  &.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
  }
}
.modal-header {
  &.close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
  }
}
</style>
