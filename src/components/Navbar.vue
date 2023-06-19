<template>
  <div class="nav">
    <div class="mobile-navBar">
        <div class="logo">
            <img src="@/assets/images/Maskgroup.png" alt="">
        </div>
        <div class="hamburger" :class="{show: showNav}" @click="showNav = !showNav">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
        </div>
    </div>
    <section class="overlay" :class="{show: showNav}">
      <div class="sidebar">
        <ul class="nav-links">
          <li @click="showNav = false">
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li @click="showNav = false">
            <router-link :to="{ name: 'about' }">About</router-link>
          </li>
          <li @click="showNav = false">
            <router-link :to="{ name: 'contact' }">Contact</router-link>
          </li>
        </ul>
        <div class="user-btns" @click="showNav = false">
          <button class="login-btn btn">
           <router-link :to="{ name: 'login' }">Sign in</router-link>
          </button>
          <button class="signUp-btn btn">
            <router-link :to="{ name: 'started' }">Sign Up</router-link>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
      data (){
        return {
          showNav: false
        }
      }
  }
</script>

<style scoped>

  .nav {
    z-index: 99999;
  }

  

  .logo {
    width: 200px;
  }
  .mobile-navBar {
      width: 92vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 0;
  }

  .hamburger {
      width: 35px;
      height: 35px;
      position: relative;
      background: none;
      cursor: pointer;
      transition: all 0.3s linear;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.35rem;
      z-index: 99999999999;
  }

  .hamburger:hover {
    transform: scale(1.1);
  }

  .hamburger-top, .hamburger-middle, .hamburger-bottom {
      width: 100%;
      height: 3px;
      background: #FFB74C;
      transform: rotate(0);
      transition: all 0.5s;
      display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(4px);
    z-index: -1;
    opacity: 0;
    transition: all 0.3s linear;
    
  }

  .overlay.show {
    opacity: 1;
    z-index: 99999;
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 90vw;
    max-width: 500px;
    background: #26046A;
    transform: translateX(100%);
    transition: all 0.5s linear;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  .show .sidebar {
    transform: translateX(0);
  }

  .nav-links {
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: 3rem;
  }

  .nav-links li {
    cursor: pointer;
    transition: all 0.3s linear;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    max-width: 200px;
    border-radius: 0.5rem;
    padding: 0.3rem;
  }

  .nav-links li:hover {
    margin-left: 5px;
  }

  li a {
    color: white ;
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  .user-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .btn {
    background: #FFB74C;
    border-radius: 30px 0px 30px 30px;
    width: 90%;
    margin: 0 auto;
    height: 50px;
    align-items: center;
    color: #fff;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 21px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s linear;
  }

  .btn:hover {
    background: #865203;
  }

  .signUp-btn {
    border-radius: 0px 30px 30px 30px;
  }

  .btn a {
    color: white;
    font-size: 1.5rem;
  }

  .show .hamburger-top{
      transform: rotate(45deg) translateX(12px) ;
  }
  .show .hamburger-middle{
      display: none;
  }
  .show .hamburger-bottom{
      transform: rotate(-45deg) translateX(6px) translateY(6px);
  }

@media only screen and (max-width: 600px){
  .logo {
    width: 150px;
  }

  .hamburger {
    width: 25px;
  }
}
</style>