<template>
  <div class="body">
    
    <router-view/>

    <Footer class="footer"/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import DesktopNav from './components/DesktopNav.vue';
export default {
  components: { Footer, Navbar, DesktopNav }
}

</script>

<style>
  .navbars {
   
    z-index: 99999999999;
    background: transparent;
    
    /* display: none; */
  }

  .navbars .overlay.show {
    min-height: 100vh;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(6px);
  }

  .navbars .sidebar {
    background: #26046A;
    min-height: 100vh;
    /* height: auto; */
  }
  .mobile-nav {
    display: none;
  }

  .body {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  

  nav a.router-link-exact-active {
    color: #42b983;
  }

  @media only screen and (max-width: 900px){
    .mobile-nav{ 
      display: block;
    }
  }
</style>
