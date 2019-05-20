<template>
  <div class="services-body">
    <div class="dark-background"></div>
    <div class="services-animation-container">
      <ServicesAnimation></ServicesAnimation>
    </div>
    <div class="services-slider-container">
      <ServicesSlider></ServicesSlider>
    </div>
  </div>
</template>

<script>
import ServicesAnimation from '@/components/ServicesComponents/ServicesAnimation.vue'
import ServicesSlider from '@/components/ServicesComponents/ServicesSlider.vue'
export default {
  name: 'services',
  components: {
    ServicesAnimation,
    ServicesSlider
    // ServicesMessage
  }
}
</script>

<style>
.dark-background{
  margin-top: 10%;
  height: 180px;
  width: 100%;
  z-index: -1;
  background-color: rgb(33, 31, 48)
}
.services-body{
  left: 0;
  position: absolute;
  width: 100vw;
  margin-top: 24vh;
  z-index: -1;
}
.services-slider-container {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: calc(5vh + 5vw);
  margin-left: 46%;
  width: 60%;
  float: right;
  font-size: 1.13rem;
  color: white;
}
.services-animation-container {
  position: absolute;
  top: 0;
  float: left;
  width: 100%;
  z-index: 0;
}

@media only screen and (min-width: 560px) {
  .dark-background{
    height: 250px;
  }
}

@media only screen and (min-width: 800px) {
  .dark-background{
    height: 350px;
  }
  .slider-body{
    padding-top: 20px;
  }
  .message-one{
    font-size: 1.2rem;
  }
  .message-two{
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 1025px) {
  .home-slider-container{
    margin-top: calc(10vh + 10vw)
  }
  .slider-body{
    padding-left: 10%;
    padding-top: 0px;
    width: 100%;
  }
  .message-one{
    font-size: 1.6rem;
  }
  .message-two{
    font-size: 1.6rem;
  }
}

</style>
