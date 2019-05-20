<template>
  <div class="home">
    <div class="home-animation-container">
      <HomeWelcomeAnimation></HomeWelcomeAnimation>
    </div>
    <div class="home-slider-container">
      <HomeWelcomeSlider></HomeWelcomeSlider>
    </div>
    <div class="home-big-message-container">
      <HomeWelcomeMessage></HomeWelcomeMessage>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeWelcomeAnimation from '@/components/HomepageComponents/HomeWelcomeAnimation.vue'
import HomeWelcomeSlider from '@/components/HomepageComponents/HomeWelcomeSlider.vue'
import HomeWelcomeMessage from '@/components/HomepageComponents/HomeWelcomeMessage.vue'

export default {
  name: 'home',
  components: {
    HomeWelcomeAnimation,
    HomeWelcomeSlider,
    HomeWelcomeMessage
  }
}
</script>

<style>
.home{
  /* border: solid .5px black; */
  width: calc(100vw - 26px);
  height: calc(100vh - 16px);
}
.home-animation-container {
  position: absolute;
  float: left;
  width: 100vw;
  margin-top: calc(10vw + 25vh);
  left: calc(-20vw - 5vh);
  /* border: 2px solid red; */
  z-index: -1;
}
.home-slider-container {
  position: absolute;
  float: left;
  width: 60%;
  right: 0;
  margin-top: 40vh;
  height: calc(25vw + 13vh);
  /* border: 2px solid blue; */
}
.home-big-message-container{
  float: left;
  width: 98%;
  margin-top: calc(20vh + 40vw);
}

@media only screen and (min-width: 560px) {
  .home-animation-container {
    margin-top: 200px
  }
  .home-slider-container{
    margin-top: calc(20vh + 20vw);
  }
  .home-big-message-content{
    font-size: 1.3rem;
  }
}

@media only screen and (min-width: 650px) {
  .home-animation-container {
    margin-top: 150px
  }
  .home-slider-container {
    margin-top: calc(10vh + 10vw);
  }
}

@media only screen and (min-width: 650px) {

  .home-slider-container {
    margin-top: calc(20vh + 10vw);
  }
}

</style>
