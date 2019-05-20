<template>
  <div class="big-message-container" v-if="show">
    <div class="home-big-message-title">
      <h1>Welcome  to  Alsayeh Family Dentistry</h1>
    </div>
    <div class="home-big-message-content">
      At Alsayeh Dental, we understand that selecting a dentist for you and your loved ones can be a difficult task; therefore, the goal of our site is to provide you with the most useful information about our dental practice. We hope this information will make it easier for you to choose us.
      <div></div>
      <br>
      Dr. Alsayeh and staff work as a team to provide the finest, most personalized care for each of our patients in a safe, friendly and anxiety-free environment. At our office, not only will you be seen by the same dentist for all your healing needs, but our experienced staff will also fill you in on every step of your treatment no matter how small.
      <div></div>
      <br>
      Please take your time browsing through our website and do not hesitate to contact us for any additional information.
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.toggleBigMessage()
  },
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    toggleBigMessage: function () {
      setTimeout(() => {
        this.show = !this.show
      }, 500)
    }
  }
}
</script>

<style>
  .big-message-container {
    margin-top: 80vh;
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 40vh;
  }
  .home-big-message-title {
    font-size: 1.5rem;
    text-align: left;
  }
  .home-big-message-content {
    font-size: 1rem;
    text-align: left;
  }

</style>
