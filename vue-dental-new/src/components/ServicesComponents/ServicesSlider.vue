<template>
  <div class="slider-body">
    <div class="message-one">
      <transition name="slide-fade">
      <h2 class="slider-body-line" v-if="show">Dental Cleaning</h2>
      </transition>
      <transition name="slide-fade2">
      <h2 class="slider-body-line" v-if="show">Fillings & Sealants</h2>
      </transition>
      <transition name="slide-fade3">
      <h2 class="slider-body-line" v-if="show">Tooth Whitening</h2>
      </transition>
    </div>
    <div class="message-two">
      <transition name="slide-fade-two">
      <h2 class="slider-body-line" v-if="showTwo">Root Canal Treatment</h2>
      </transition>
      <transition name="slide-fade2-two">
      <h2 class="slider-body-line" v-if="showTwo">Extractions, TMJ,</h2>
      </transition>
      <transition name="slide-fade3-two">
      <h2 class="slider-body-line" v-if="showTwo">Crowns & more</h2>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.toggleHomeMessage()
    this.toggleHomeMessageTwo()
  },
  data: function () {
    return {
      show: false,
      showTwo: false,
      sliderMessages: []
    }
  },
  methods: {
    toggleHomeMessage: function () {
      setTimeout(() => {
        this.show = !this.show
      }, 200)
      setInterval(() => {
        this.show = !this.show
      }, 7000)
    },
    toggleHomeMessageTwo: function () {
      setTimeout(() => {
        this.showTwo = true
        setTimeout(() => {
          this.showTwo = false
        }, 5400)
        setInterval(() => {
          this.showTwo = true
        }, 14000)
        setTimeout(() => {
          setInterval(() => {
            this.showTwo = false
          }, 14000)
        }, 5400)
      }, 7800)
    }
  }
}
</script>

<style>

.slider-body{
  padding-left: calc(2vh + 4vw);
  width: 80%;
}

.slider-body-line{
  text-align: left;
}

.home-slider-container{
  font-size: 1.3rem
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade2-enter-active {
  transition: all .5s ease;
}
.slide-fade2-leave-active {
  transition: all .7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade2-enter, .slide-fade2-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade3-enter-active {
  transition: all .8s ease;
}
.slide-fade3-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade3-enter, .slide-fade3-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-two-enter-active {
  transition: all .3s ease;
}
.slide-fade-two-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-two-enter, .slide-fade-two-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade2-two-enter-active {
  transition: all .5s ease;
}
.slide-fade2-two-leave-active {
  transition: all .7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade2-two-enter, .slide-fade2-two-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade3-two-enter-active {
  transition: all .8s ease;
}
.slide-fade3-two-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade3-two-enter, .slide-fade3-two-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
