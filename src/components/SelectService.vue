<template>
    <div class="main">
    <h1>Service Details</h1>
       <div class="flexo">
             <div class="card1">
             <div class="flexp dad">
                    <div v-for="(doc, index) in services" :key="index" class="tech"> 
                   <div>
                     <div class="name">
                    
                    <div class="flexy" style="margin-left: 50px;">{{doc.name}}
                    <div>
                        <p>4.5</p>
                    </div>
                    </div>
                    
                    </div>
                <div class="skills" style="margin-left: 50px;">{{ doc.work }}</div>
                    <img  :src="require('@/assets/images/' + doc.img)" alt="" />
                    
                <div class="flex justify-between">
                    <h6 style="margin-left: 50px;">{{doc.service}}</h6>
                    <a href="/sidebar/details"><button>VIEW DETAILS</button></a>
                </div>
                   </div>
                </div>
                </div>
        
        </div>
        <div class="card2">
        <h2>Filters</h2>
     <form action="">
     <h3>Type of Service</h3>
               <div >
            <input type="checkbox"> <span style="margin-left: 0px;">Auto wash</span>
            <!-- <h3 style="margin-left: 10px;">Auto wash</h3> -->
        </div>
           <div>
             <input type="checkbox"> <span style="margin-left: 0px;">Auto repair</span>
        </div>
           <div>
             <input type="checkbox"> <span style="margin-left: 0px;">Auto service</span>
        </div>
           <div>
             <input type="checkbox"> <span style="margin-left: 0px;">Auto part</span>
        </div>

        <h4>Availability</h4>
         <div>
             <input type="checkbox"> <span style="margin-left: 0px;">All services</span>
        </div>
           <div>
             <input type="checkbox"> <span style="margin-left: 0px;">Services closer to my location</span>
        </div>

        <h4>Rating</h4>
        <div>
             <v-slider
      v-model="length"
      color="#5007E0"
      min="1"
      max="5"
    ></v-slider>
    <div class="rate">{{length}}</div>
        </div>

        <button>Apply Filters</button>
     </form>
        
        </div>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {img:'Rectangle 5.png', name:'Car Cleaning',work: 'CleanMech', service: 'Auto-wash',},
                {img:'Rectangle 6.png', name:'Wheel alignment',work: 'BayWork', service: 'Auto-repair'},
                {img:'Rectangle 7.png', name:'Brakepad',work: 'SafeWork ', service: 'Auto-repair'},
                {img:'Rectangle 5.png', name:'Car Cleaning',work: 'CleanMech', service: 'Auto-wash'},
                {img:'Rectangle 6.png', name:'Wheel alignment',work: 'BayWork', service: 'Auto-repair'},
                {img:'Rectangle 7.png', name:'Brakepad',work: 'SafeWork ', service: 'Auto-repair'},
            ],
            length: 3,
            rating: 3.5,
        }
        
    },

 

    
}
</script>

<style scoped>
    .main{
        padding: 0 70px;
        background: #E5E5E5;
    }
  
    .card1{
        padding-top: 20px;
    }
    .flexo{
        display: flex;
        justify-content: space-between;
    }
    .card2{
        width: 327px;
        height: 632px;
        background: #FFFFFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        margin-top: 30px;
    }

    h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        color: #1F1F1F;
    }
    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #1F1F1F;
    }
    input{
        height: 12.5px;
        width: 12.5px;
    }
    form h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #1F1F1F;
        padding-bottom: 21px ;
    }
    form{
        padding-top: 30px;
    }
    span{
        font-family: 'Sofia Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        color: #7C7C7C;
    }
    form h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #1F1F1F;
        padding-top: 40px;
        padding-bottom: 21px;
    }
    form button{
        width: 244px;
        height: 38px;
        left: 1077px;
        top: 735px;
        background: #5007E0;
        border-radius: 5px;
        font-family: 'Sofia Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        color: #FFFFFF;
    }
     .dad{
    display: flex;
    justify-content: space-between;
    width: 5vw;
    }
      .name{
        font-family: 'Sofia Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 22px;
        color: #000000;
    }
    .work{
        font-family: 'Sofia Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        color: #7C7C7C;
    }
    .flexy{
        display: flex;
        width: 20vw;
        margin-bottom: 30px;
        justify-content: space-between;
        padding-right:  30px;
        
    }

    a  button{

        width: 105px;
        height: 35px;
        left: 526px;
        top: 711px;
        background: #5007E0;
        border-radius: 5px;
        font-family: 'Sofia Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 12px;
        color: #FFFFFF;
        margin-right: 50px;
    }
    .flexp{
        display: grid;
        grid-template-columns: 1fr 1fr ;
    }
    img{
        width: 495px;
        height: 365px;
        padding-bottom: 20px;
        padding-top: 10px;
        border-radius: 10px;
    }
    .tech{
        background-color: #fff;
        padding-top: 20px;
        padding-bottom: 20px;
        margin: 10px 20px;
        margin-left: 20px;
        border-radius: 20px;
    }
    .rate{
        background: #F5F3FF;
        border: 1px solid #D4CCFF;
        box-shadow: 0px 12px 45px rgba(74, 25, 172, 0.03);
        border-radius: 6px;
        width: 52px;
        height: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 70%;
        margin-top: -20px;
        margin-bottom: 20px;
    }
    

</style>