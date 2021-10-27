<template>
  <div class="carousel">
    <Paddles @paddleClick='handlePaddleClick' />
    <div class="carousel__grid">
      <img v-for='image in data.main' :key='image' :src="`images/${image}.jpg`" :alt="image">
    </div>
  </div>
</template>

<script>
import Paddles from './Paddles.vue'

export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      currentCarouselItem: 0,
      carouselList: []
    }
  },
  watch: {
    currentCarouselItem() {
      this.scrollToView()
    }
  },
  components: {
    Paddles
  },
  mounted() {
    this.carouselList = this.$el.querySelectorAll('.carousel__grid img')
    this.$nextTick(() => {
      this.scrollToView()
    })
  },
  methods: {
    handlePaddleClick(paddlePosition) {
      
      if(paddlePosition === 'end') {
        if(this.currentCarouselItem + 1 > this.carouselList.length -1)
        this.currentCarouselItem = 0
        else this.currentCarouselItem += 1
      }
      else {
        if(this.currentCarouselItem - 1 < 0)
          this.currentCarouselItem = this.carouselList.length -1
        else this.currentCarouselItem -= 1
      }
    },
    scrollToView() {
      const el = this.carouselList[this.currentCarouselItem]
      el.scrollIntoView({behaviour: 'smooth'})
    }
  }

}
</script>

<style lang="scss">
  .carousel {
    height: 100%;
    width: 100%;
    .carousel__grid {      
      height: 100%;
      width: 100%;
      display: flex;
      scroll-snap-type: x mandatory;
      overflow-x: auto;
    }

    img {
      scroll-snap-align: center;
      height: auto;
      width: inherit;
      object-fit: cover;
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }

</style>