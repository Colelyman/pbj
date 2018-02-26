<template>
<div class="mainBody">
  <h3>The Importance of the Peanut Butter and Jelly sandwich</h3>
  <div class="row">
    <p class="twelve columns">Welcome! The purpose of this infosite is to raise awareness of the great American symbol: the Peanut Butter &amp; Jelly (PB&amp;J) Sandwich! Much like the Bald Eagle, the Stars &amp; Stripes, or the Statue of Liberty, the PB&amp;J has become inherently connected with American culture. Take a look around and find out more how PB&amp;J sandwiches were engineered to shape and change America!</p>
  </div>
  <h3>What constitutes a Peanut Butter and Jelly sandwich?</h3>
  <div class="row">
    <p class="twelve columns">The PB&amp;J sandwich is an iconic sandwich that has many variations and adaptations to the original recipe. The authors provide specific criteria that specify what constitutes a PB&amp;J as well as showing acceptable forms of the ubiquitous sandwich.</p> 
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
    <p class="twelve columns">A strength of the PB&amp;J is that it is adaptable to the partaker’s specific taste, as well as the ingredients that are available. One example of the versatility of the PB&amp;J is found in Figure 1, where the grain substrate is two Ritz crackers. However, this strength can quickly become a weakness when the variations of the PB&amp;J become extreme, illustrated by Figure 7.</p> 
  </div>
  <slider animation="fade" :auto="true" :interval="4500" height="420px">
    <slider-item v-for="(image, i) in this.images" :key="i">
      <img :src="image.src" height="300px">
      <p class="caption"><strong>Figure {{ i + 1 }}:</strong> {{ image.caption }} <em>Source:</em> <a class="reference" :href="image.ref">{{ image.ref }}</a></p>
    </slider-item>
  </slider> 
  <div class="row">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfT2FFScsbFX8_HFjBW3lgQ_9jjdDmB5jUD6mNPQs38TZMlZQ/viewform?embedded=true" width="960" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </div>
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
                {
                    src: 'images/monteCristo.jpg',
                    caption: 'What is better than PB&J? A stack of two PB&J, coated in Monte Cristo batter, and fried!',
                    ref: 'http://www.ohbiteit.com/2013/10/pbj-monte-cristo.html'
                },
                {
                    src: 'images/waffle.png',
                    caption: 'Why not make the most American meal an option for breakfast as well?',
                    ref: 'https://www.smuckers.com/recipes/waffle-pbj-8492'
                },
                {
                    src: 'images/classic.jpg',
                    caption: 'You can never beat the classic.',
                    ref: 'http://sierraclub.typepad.com/compass/2010/11/interview-fighting-climate-change-with-pbj.html'
                },
                {
                    src: 'images/quesadilla.jpg',
                    caption: 'This is for those times when there is no bread, but there is still a need for PB&J. In this case, the grain based substrate is a tortilla.',
                    ref: 'http://redtri.com/easy-lunch-ideas-and-recipes/slide/30'
                },
                {
                    src: 'images/grilled.jpg',
                    caption: 'If you can grill chees, you can grill PB&J.',
                    ref: 'https://potatorolls.com/recipes/grilled-pbj-sandwich/'
                },
                {
                    src: 'images/sausage.png',
                    caption: 'This is an example that does not fit the PB&J criteria, but it is noteworth to acknowledge the creativity of infusing bratwurst with PB&J.',
                    ref: 'https://www.lakegenevacountrymeats.com/blog/leahys-sausage/peanut-butter-jelly-bratwurst'
                },
                {
                    src: 'images/smore.jpg',
                    caption: 'In addition to meeting all the criteria for a PB&J sandwich, this s\'more goes the extra mile in making the sandwich extra sweet.',
                    ref: 'https://www.bettycrocker.com/recipes/pb-j-smore/1fa33a97-7205-46ca-b01a-b47df289b328'
                }
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
iframe {
    margin-top: 20px;
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
