<template>
 <div class="contact-page">
  <header>
  <div class="navbars">
      <Navbar class="mobile-nav"/>
      <DesktopNav />
    </div>
    <div class="main-container">
      <div>
          <div class="body">
            <div class="contact-article">
              <h1>Contact Us</h1>
              <p>
                Have more questions or enquires? Send us a message and we’ll get back to you as soon as possible.
              </p>

              <button class="btn3">Get Started</button>
            </div>
          
            <form class="contact-form">
              <h3 >Send us a message</h3>
              <div style="margin-bottom: 30px" class="input-field">
                <label for="name">Your name</label>
                <br>
                <input type="text" placeholder="Your Name">
              </div>
              <div style="margin-bottom: 30px" class="input-field">
                <label for="name">Your email</label> <br>
                <input type="text" placeholder="Your Mail">
              </div>
              <div class="input-field">
                <label for="name">Your Message</label> <br>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
              </div>

              <button>Submit</button>
            </form>

      </div>
    </div>

 
  </div>
  </header>
 </div>
</template>

<script>
import DesktopNav from '@/components/DesktopNav.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { DesktopNav, Navbar, Footer }
  
}
</script>
form button{
  width: 490px;
  height: 60px;
  background: #FFB74C;
  box-shadow: 0px 6px 50px rgba(74, 25, 172, 0.09);
  border-radius: 30px 0px 30px 30px;
  color: #fff;
  margin-top: 40px;
  font-family: 'Sofia Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 25px;
  display: block;
}
<style scoped>

  .contact-page {
    display: grid;
    gap: 5rem;
    grid-template-rows: 1fr auto;
  }

  header {
    background: url(../assets/images/background.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 741px;
  }

  .mobile-nav {
    display: none;
  }

  .main-container{
    padding: 0 70px;
    padding-top: 15px;
    margin-bottom: 250px;
  }

   .btn3{
    background: #FFB74C;
    border-radius: 30px 0px 30px 30px;
    width: 212px;
    height: 60px;
    margin-top: 16px;
    align-items: center;
    color: #fff;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 21px;
    transition: all 0.3s linear;
  }

  .body{
    padding-top: 70px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    gap: 4rem;
    position: relative;
  }

  .contact-article {
    padding-top: 4rem;
  }

  h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    line-height: 63px;
    color: #FFFFFF;
  }

  label {
    text-transform: capitalize;
  }

  .body p{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 31px;
    color: #DAD2EA;
    width: 100%;
    padding-top: 20px;
  }
 .body img{
    width: 275px;
    height: 404px;
  }
 
  form{
    background: #FFFFFF;
    box-shadow: 0px 12px 60px rgba(99, 45, 206, 0.5);
    border-radius: 20px;
    width: 100%;
    height: 704px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    margin-bottom: 4rem; 
  }
  
  form > div {
    width: 100%;
  }

  h3{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    color: #26046A;
    margin-top: 40px;
    margin-bottom: 40px;
    text-transform: capitalize;
  }

  input, textarea{
    border: 1px solid #B5B5B5;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    height: 55px;
    padding: 0.5rem;
    transition: all 0.3s linear;
  }

  input:hover, textarea:hover {
    border-color: #5007E0;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #5007E0;
  }

  label{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    color: #7C7C7C;
    margin-bottom: 10px;
  }

  textarea{
    background: #FFFFFF;
    border: 1px solid #B5B5B5;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    height: 160px;
  }

  ::placeholder {
    letter-spacing: 1px;
    font-weight: light;
  }

  form button{
    width: 100%;
    height: 60px;
    background: #FFB74C;
    box-shadow: 0px 6px 50px rgba(74, 25, 172, 0.09);
    border-radius: 30px 0px 30px 30px;
    color: #fff;
    margin-top: 40px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 25px;
    transition: all 0.3s linear;
  }

  form button:hover, .btn3:hover {
    background: #865203;
  }

  @media only screen and (max-width: 1000px){
  .main-container {
    padding: 15px 30px 0;
  }

}

  @media only screen and (max-width: 900px) {

    header {
       background: url(../assets/images/bg2.png);
       background-size: cover;
      background-repeat: no-repeat;
    }

    .mobile-nav {
      display: block;
    }

    .body {
      gap: 2rem;
    }

    .contact-article {
      padding-top: 0rem;
    }
  }

  @media only screen and (max-width: 800px) {
    .body {
      grid-template-columns: 1fr;
    }

    header {
      height: auto;
    }

    .main-container {
      height: auto;
      margin-bottom: 400px;
    }

    .contact-form {
      margin-bottom: 5rem;
      height: auto;
      padding-bottom: 1rem;
      
    }

    .contact-article, .contact-form {
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-article {
      text-align: center;
      margin-bottom: 3rem;
    }
    
  }

  @media only screen and (max-width: 600px) {
    .body {
      padding-top: 30px;
    }
    .main-container {
      margin-bottom: 450px;
    }

      .contact-article h1 {
        font-size: 2.2rem;
        line-height: 40px;
    }

     .contact-article p{
      font-size: 1.2rem;
    }

    .main-container{
      padding: 0;
      width: 90vw;
      margin: 0 auto;
    }

    .contact-article {
      width: 80%;
      margin: 0 auto;
    }

    .input-field {
      display: flex;
      align-items: center;
      /* border: 1px solid red; */
      padding: 0.5rem;
      border-radius: 1rem;
      box-shadow: 0px 7px 3px 3px #acacb1;
    }

    .input-field label {
      display: none;
    }

    .input-field input, .input-field textarea {
      border: none;
    }

    .contact-form h3 {
      text-shadow: 5px 5px 3px #acacb1;
    }
  }
    
</style>