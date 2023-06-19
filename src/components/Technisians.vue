<template>
    <div class="mission-container">
        <div class="cover">
                <h2>Meet Some of Our registered Technicians</h2>

                <div class="tech">
                    <div v-for="(doc, index) in technician" :key="index" class="single"> 
                        <img  :src="require('@/assets/images/' + doc.img)" alt="" />
                        <div class="avatar_name">{{doc.name}}</div>
                        <div class="avatar_skills">{{ doc.work }}</div>
                    </div>
                </div>
        </div>
        <div class="trust ">
        <h3>
            Want to fix your car at an affordable price and with trusted technicians?
        </h3>
        <button>
            Sign me up
        </button>
        
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            technician: [
                {img:'tech1.png', name:'Jacob Jones',work: 'CEO at CleanMech'},
                {img:'tech2.png', name:'Jenny Wilson',work: 'Technician at safeDrive'},
                {img:'tech3.png', name:'Annette Black',work: 'Manager at mechatronics '},
                {img:'tech4.png', name:'Esther Howard',work: 'Automechanic at BayWork'}

            ]
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;600;700;800&family=Licorice&display=swap');
@import url('http://fonts.cdnfonts.com/css/sofia-pro');

*, 
::before, 
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.mission-container {
    padding: 0 2rem;
}

.cover{
    margin-top: 120px;
    margin-bottom: 120px;
}
.cover h2{
    /* height: 39px; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    text-transform: capitalize;
    color: #350B89;
    align-items: center;
    padding-bottom: 60px;
    

}
    .tech {
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .tech img {
        width: 100%;
        object-fit: cover;
        display: block;
    }

    .trust{
        background: url('../assets/images/mask.png'), #7029FF;
        border-radius: 20px;
        padding: 2rem;
        /* height: 203px; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        max-width: 95%;
        margin: auto;
        margin-bottom: 100px;
        
    }
    h3{

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        color: #FFFFFF;
        width: 100%;
    }

    button{
        width: 208px;
        height: 60px;
        background: #FFB74C;
        border-radius: 30px 0px 30px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 18px 40px 17px;
        color: #fff;
        transition: all 0.3s linear;
    }

    button:hover {
        background: #865203;
    }

     @media only screen and (max-width: 900px) {
        .trust {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
        }

        button {
            width: 100%;
        }

        .cover h2 {
            margin-bottom: 1.2rem;
            padding: 0;
        }

        .tech {
            flex-direction: column;
        } 

        .mission-container {
            padding: 0 1rem;
        }

     }

    @media only screen and (max-width: 600px) {
    
        h3{
        /* width: 300px; */
        font-size: 1.2rem; 
        line-height: 20px;
        }

        .cover {
            margin-top: 3rem;
        }

        .cover h2 {
            font-size: 1.63rem;
        }
    }
</style>