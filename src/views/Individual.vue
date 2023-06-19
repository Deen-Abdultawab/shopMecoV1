<template>
  <div class="user-reg">
    <div class="container">
      <div class="left-col">
        <div class="logo">
          <a href="/"><img src="../assets/images/Maskgroup.png" alt="" /></a>
        </div>

        <div class="quote">
          <img src="../assets/images/Group3721.png" alt="" />
        </div>
      </div>
      <div class="right-col-container">
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
              <h1>Register Individual Account</h1>
              <p>
                Your details are required to set up your account and get you
                going.
              </p>
            </div>

            <div class="one">
              <form @submit.prevent="handleFirst">
                <div class="form-input">
                  <label for="name"> Your full name<span>*</span> </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Tolulope Ololade"
                    id="name"
                    required
                  />
                </div>

                <div class="form-input">
                  <label for="mail"> Email address<span>*</span> </label>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter email address"
                    id="mail"
                    required
                  />
                </div>

                <div class="form-input">
                  <label for="password"> Create Password<span>*</span> </label>
                  <br />
                  <div class="password-field">
                    <input
                      type="password"
                      placeholder="Enter password"
                      id="password"
                      required
                    />
                    <button class="placeholder-span">Show</button>
                  </div>

                  <div class="formy">
                    <input type="checkbox" name="" id="" class="checkbox" />
                    <span
                      >I agree to
                      <a href="#" class="terms">terms & conditions</a></span
                    >
                  </div>
                </div>

                <button class="btn btn1">Register Account</button>

                <div class="or">
                  <div class="line"></div>
                  <div class="text">OR</div>
                  <div class="line"></div>
                </div>

                <div class="btn btn2">
                  <img src="../assets/images/Group3707.png" alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Residency info  -->

        <div class="right-col second" v-if="showTwo">

          <div class="top-right">
            <div class="btn-back">
              <a href="#" style="display: flex; align-items: center" @click="handleBackOne">
                <img
                  src="../assets/images/icon.png"
                  alt=""
                  style="width: 20px; height: 20px; margin-right: 10px"
                />
                back
              </a>
            </div>
            <div class="step">
              <h4>STEP 02/03</h4>
              <h6>Residency Info.</h6>
            </div>
          </div>

          <div class="center-form">
            <div class="log">
              <h1>Complete Your Profile</h1>
              <p>
                Your details are required to set up your account and get you
                going.
              </p>
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

                <div class="custom-form residence">
                  <label for="residence"> State of residence </label>
                  <br />
                  <div class="custom-input">
                    <select name="residence" id="residence">
                      <option value="">- - Select - -</option>
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

                <div class="form-input">
                  <label for="address"> Your address </label>
                  <br />
                  <textarea cols="30" rows="10" 
                    placeholder="Enter your address"
                  ></textarea>
                </div>

                <div class="bottom-right">
                  <h4>
                    Need to complete profile later? <a href="#">Click Here</a>
                  </h4>
                </div>

                <button class="btn btn1">Save & Continue</button>

                <div class="bottom">
                  <img src="../assets/images/Group3720.png" alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- service info  -->

        <div class="right-col third" v-if="showThree">
          <div class="top-right">
            <div class="btn-back">
              <a href="#" style="display: flex; align-items: center" @click="handleBackTwo">
                <img
                  src="../assets/images/icon.png"
                  alt=""
                  style="width: 20px; height: 20px; margin-right: 10px"
                />
                back
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
              <p>
                Your details are required to set up your account and get you
                going.
              </p>
            </div>

            <div class="one">
              <form >
                <div class="form-input">
                  <label for="car"> car name </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Mercedez Benz"
                    id="car"
                    required
                  />
                </div>

                <div class=" custom-form">
                  <label for="model"> Car Model </label>
                  <br />
                  <div class="custom-input">
                    <select name="model" id="model">
                      <option value="">-- Select --</option>
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

                <!-- <div class="custom-form">
                  <label for="service"> Required Service(s) </label>
                  <br />
                  <div class="custom-input">
                    <select name="service" id="service">
                      <option value="">-- Select --</option>
                      <option value="">AC Service and repair</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                      <option value="">1998</option>
                    </select>
                  </div>
                  <div class="service">
                    <span>Bodywork, airconditioning, automechanic</span>
                  </div>
                </div> -->

                <div class="bottom-right">
                  <h4>
                    Need to complete profile later? <a href="#">Click Here</a>
                  </h4>
                </div>

                <button class="btn btn1">Save & Continue</button>

                <div class="bottom">
                  <img src="../assets/images/Group3720.png" alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  components: {},
  setup(){
    const showOne = ref(true)
    const showTwo = ref(false)
    const showThree = ref(false)

    function handleFirst(){
      showOne.value = false
      showTwo.value = true

      console.log(showOne.value, showTwo.value, showThree.value)
    }

    function handleSecond(){
      showTwo.value = false
      showThree.value = true
    }

    function handleBackOne(){
      showTwo.value = false
      showOne.value = true
    }

    function handleBackTwo(){
      showThree.value = false
      showTwo.value = true
    }


    return { showOne, showTwo, showThree, handleFirst, handleBackOne, handleSecond, handleBackTwo}
  }
};
</script>

<style scoped>


body {
  width: 100%;
}

h1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #1f1f1f;
  margin-bottom: 10px;
  width: 100%;
}

p {
  width: 100%;
  margin: 0;
}

a {
  color: #5007e0;
}

h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #7c7c7c;
  width: 100%;
}
.container {
  display: grid;
  grid-template-columns: 1.2fr 2.4fr;
  min-height: 100vh;
  max-width: 100vw;
  padding: 0;
}

.right-col-container {
  position: relative;
  /* border: 1px solid red; */
}

.right-col {
  padding: 5rem 2.5rem 10rem;
}

.left-col {
  display: grid;
  width: 100%;
  height: 100%;
}

.left-col {
  background: url("../assets/images/bg2.png");
  background-position: center;
  background-size: cover;
  padding: 2.5rem;
  padding-bottom: 4rem;
  gap: 2rem;
}

.left-col div {
  width: 100%;
}

.quote img{
  width: auto;
  margin: 0 auto;
}

.top-right {
  display: block;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
}

a {
  color: #5007e0;
}
.step {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #7c7c7c;
  text-align: right;
}

.step h6 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #7c7c7c;
}
.step h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5007e0;
}

.center-form {
  max-width: 550px;
  padding-left: 5rem;
}

.log p {
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #7c7c7c;
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
  display: none;
}

:is(.form-input input, .form-input select, .form-input textarea):focus {
  outline: #5007e0;
}

:is(.form-input input, .form-input select, .form-input textarea):hover {
  border: 1px solid #5007e0;
}

/* select {
  padding: 16.5px 30px;
} */

.placeholder-span {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  color: #5007e0;
  cursor: pointer;
  height: 17px;
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
  cursor: pointer;
}

.btn1 {
  background: #5007e0;
  border-radius: 10px;
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
}

.btn2 {
  background: #ffffff;
  border: 1px solid #b5b5b5;
  box-sizing: border-box;
  box-shadow: 0px 6px 50px rgba(74, 25, 172, 0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.or {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 1rem;
}

.line {
  max-width: 192px;
  height: 0px;
  border: 1px solid #7c7c7c;
  flex: 1;
}

.text {
  flex-basis: 10%;
  text-align: center;
}

.first {
  display: block;
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
    padding: 5rem 1.25rem 10rem;
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

@media only screen and (max-width: 500px) {
  .log h1 {
    font-size: 1.5rem;
  }

  .log p {
    font-size: 1.1rem;
    line-height: 1.5;
  } 

  form label {
    font-size: 1rem;
  }
  
}
</style>
