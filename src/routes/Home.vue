<template>
<div class="mainBody">
  <h3>The Importance of the Peanut Butter and Jelly sandwich</h3>
  <div class="row">
    <p class="twelve columns">Insert paragraph by Mark.</p>
  </div>
  <h3>What constitutes a Peanut Butter and Jelly sandwich?</h3>
  <div class="row">
    <p class="twelve columns">The Peanut Butter and Jelly (PB&amp;J) sandwich is an iconic sandwich that has many variations and adaptations to the original recipe. The authors provide specific criteria that specify what constitutes a PB&amp;J as well as showing acceptable forms of the ubiquitous sandwich.</p> 
  </div>
  <div class="row">
    <div class="six columns">
      <h4>A PB&amp;J consists of:</h4>
      <ul>
        <li class="tick"> A grain-based substrate</li>
        <li class="tick"> Peanut butter (PB) and some jam or jelly-like (J) substance on the substrate</li>
        <li class="tick"> A horizontal interface between the PB and the J</li>
      </ul>
    </div>
    <div class="six columns">
      <h4>A PB&amp;J does not consist of:</h4>
      <ul>
        <li class="cross"> Any substance that detracts from the enjoyment of the partaker</li>
        <li class="cross"> PB substitutes, e.g., Almond Butter, Soynut Butter, Coconut Butter, etc.</li>
      </ul>
    </div>
  </div>
  <h3>The forms of the PB&amp;J</h3>
  <div class="row">
    <p class="twelve columns">A strength of the PB&amp;J is that it is adaptable to the partaker’s specific taste, as well as the ingredients that are available. One example of the versatility of the PB&amp;J is found in Figure 1, where the grain substrate is two Ritz crackers. However, this strength can quickly become a weakness when the variations of the PB&amp;J become extreme.</p> 
  </div>
  <slider animation="fade" :auto="true" height="420px">
    <slider-item v-for="(image, i) in this.images" :key="i">
      <img :src="image.src">
      <p class="caption"><strong>Figure {{ i + 1 }}:</strong> {{ image.caption }} <em>Source:</em> <a class="reference" :href="image.ref">{{ image.ref }}</a></p>
    </slider-item>
  </slider> 
</div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
    data() {
        return {
            images: [
                {
                    src: 'images/ritz.jpg',
                    caption: 'This Ritz cracker PB&J shows the versatility of the sandwich, and fulfills the proper criteria to still be considered a PB&J.',
                    ref: 'http://www.snackworks.com/recipe/pbj-ritzwich-188689.aspx'
                },
            ]
        }
    },
    components: {
        Slider,
        SliderItem
    }
};
</script>

<style scoped>
.caption {
    color: #000000;
    margin-left: 5em;
    margin-right:5em;
}
.slider{
  background-color: #d3d3d3;
  padding-top: 30px;
}
.slider img{
  padding-bottom: 5px;
}
.slider-indicator-icon {
    margin-bottom: 40px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
ul {
    list-style-type: none;
}
li:before {
    font-weight: bold;
}
li.tick:before {
    content: "\2713";
    color: darkgreen;
}
li.cross:before {
    content: "\2717";
    color: crimson;
}
</style>
