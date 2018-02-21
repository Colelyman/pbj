<template>
  <div id="app">
    <h1>Essential Mechanics of a Peanut Butter and Jelly Sandwich</h1>
  
    <h4>By: Spencer Buhler, Nicholas Lush, Cole Lyman, and Mark Standring</h4>
    <router-nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
    name: 'app',
    components: {
        Footer
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-panel {
    margin-bottom: 20px;
}
ul {
    margin-top: 0;
    padding-left: 2em;
    list-style-position: outside;
}
li:before {
    position: absolute;
    margin-left: -1em;
}
</style>
