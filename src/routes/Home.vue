<template>
  <div>
  <slider animation="fade" :auto="true" height="400px">
    <slider-item v-for="(image, i) in this.images" :key="i">
      <div class="row">
        <img :src="image.src" height="350">
        <p class="caption"><strong>Figure {{ i + 1 }}:</strong> {{ image.caption }}</p>
      </div>
    </slider-item>
  </slider>
  <h3>What constitutes a Peanut Butter and Jelly (PB&amp;J) sandwich?</h3>
  <div class="row">
    <div class="six columns">
      <h4>A PB&amp;J constitutes:</h4>
      <ul>
        <li class="tick"> A grain-based substrate</li>
        <li class="tick"> Enjoyment for the given partaker</li>
        <li class="tick"> Peanut butter (PB) and some jam or jelly-like (J) substance on the substrate</li>
        <li class="tick"> A horizontal interface between the PB and the J</li>
      </ul>
    </div>
    <div class="six columns">
      <h4>A PB&amp;J does not constitute:</h4>
      <ul>
        <li class="cross"> Any substance that detracts from the enjoyment of the partaker</li>
        <li class="cross"> PB substitutes, e.g., Almond Butter, Soynut Butter, Coconut Butter, etc.</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
    data() {
        return {
            images: [
                { src: 'images/pbj1.jpg', caption: 'This is a happy sandwich.' },
                { src: 'images/pbj2.jpg', caption: 'This is a loving sandwich.' },
                { src: 'images/pbj3.jpg', caption: 'This is a gross sandwich.' }
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
    margin-left: 1em;
}
ul {
    margin-top: 0;
    padding-left: 2em;
    list-style-type: none;
    list-style-position: outside;
}
li {
   // padding-left: 5px;
}
li:before {
    posigion: absolute;
    margin-left: -1em;
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
