<template>
    <div>
        <div class="health">
        <h2>Keep your car in good hands and in good health at all times.</h2>
        <button>Sign me up</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .health{
        background: url('../assets/images/Rectangle8.png');
        background-size: cover;
        background-position: center bottom;
        background-repeat: no-repeat;
        height: 371px;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 100px;
        padding: 2rem;
    }

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        width: 100%;
        color: #FFFFFF;
        align-items: center;
    }

    button{
        margin-top: 30px;
        color: #fff;
        padding: 18px 40px 17px;
        width: 208px;
        height: 60px;
        background: #FFB74C;
        border-radius: 30px 0px 30px 30px;
        transition: all 0.3s linear;
    }

    button:hover {
        background: #865203;
    }

    @media only screen and (max-width: 600px) {
        h2 {
            font-size: 38px;
        }

        button {
        width: 100%;
        }
    }
</style>