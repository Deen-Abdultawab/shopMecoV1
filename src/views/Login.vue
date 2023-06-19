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

    <div class="right-col">
    
     
      <div class="top-right">
         <h4>
          Don't have an account?<router-link :to="{ name: 'started'}">Register</router-link>
        </h4>
      </div>

      <div class="center-form">

      <div class="log">
        <h1>Login</h1>
        <p>
          Login to your account and explore our services and proficient technicians.
        </p>
      </div>

      <div class="one">
        <form action="">
          <div class="form-input">
            <label for="name" >Email address</label> <br>
            <input type="email" placeholder="TolulopeOlolade@gmail.com" required>
          </div>

          <div class="form-input">
            <label for="name">Password</label> <br>
            <div class="password-field">
              <input type="password" placeholder="Enter Password" required>
              <button class="placeholder-span">Show</button>
            </div>
            <div class="formy">
              <div>
                  <input type="checkbox" name="" id="" class="checkbox"> <span>Remember me</span> 
              </div>

              <div>
                <a href="/">Forget Password?</a>
              </div>
            </div>
          </div>

          <button class=" btn btn1">Login</button>

          <div class="or">
              <div class="line"></div>
              <div class="text">OR</div>
              <div class="line"></div>
          </div>

          <button class="btn btn2"><img src="../assets/images/Group3707.png" alt=""></button>
        </form>
      </div>
      </div>

      
    
    </div>
  </div>
  </div>
</template>

<script>

export default {
}

</script>

<style scoped>

  body {
    width: 100%;
  }

  img {
    display: block;
    object-fit: cover;
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
    padding: 5rem 2.5rem 10rem;
    gap: 5rem;     
  }

  
  .top-right {
    display: block;
    position: relative;
    width: 100%;
    text-align: right;
  }

  .center-form {
    max-width: 550px;
    padding-left: 5rem;
  }

  .log p{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #7C7C7C;
    padding-bottom: 55px;
  }

  .form-input {
    margin-bottom: 2rem;
  }

  .password-field {
    position: relative;
  }

  label{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    color: #7C7C7C;
    margin-bottom: 5px;
  }

  .input:focus {
    outline: #5007E0;
  }

  input:hover{
    border: 1px solid #5007E0;
  }

  input::placeholder{
    font-size: 15px;
    letter-spacing: 1.2;
  }

  .placeholder-span {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY( -50%);
    font-size: 15px;
    color: #5007E0;
    cursor: pointer;
    height: 17px;
  }

   .formy{
    width: 100%;
    display: flex;
    margin-top: 5px;
  }

  .formy div:last-child {
    text-align: right;
  }

  .checkbox {
    margin-right: 5px;
  }

  .btn {
    width: 100%;
    padding: 1rem 2rem;
  }

  .btn1{
    background: #5007E0;
    border-radius: 10px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: #FFFFFF;
  }

  .btn2{
    background: #FFFFFF;
    border: 1px solid #B5B5B5;
    box-sizing: border-box;
    box-shadow: 0px 6px 50px rgba(74, 25, 172, 0.05);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

   .or{
    display: flex;
    /* align-content: center; */
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    /* border: 1px solid red; */
    padding: 1rem;
  }


  .line{
      max-width: 192px;
      height: 0px;
      border: 1px solid #7C7C7c;
      flex: 1;
  }

  .text {
    flex-basis: 10%;
    text-align: center;
  }

  @media only screen and (max-width: 1200px) {
    .center-form {
      padding-left: 0rem;
    }
     
  }

  @media only screen and (max-width: 900px) {

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

   

  


    
    

    

    

  


   

    /*  */

</style>
