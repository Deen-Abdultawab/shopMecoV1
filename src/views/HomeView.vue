<template>
  <div>
    <div class="daddy">
      <header>
        <div class="navbars">
          <Navbar class="mobile-nav"/>
          <DesktopNav />
        </div>

        <div class="main-container" id="container">
          <div>
            <div class="body">
              <div class="index-article">
                <h1>Find and Hire local Mechanics near you with ShopMeco</h1>
                <p>
                  Give your car the right service it needs with a unique
                  automechanic shop that links you with the best, competent and
                  effective tecnicians.
                </p>

                 <button class="btn3">
                  <router-link :to="{ name: 'started'}">Get Started</router-link>
                </button>
              </div>
              <div class="index-img">
                <div class="img-box1">
                  <img
                    src="@/assets/images/Rectangle27.png"
                    alt=""
                    class="overlay1"
                  />
                  <img src="@/assets/images/Rectangle25.png" alt="" class="img1" />
                </div>

                <div class="img-box2">
                  <div>
                    <img
                      src="@/assets/images/Rectangle27(1).png"
                      alt=""
                      class="overlay2"
                    />
                    <img src="@/assets/images/Rectangle25(1).png" alt="" class="img2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="other-containers">
        <Brand />
        <Service />
        <HomeCarousel />
        <Testimony />
      </div>
    </div>
  </div>
</template>

<script>
import DesktopNav from "@/components/DesktopNav.vue";
import Navbar from "@/components/Navbar.vue";
import HomeCarousel from '@/components/HomeCarousel.vue'
import Brand from '@/components/Brand.vue'
import Service from '@/components/Service.vue'
import Testimony from '@/components/Testimony.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { HomeCarousel, Brand, Service, Testimony, DesktopNav, Navbar, Footer },
};
</script>

<style scoped>
header {
  background: url(../assets/images/background.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.main-container {
  padding: 0 50px; 
  padding-top: 15px;
  margin-bottom: 100px;
}

.btn3 {
  background: #ffb74c;
  border-radius: 30px 0px 30px 30px;
  width: 212px;
  height: 60px;
  margin-top: 30px;
  align-items: center;
  color: #fff;
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
  transition: all 0.3s linear;
}

.btn3:hover {
  background: #865203;
}

.body {
  padding-top: 90px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  align-items: start;
  gap: 3rem;
}

.img-box1,
.img-box2 {
  position: relative;
}

.img-box1 img,
.img-box2 img {
  max-width: 100%;
}

.index-img {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
}

h1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 3.25rem;
  line-height: 62.93px;
  color: #ffffff;
}

.overlay1,
.overlay2 {
  position: absolute;
  max-width: 100%;
}

.img2 {
  margin-left: 1rem;
  margin-top: 15rem;
}

.overlay1 {
  z-index: 99;
  top: -1.3rem;
  left: -1.3rem;
}

.overlay2 {
  z-index: 99;
  right: 0;
  top: 13rem;
  left: -1.3rem;
}

.body p {
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  color: #dad2ea;
  padding-top: 20px;
}

@media only screen and (max-width: 1045px) {
  .index-article {
    padding-top: 1rem;
  }
  .main-container {
    padding: 15px 50px 0;
  }

  .index-article p {
    font-size: 1.3rem;
  }

  .index-article h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
}

@media only screen and (max-width: 900px) {
  header {
    background: url(../assets/images/bg2.png);
    height: auto;
  }
  .main-container {
    padding: 0 50px;
    height: 100%;
    margin-bottom: 100px;
  }

  .mobile-nav {
    display: block;
  }

  .body {
    gap: 2rem;
    grid-template-columns: 1fr;
    place-items: center;
  }

  .index-article {
    text-align: center;
    margin-bottom: 3.5rem;
  }

  .index-img {
    gap: 2rem;
  }

  .img2 {
    margin-top: 0;
  }

  .overlay2 {
    top: -1.3rem;
  }
}

@media only screen and (max-width: 600px) {
  .index-article h1 {
    font-size: 2.2rem;
    line-height: 40px;
  }

  .index-article p {
    font-size: 1.2rem;
  }

  .body {
    padding-top: 30px;
  }

  .main-container {
    padding: 0 30px;
    margin-bottom: 150px;
  }
}
</style>
