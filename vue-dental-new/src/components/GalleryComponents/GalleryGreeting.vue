<template>
  <div class="gallery-greeting-component">
    <div class="image-one">
      <img id="image-one" alt="tooth-diff" src="@/assets/tooth-diff.jpg">
    </div>
    <div class="gallery-greeting">
      <p>
        <span>Smile</span>
      </p>
    </div>
  </div>
</template>

<style>

#image-one{
  position: relative;
  top: calc(-1vh - 3vw);
  z-index: -1;
  width: 100%;
  max-height: 200px;
  left: 0;
  object-fit: cover;
}
.gallery-greeting-component {
position: relative;
top: 20px;
font-size: 400%;
}
.gallery-greeting{
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
letter-spacing: 2px;
color: rgb(33, 120, 160);
}

span {
color: transparent;
animation: blur 10s ease-out infinite;
-webkit-animation: blur 10s ease-out infinite;
}

span:nth-child(1) {
animation-delay: 0.1s;
-webkit-animation-delay: 0.1s;
}
span:nth-child(2) {
animation-delay: 0.2s;
-webkit-animation-delay: 0.2s;
}
span:nth-child(3) {
animation-delay: 0.3s;
-webkit-animation-delay: 0.3s;
}
span:nth-child(4) {
animation-delay: 0.4s;
-webkit-animation-delay: 0.4s;
}
span:nth-child(5) {
animation-delay: 0.5s;
-webkit-animation-delay: 0.5s;
}
span:nth-child(6) {
animation-delay: 0.6s;
-webkit-animation-delay: 0.6s;
}
span:nth-child(7) {
animation-delay: 0.7s;
-webkit-animation-delay: 0.7s;
}

@keyframes blur {
0% {text-shadow:  0 0 100px #6dd3f1; opacity:0;}
5% {text-shadow:  0 0 90px #6dd3f1;}
15% {opacity: 1;}
20% {text-shadow:  0 0 0px #6dd3f1;}
80% {text-shadow:  0 0 0px #6dd3f1;}
85% {opacity: 1;}
95% {text-shadow:  0 0 90px #6dd3f1;}
100% {text-shadow:  0 0 100px #6dd3f1; opacity:0;}
}

@-webkit-keyframes blur {
0% {text-shadow:  0 0 100px #6dd3f1; opacity:0;}
5% {text-shadow:  0 0 90px #6dd3f1;}
15% {opacity: 1;}
20% {text-shadow:  0 0 0px #6dd3f1;}
80% {text-shadow:  0 0 0px #6dd3f1;}
85% {opacity: 1;}
95% {text-shadow:  0 0 90px #6dd3f1;}
100% {text-shadow:  0 0 100px #6dd3f1; opacity:0;}
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
