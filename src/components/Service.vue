<template>
<div class="contain1">
    <h1>Who can use Shopmeco?</h1>

    <div class="container">

        <div class="services">

            <div class="article article1">
                <div>     
                    <h2>01.</h2>
                    <h4 style="color:#fff;">Car Owners</h4>
                    <p>
                        Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.
                    </p>     
                </div>
                <div>
                    <img src="../assets/images/Rectangle79.png" alt="">
                </div>
            </div>

            <div class="article article2">
                <div>
                        
                    <h2>02.</h2>
                    <h4>Auto Part Sellers</h4>
                    <p>
                        Give your car the right service it needs with a unique automechanic shop that 
                        links you with the best, 
                        competent and effective tecnicians.
                    </p>
                        
                    </div>
                <div>
                     <img src="../assets/images/Rectangle82.png" alt="">
                </div>
            </div>

            <div class="article article3">
                <div>
                        
                    <h2>03.</h2>
                    <h4>Auto-Service Provider</h4>
                    <p>
                        Give your car the right service it needs with a unique automechanic shop that 
                        links you with the best, 
                        competent and effective tecnicians
                    </p>
                        
                </div>
                <div>
                    <img src="../assets/images/Rectangle83.png" alt="">
                </div>
            </div>
    </div> 

    <div class="right-grid">
            <div class="article4 article">

                <div>
                    <img src="../assets/images/Rectangle80.png" alt="">
                </div>
                <div>
                        
                    <h2 style="color:#1F1F1F;">04.</h2>
                    <h4>Auto Repair Shops</h4>
                    <p>
                        Give your car the right service it needs with a unique automechanic shop that 
                        links you with the best, 
                        competent and effective tecnicians.
                    </p>
                        
                </div>
                
            </div>

            <div class="article5 article">
                <div>
                        
                    <h2 style="color:#1F1F1F;">05.</h2>
                    <h4>Auto Washing Center</h4>
                    <p>
                        Give your car the right service it needs with a unique automechanic shop that 
                        links you with the best, 
                        competent and effective tecnicians.
                    </p>     
                </div>
                <div>
                    <img src="../assets/images/Rectangle81.png" alt="">
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

@import url('https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;600;700;800&family=Licorice&display=swap');
@import url('http://fonts.cdnfonts.com/css/sofia-pro');



h2{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    line-height: 70px;
    color: #1F1F1F;
}

h4{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 24px;
    align-items: center;
    letter-spacing: 0.01em;
    color: #1F1F1F;
}

p{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #7C7C7C;
    margin-top: 20px;
    width: 100%;
}

h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #350B89;
    padding-bottom: 40px;
    width: 100%;
    text-align: left;
}

img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}

.contain1{
    display: grid;
    place-items: center;
    padding: 2rem;
    top: 2rem;
    position: relative;
}

.container {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    gap: 1.5rem;
}

.services {
    max-width: 100%;
    height: 100%;
    margin: auto;
    display: grid;
    place-items: start;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 400px 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.right-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-rows: 550px 1fr;
}

.article {
    width: 100%;
    height: 100%; 
    padding: 30px;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    background: #F4F2FE;
    border: 1px solid #A594FE;
    border-radius: 20px;
    position: relative;
}

.article > div:last-child {
    width: 100%;
    height: 100%;
}

.article1 {
    background: #350B89;
    grid-column: 1/3;
    flex-direction: row;
    padding: 2.5rem 1.9rem;
    gap: 2.5rem;
    align-items: center;
}

.article1 h2, .article1 h4, .article1 p {
    color: #FFFFFF;
    padding-bottom: 1.5rem;
}

.article1 div {
    flex-basis: 50%;
}

.article1 div:first-child {
    /* border: 1px solid red; */
    max-width: 350px;
}

.article5 {
    background: #FFCC6C;
}


@media only screen and (max-width: 900px) {
    .contain1 {
        padding: 1rem;
    }

    .services {
        grid-template-columns: 1fr 1fr;
    }

    .article1 {
        gap: 1rem;
    }

    .article1 img {
        object-fit: fill;
    }

    h1 {
        padding-bottom: 0;
    }
}

@media only screen and (max-width: 800px) {

    .contain1 {
        margin-bottom: 4rem;
    }

   .services, .right-grid,.container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
   }

   .article1 {
    flex-direction: column;
    grid-column: 1/2;
    text-align: left;
   }

   .article1 div:first-child {
    max-width: 100%;
    }

    .article1 h2, .article1 h4, .article1 p {
    padding-bottom: inherit;
    }

    h1 {
        text-align: center;
    }

    .services {
        margin-top: 4rem;
    }

    .right-grid {
        position: relative;
        margin-top: 4rem;
    }

    .article4 div:first-child {
        order: 2;
    }

    
}
@media only screen and (max-width: 600px) {
 h1 {
    font-size: 30px;  
 }


}
</style>