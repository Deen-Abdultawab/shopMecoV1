<template>
    <ssr-carousel :slides-per-page='4' loop peek='80' center  >
  <slide :index='1'>
    <div class="first">
        <img src="../assets/images/Rectangle 5751.png" alt="" class="back">
       <p class="top">Auto-Service Provider</p>
    </div>
  
  </slide>
  <slide :index='2'>
    <div class="first">
        <img src="../assets/images/Rectangle 5751.png" alt="" class="back">
       <p class="top">Auto-Service Provider</p>
    </div>
  </slide>
  <slide :index='3'>
    <div class="first">
        <img src="../assets/images/Rectangle 5751.png" alt="" class="back">
       <p class="top">Auto-Service Provider</p>
    </div>
  </slide>
  <slide :index='4'>
      <div class="first">
        <img src="../assets/images/Rectangle 5751.png" alt="" class="back">
       <p class="top">Auto-Service Provider</p>
    </div>
  </slide>
  <slide :index='2'>
      <div class="first">
        <img src="../assets/images/Rectangle 5751.png" alt="" class="back">
       <p class="top">Auto-Service Provider</p>
    </div>
  </slide>
  <slide :index='2'>
      <div class="first">
        <img src="../assets/images/Rectangle 5751.png" alt="" class="back">
       <p class="top">Auto-Service Provider</p>
    </div>
  </slide>
  <slide :index='2'>
      <div class="first">
        <img src="../assets/images/Rectangle 5751.png" alt="" class="back">
       <p class="top">Auto-Service Provider</p>
    </div>
  </slide>
  
</ssr-carousel>
</template>
 
<script>
  import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
 
  export default {
    name: 'MyComponent',
    components: { SsrCarousel },
     buildModules: [ 'vue-ssr-carousel/nuxt' ]
  }
  
</script> 

<style>

slide{
margin-top: 30px;
      
    display: flex;
    align-items: center;
    justify-content: center;
}

.back{
  z-index: 1;
  width: 430px;
  height: 210px;
}
.top{
  position: relative;
  top: -60px;
height: 48px;
font-family: 'Sofia Pro';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 0.01em;
color: #FFFFFF;
}
    
</style>
