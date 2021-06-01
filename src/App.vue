<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Peoples />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Peoples from './components/Peoples'

export default {
  name: 'App',
  components: {
    Peoples
    // HelloWorld
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  // background: #F3F7FA;
}

#app {
  font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F3F7FA;
  min-height: 100vh;
}
</style>
