<template>
  <div id="app">
    <div id="header">
      <h1 class="headerTitle">Essential Mechanics of a Peanut Butter</h1> <h1 class="headerTitle">and Jelly Sandwich</h1>

      <h4 id="titleCredits">By: Spencer Buhler, Nicholas Lush, Cole Lyman, and Mark Standring</h4>
    </div>
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
#header {
  background-color: tan;
  width: 1360px;
  margin-left: -450px;
  padding-left: 450px;
  padding-right: 60px;
  color:rebeccapurple;
}
.headerTitle {
  margin-bottom: 0;
}
#titleCredits {
  font-size: 20px;
}
.nav-panel {
    margin-bottom: 20px;
    background-color: #FFDEAD;
    margin-top: -20px;
    padding-left: 15px;
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
