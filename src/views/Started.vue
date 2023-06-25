<template>
  <div>
    <div class="container">

    <div class="left-col">
      <div class="logo">
        <a href="/"><img src="../assets/images/Maskgroup.png" alt=""></a>
      </div>

      <div class="quote">
         <img src="../assets/images/Group3721.png" alt="">
      </div>
    </div>

    <div class="right-col" id="form">
      <div class="top-right">
         <h4>
          Already have an account?<router-link :to="{ name: 'login'}">Login</router-link>
        </h4>
      </div>

      <div class="center-form">

        <div class="log">
            <h1>Get Started</h1>
        </div>

        <router-link :to="{ name: 'individual'}">
          <div class="one">
              <div class="img">
                  <img src="../assets/images/Group3702.png" alt="">
              </div>
              <div class="text">
                  <h5>Individual / Car Owners</h5>
                  <p>Personal account to manage your car and keep it in good condition.</p>
              </div>
              <div class="img">
                  <img src="../assets/images/Union.png" alt="">
              </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'business'}">
          <div class="two">
              <div class="img">
                  <img src="../assets/images/Group3699.png" alt="">
              </div>
              <div class="text">
                  <h5>Business</h5>
                  <p>Business account for individual service providers and companies.</p>
              </div>
          </div>
        </router-link>       
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  components: { }
}

</script>

<style scoped>

    body {
      width: 100%;
    }

    img {
      display: block;
      object-fit: cover;
      /* width: 100%; */
    }

    h1{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      color: #1F1F1F;
      margin-bottom: 10px;
      width: 100%;
    }

    p {
      width: 100%;
      margin: 0;
    }

    a{
      color:  #5007E0;
    }

    h4{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #7C7C7C;
      width: 100%;
    }

    h5 {
        font-size: 22px;
        font-weight: 700;
    }

   .mobile-nav {
    display: none;
    width: 100%;
  }

    .container {
      display: grid;
      grid-template-columns: 1.2fr 2.4fr;
      min-height: 100vh;
      max-width: 100vw;    
    }

    .left-col, .right-col {
      display: grid;
      width: 100%;
      height: 100%;
    }

    .left-col {
      background: url('../assets/images/bg2.png');
      background-position: center;
      background-size: cover;
      padding: 2.5rem;
      padding-bottom: 4rem;
      gap: 2rem;
    }

    .left-col div, .right-col div {
      width: 100%;
    }

     .right-col{
     padding: 5rem 3rem 10rem;
     gap: 5rem;     
    }

    
    .top-right {
      display: block;
      position: relative;
      width: 100%;
      text-align: right;
    }

    .log {
        margin-bottom: 3rem;
    }

    .center-form {
      max-width: 550px;
    }

      .one{
        background: #F5F3FF;
        border: 1px solid #5007E0;
        box-sizing: border-box;
        box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding:1rem 30px;
        /* gap: 1rem; */
        justify-content: space-between;
    }

   

    .one .img, .two .img {
        flex-basis: 10%;
    }

    .one div:last-of-type img{
        margin-left: auto;
    }

    .one .text, .two .text {
        flex-basis: 70%;
    }

      .two{
        background: #FFFFFF;
        box-shadow: 0px 5px 54px 3px rgba(55, 5, 153, 0.08);
        border-radius: 10px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        padding: 1rem 30px;
        gap: 1.7rem;
        /* justify-content: space-between; */
    }

@media only screen and (max-width: 1000px) {

      .mobile-nav {
      display: block;
     }
      .container {
        grid-template-columns: 1fr;
      }

      .left-col {
        gap: 8.5rem;
        padding-bottom: 10rem;
      }

      .quote img {
        margin: auto;
      }

      .right-col {
        place-items: center;
      }

      .center-form {
        padding: 0;
      }
     
}

@media only screen and (max-width: 600px) {

        .one, .two {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            text-align: center;
        }

        .one .img, .two .img {
        flex-basis: 100%;
        width: 50px;
        margin: auto;
    }

    .one div:last-of-type img{
        margin: auto;
    }

    .one .text, .two .text {
        flex-basis: 100%;
    }

    .left-col {
      display: none;
    }

    .right-col {
      padding-top: 2rem;
    }

    .mobile-nav {
      display: block;
    }

}

   
</style>