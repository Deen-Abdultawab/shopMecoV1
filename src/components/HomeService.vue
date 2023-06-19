<template>
    <div>
         <div class="cover">
         
                <div class="flex dad">
                    <div v-for="(doc, index) in services" :key="index" class="tech"> 
                    <div class="name">
                    
                    <div class="flexy " style="margin-left: 50px;">{{doc.name}}
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

               <div class="flex dad">
                    <div v-for="(doc, index) in services" :key="index" class="tech"> 
                    <div class="name">
                    
                    <div class="flexy " style="margin-left: 50px;">{{doc.name}}
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
                
                <div class="flex items-center justify-center">
                    <button>Load More</button>
                </div>
                </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {img:'Rectangle 5.png', name:'Car Cleaning',work: 'CleanMech', service: 'Auto-wash'},
                {img:'Rectangle 6.png', name:'Wheel alignment',work: 'BayWork', service: 'Auto-repair'},
                {img:'Rectangle 7.png', name:'Brakepad',work: 'SafeWork ', service: 'Auto-repair'},
            ]
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;600;700;800&family=Licorice&display=swap');
@import url('http://fonts.cdnfonts.com/css/sofia-pro');
    button{

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
    .tech{
        width: 825px;
        height: 400px;
        background: #fff;
        box-shadow: 0px 12px 45px rgba(74, 25, 172, 0.06);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 30px;
        padding-top: 30px;
        margin-right: 30px;
        margin-bottom: 30px;
    }
    .cover{
        width: 70vw;
        
    }
    .dad{
    display: flex;
    justify-content: space-between;
    width: 75vw;
    }
    img{
        width: 465px;
        height: 265px;
    }
    p{
        width: 59px;
        height: 32px;
        background: #F5F3FF;
        border-radius: 10px;
        font-family: 'Sofia Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: center;
        color: #5007E0;
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
        width: 18vw;
        justify-content: space-between;
    }
</style>