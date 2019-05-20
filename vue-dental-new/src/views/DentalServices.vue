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
  position: absolute;
  margin-top: 10%;
  left: -10px;
  height: 180px;
  width: 110%;
  z-index: -1;
  background-color: rgb(33, 31, 48)
}
.services-body{
  position: absolute;
  width: 99vw;
  margin-top: 24vh;
  z-index: -1;
}
.services-slider-container {
  position: absolute;
  margin-top: calc(5vh + 5vw);
  margin-left: 46%;
  width: 60%;
  float: right;
  font-size: 1.13rem;
  color: white;
}
.services-animation-container {
  position: absolute;
  float: left;
  width: 100%;
  z-index: -1;
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
    font-size: 2.3rem;
  }
  .message-two{
    font-size: 2.3rem;
  }
}

</style>
