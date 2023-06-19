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
      
      <div class="right-col first" v-if="showOne">
        <div class="top-right">
          <div class="btn-back">
            <router-link :to="{ name: 'started'}" style="display:flex; align-items: center;">
              <img src="../assets/images/icon.png" alt="" style="width:20px; height:20px; margin-right: 10px;"> back
            </router-link>
          </div>
          <div class="step">
            <h4>STEP 01/03</h4>
            <h6>Personal Info.</h6>
          </div>
        </div>

        <div class="center-form">

          <div class="log">
            <h1>Register Business Account</h1>
            <p>Your details are required to get started with providing services.</p>
          </div>

          <div class="one">
            <form @submit.prevent="handleFirst">

              <div class="form-input">
                <label for="name" >
                  Your full name<span>*</span>
                </label> 
                <br>
                <input type="text" placeholder="Tolulope Ololade" id="name" required v-model="name">
              </div>

              <div class="form-input">
                <label for="mail" >
                  Email address<span>*</span>
                </label> 
                <br>
                <input type="email" placeholder="Enter email address" id="mail" required>
              </div>

              <div class="form-input">
                <label for="password">
                  Create Password<span>*</span>
                </label> 
                <br>
                <div class="password-field">
                  <input type="password" placeholder="Enter password" id="password" required>
                <button class="placeholder-span">Show</button>
                </div>

                <div class="formy">
                    <input type="checkbox" name="" id="" class="checkbox"> 
                    <span >I agree to <a href="#" class="terms">terms & conditions</a></span> 
                </div>
              </div>    

              <button class=" btn btn1">Register Account</button>

              <div class="or">
                  <div class="line"></div>
                  <div class="text">OR</div>
                  <div class="line"></div>
              </div>

              <div class="btn btn2">
                <img src="../assets/images/Group3707.png" alt="">
              </div>
            </form>

          </div>

        </div>
      </div>


        <!-- Workshop info  -->

      <div class="right-col second" v-if="showTwo">
        <!-- <navbar class="mobile-nav"/> -->

        <div class="top-right">
          <div class="btn-back">
            <a href="#" style="display:flex; align-items: center;" @click="handleBackOne">
            <img src="../assets/images/icon.png" alt="" style="width:20px; height:20px; margin-right: 10px;"> back
          </a>
          </div>
          <div class="step">
            <h4>STEP 02/03</h4>
            <h6>Workshop Info.</h6>
          </div>
        </div>

        <div class="center-form">

          <div class="log">
             <h1>Complete Your Profile</h1>
            <p>Your details are required to get started with providing services.</p>
          </div>

          <div class="one">
            <form @submit.prevent="handleSecond">
                <div class="custom-form">
                  <label for="number"> Your phone number </label>
                  <br />
                  <div class="custom-input">
                    <div class="country-details">
                      <span class="flag"></span>
                      <select class="call-codes">
                        <option>+234</option>
                        <option>+233</option>
                        <option>+200</option>
                      </select>
                    </div>
                    <input type="number" placeholder="07032135453">
                  </div>
                </div>

              <div class="form-input">
                <label for="workshop" >
                  Workshop name
                </label> 
                <br>
                <input type="text" placeholder="Enter your workshop name" id="workshop" required>      
              </div>

              <div class="form-input">
                <label for="address">
                  Your address
                </label> 
                <br>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Enter your workshop address"></textarea>
              </div> 

              <div class="bottom-right">
                <h4>Need to complete profile later? <a href="#">Click Here</a></h4>
              </div>  

              <button class=" btn btn1">Save & Continue</button>

              <div class="bottom">
                <img src="../assets/images/Group3720.png" alt="">
              </div>
            </form>
          </div>

        </div>
      </div>


      <!-- service info  -->

       <div class="right-col third" v-if="showThree">
        <div class="top-right">
          <div class="btn-back">
            <a href="" style="display:flex; align-items: center;" @click="handleBackTwo">
            <img src="../assets/images/icon.png" alt="" style="width:20px; height:20px; margin-right: 10px;"> back
          </a>
          </div>
          <div class="step">
            <h4>STEP 03/03</h4>
            <h6>Service Info.</h6>
          </div>
        </div>

        <div class="center-form">

          <div class="log">
            <h1>Almost Done!</h1>
            <p>Your details are required to get started with providing services.</p>
          </div>

          <div class="one">
            <form action="">

              <div id="">
                <label for="photo" >
                  Workshop photo
                </label> 
                <br>
                <div class="photo-box">
                  <img src="../assets/images/Group3620.png" alt="" >
                  <div class="photo-text">
                    <span>Drag and drop or </span> 
                    <div id="file">
                      <div class="fake-file">
                        <input placeholder="Browse">
                      </div>
                      <input type="file" id="real-file">
                    </div>
                  </div>
                </div>
              </div>

              <div class="custom-form">
                <label for="model" >
                  Offered Services
                </label> 
                <br>
                <div class="custom-input">
                    <select name="service" id="service">
                      <option value="">- - Select services you offer - -</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                    </select>
                  </div>   
              </div>
             

              <div class="bottom-right">
                <h4>Need to complete profile later? <a href="#">Click Here</a></h4>
              </div>  

              <button class=" btn btn1">Save & Continue</button>

              <div class="bottom">
                <img src="../assets/images/Group3720.png" alt="">
              </div>
            </form>
          </div>

        </div>
      </div>
        <!-- end of service info  -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  components: {},
  setup(){
    const showOne = ref(false)
    const showTwo = ref(false)
    const showThree = ref(true)
    const name = ref('')

    function handleFirst(){
      showOne.value = false
      showTwo.value = true
      console.log(name.value)

      console.log(showOne.value, showTwo.value, showThree.value)
    }

    function handleSecond(){
      showTwo.value = false
      showThree.value = true
      console.log(name.value)
    }

    function handleBackOne(){
      showTwo.value = false
      showOne.value = true
      console.log(name.value)
    }

    function handleBackTwo(){
      showThree.value = false
      showTwo.value = true
      console.log(name.value)
    }


    return { showOne, showTwo, showThree, handleFirst, handleBackOne, handleSecond, handleBackTwo, name}
  }
};
</script>

<style scoped>

  body {
    width: 100%;
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

  .mobile-nav {
    display: none;
    width: 100%;
  }

  .container {
  display: grid;
  grid-template-columns: 1.2fr 2.4fr;
  min-height: 100vh;
  max-width: 100vw;
  padding: 0;
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

  .quote img, .bottom img {
    width: auto;
    margin: 0 auto;
    /* border: 1px solid red; */
  }

  .right-col{
    padding: 5rem 2.5rem 10rem;
    gap: 5rem;     
  }

  
  .top-right {
    display: block;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
  }

  a{
    color:  #5007E0;
    }
    .step{
      
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #7C7C7C;
        text-align: right;
    }

    .step h6{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #7C7C7C;
    }
    .step h4{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #5007E0;
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

  .log h1 {
    font-size: 36px;
  }

  .form-input {
    margin-bottom: 2rem;
  }

  .password-field {
    position: relative;
  }

  label span {
    color: red;
    display: none;
  }

  

  :is(.form-input input, .form-input select, .form-input textarea):focus {
    outline: #5007e0;
  }

  :is(.form-input input, .form-input select, .form-input textarea):hover {
    border: 1px solid #5007e0;
  }

  .placeholder-span {
    position: absolute;
    left: 85%;
    top: 50%;
    transform: translateY( -50%);
    font-size: 15px;
    color: #5007E0;
    cursor: pointer;
    height: 17px;

  }

   .formy .forget-password {
    font-size: 12px;
  }

  .checkbox {
    margin-right: 5px;
  }

  span a {
    text-decoration: underline;
    font-weight: 700;
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
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
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

  .bottom-right {
    width: 100%;
    text-align: right;
    margin: 1rem 0 0.5rem 0;
    font-size: 12px;
  }

  .bottom {
    display: grid;
    place-items: center;
    margin-top: 2rem;
    width: 100%;
  }

  .photo-box {
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 2rem;
    border: 2px dashed #5007E0;
  }

  #file {
    position: relative;
    max-width: 100px;
    cursor: pointer;
    z-index: 3;
  }

  .fake-file {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    text-align: left;
  }

  .fake-file input {
    border: none;
    height: 100%;
    text-align: left;  
     background: transparent;  
  }

  .fake-file input::placeholder {
    color: var(--primary-color)
  }

  .photo-box #real-file {
    position: relative;
    text-align: right;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
  }

  .photo-text {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .photo-text span {
    font-size: 1rem;
    color: var(--promary-gray);
    font-weight: 700;
    /* padding: 0.5rem; */
   
   
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

    .formy span {
    font-size: 13px;
  }
  }

   @media only screen and (max-width: 480px){
    .terms {
    display: block;
  }
}



   
</style>