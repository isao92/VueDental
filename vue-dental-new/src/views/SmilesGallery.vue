<template>
  <div class="smiles-gallery-container">
    <div class="gallery-greeting-container">
      <GalleryGreeting></GalleryGreeting>
    </div>
    <div class="gallery-images-container">
      <GalleryImages></GalleryImages>
    </div>
  </div>
</template>

<script>
import GalleryGreeting from '@/components/GalleryComponents/GalleryGreeting.vue'
import GalleryImages from '@/components/GalleryComponents/GalleryImages.vue'
export default {
  name: 'services',
  components: {
    GalleryGreeting,
    GalleryImages
  }
}
</script>

<style>
.smiles-gallery-container{
  position: absolute;
  float: left;
  margin-top: 150px;
  width: 100%;
  top: 0;
  left: 0;
}
.gallery-greeting-container{
  font-size: 3.5vw;
}
.gallery-images-container{
  font-size: 2.7vw;
}

@media only screen and (min-width: 850px) {
  #image-one {
    top: calc(-15vh - 3vw)
  }
  img {
    max-height: calc(10vh + 10vw);
  }
}

</style>
