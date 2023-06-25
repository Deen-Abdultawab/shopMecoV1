<template>
  <div>
    <div class="cover container">
      <h2>Our Mission & Vision</h2>
      <div class="all">
        <div style="" class="mission">
          <img src="../assets/images/Group1000004166.png" alt="" class="mission-icon1">
          <p>
            Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.
          </p>
          
        </div>
        <div class="mission" style="">
          <img src="../assets/images/Group1000004166.png" alt="" class="mission-icon2">
          <p>
            Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.
          </p>
        </div>
      </div>  
    </div>
    <div class="count-container" ref="countContainer">
      <h4>We connect customers with expert technicians.</h4>
      <div class="control">
      
        <div class=" border-btm countUp">
          <span class="count tech" data-val="50">
            {{ techCount }}
          </span>
          <p>registered technicians</p>
        </div>
      
        <div class="countUp border-btm">
          <span class="count comp" data-val="30">
            {{ compCount }}
          </span>
          <p>registered companies</p>
        </div>
        <div class="countUp">
          <span class="count cust" data-val="70">
            {{ custCount }}
          </span>
          <p>registered customers</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup(){
    const countContainer = ref(null)
    const techCount = ref(0)
    const compCount = ref(0)
    const custCount = ref(0)
    let observer = null
    
    onMounted(() => {
      
      setInterval(() => {
        if(techCount.value < 50){
          techCount.value++
        }

        if(compCount.value < 30){
          compCount.value++
        }

        if(custCount.value < 70){
          custCount.value++
        }
      }, 80);
      
      
    })

  
    return { countContainer, custCount, compCount, techCount }
  }
}
  
</script>

<style scoped>

  .all{
    display:grid; 
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 2rem;
    padding: 1rem 2.8rem;
  }

  .mission{
    display:flex; 
    justify-content: center;
    gap: 1.5rem;
      
  }

  .all p {
    text-align: justify;
    text-justify: inter-word;
  }

  p{
    width: 100%;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    color: #7C7C7C;
    margin: 0;
  }

  img{
    width: 65px;
    height: 65px;
  }

  .cover{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
      margin: auto;
    max-width: 1200px;
    margin-top: 50px;    
  }
    
  .cover h2{
    height: 39px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #350B89;
    margin-bottom: 32px;
  }

  .countUp {
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 35px;
    color: #350B89;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 3rem 0;
  }

  .countUp p{
    height: 35px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 35px;
    text-align: center;
    color: #5007E0;
    padding-top: 17px;
    text-transform: capitalize;
  }

  .control{
    background:#F5F3FF url('../assets/images/mask1.png');
    background-repeat: no-repeat;
    background-position: right;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 40px;
    padding: 2rem ;
  }

  .control img{
    width: 126px;
    height: 128px;
  }

  h4{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 35px;
    color: #7C7C7C;
    text-align: center;
    margin-top: 110px;
  }

  @media only screen and (max-width: 900px) {
    .all{
      grid-template-columns: 1fr;
      gap: 3rem;
      padding: 1rem 1.4rem;
    }

    .all .mission-icon2 {
      order: 2;
    }

    h4 {
      margin: 50px auto 90px;
      padding: 1rem;
    }

    .control {
      flex-direction: column;
      gap: 0;
    }

    .border-btm {
      padding-bottom: 4rem;
      width: 100%;
      border-bottom: 1px solid #fff;
      border-image: linear-gradient(to right, #F5F3FF, #26046A,#F5F3FF );
      border-image-slice: 1;
    }      

    .cover {
      margin-top: 0;
    }
  }

    @media only screen and (max-width: 600px) {
      .mission {
        align-items: center;
        
      }
       
     .mission p{
        font-size: 1.1rem;
      } 

      .cover h2 {
        font-size: 1.63rem;
      }
      
      .all {
        padding: 1rem;
        
      }

      .iCountUp p {
        font-size: 1.2rem;
      }

      h4 {
        margin: 50px auto;
      }

    }
</style>