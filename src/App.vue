<template>
  <div id="app">
    <div id="header">
      <h1 class="headerTitle">Essential Mechanics of a Peanut Butter and Jelly Sandwich</h1>

      <!--<h4 id="titleCredits">By: Spencer Buhler, Nicholas Lush, Cole Lyman, and Mark Standring</h4>!-->
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
  /*margin-top: 60px;*/
}
body{
  background-color:#ECE0D0 ;
}
#header, .footer {
  background-color: tan;
  color:rebeccapurple;
}
.container {
  max-width: initial;
  width:100%;
}
#router-nav, .mainBody{
  max-width: 960px;
  margin: 0 auto;
}
.footerContent{
  max-width: 960px;
  margin: auto;
}
.headerTitle {
  margin-bottom: -38px;
  padding-bottom: 50px;
  padding-top:5px;
  padding-left: 10px;
  font-size:32px;
}
#titleCredits {
  font-size: 20px;
}
.nav-panel {
    margin-bottom: 20px;
    background-color: #FFDEAD;
    /*margin-top: -20px;*/
    padding-left: 15px;
}
.nav-panel a:hover{
  color:#ff5454;
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
