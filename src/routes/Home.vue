<template>
  <div>
  <slider animation="fade" :auto="false" height="400px">
    <slider-item v-for="(image, i) in this.images" :key="i">
      <div class="row">
        <img :src="image.src" height="350">
        <p class="caption">{{ image.caption }}</p>
      </div>
    </slider-item>
  </slider>
    <p>
      This is the home page.
    </p>
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
}
</style>
