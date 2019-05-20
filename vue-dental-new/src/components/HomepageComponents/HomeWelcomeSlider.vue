<template>
  <div class="slider-body">
    <div class="message-one">
      <transition name="slide-fade">
      <h2 class="slider-body-line" v-if="show">Providing the finest</h2>
      </transition>
      <transition name="slide-fade2">
      <h2 class="slider-body-line" v-if="show">professional service</h2>
      </transition>
      <transition name="slide-fade3">
      <h2 class="slider-body-line" v-if="show">and friendly care.</h2>
      </transition>
    </div>
    <div class="message-two">
      <transition name="slide-fade-two">
      <h2 class="slider-body-line" v-if="showTwo">Personalized experience,</h2>
      </transition>
      <transition name="slide-fade2-two">
      <h2 class="slider-body-line" v-if="showTwo">the newest technology</h2>
      </transition>
      <transition name="slide-fade3-two">
      <h2 class="slider-body-line" v-if="showTwo">and excellence in service</h2>
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
      // .2sec initial toggle
      setTimeout(() => {
        this.show = !this.show
      }, 200)
      // 7secs delay continuous toggle
      setInterval(() => {
        this.show = !this.show
      }, 7000)
    },
    toggleHomeMessageTwo: function () {
      // smooth out transitions by toggling message off before next message
      setTimeout(() => {
        // initial toggle after 7.8 sec
        this.showTwo = true

        // 5.2 sec delay to turn off
        setTimeout(() => {
          this.showTwo = false
        }, 5200)

        // every 14 secs continuous toggle true
        setInterval(() => {
          this.showTwo = true
        }, 14000)

        // 5.2 sec delay
        setTimeout(() => {
          // 14 sec delay to toggle false
          setInterval(() => {
            this.showTwo = false
          }, 14000)
        }, 5200)
      }, 7800)
    }
  }
}
</script>

<style>

.slider-body{
  width: 100%;
}

.slider-body-line{
  text-align: left;
}

.home-slider-container{
  font-size: 1vw;
}

.message-one{
  font-size: 2.6vw;
}

.message-two{
  font-size: 2.6vw;
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
