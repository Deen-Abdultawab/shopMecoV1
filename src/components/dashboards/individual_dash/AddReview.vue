<template>
    <div class="rev-toggle" :class="{ show: showAddReview}">
        <div class="overlay">
        </div>
        <form class="add-review">
            <div class="top">
                <h3>review</h3>
                <span class="material-icons" @click="handleCloseRevWindow">close</span>
            </div>
            <div class="rate-info">
                <h3 class="info-text">How would you rate your experience with CleanMech?</h3>
                <div class="review-rating">
                    <div class="stars">
                        <span class="material-icons star">star</span>
                        <span class="material-icons star">star</span>
                        <span class="material-icons star">star</span>
                        <span class="material-icons star">star</span>
                        <span class="material-icons star">star</span>
                    </div>
                    <div class="rating-count">
                        <h3>3.5</h3>
                    </div>
                </div>
                <div class="review-desc">
                    <h3>your review</h3>
                    <textarea cols="30" rows="10"></textarea>
                </div>
            </div>
            <button class="rev-btn">Send</button>
        </form>
    </div>
</template>

<script>
    export default {
        setup(){
            const showAddReview = ref(false)

             function handleCloseRevWindow(){
                showAddReview.value = false
            }

            return { handleCloseRevWindow }
        }
    }
</script>

<style scoped>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 100vh;
        background: rgba(0, 0, 0, 0.40);
        transition: all 0.3s linear;
        z-index: -1;
        opacity: 0;
    }

    .show .overlay{
        opacity: 1;
        z-index: 99999;
    }

    .add-review {
        max-width: 90%;
        width: 47.5rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 0.625rem;
        background: #FFF;
        padding: 2.5rem;
        transition: all 0.3s linear;
        opacity: 0;
        z-index: -1;
    }

    .show .add-review {
        opacity: 1;
        z-index: 99999999;
    }

    .add-review .top {
        display: flex;
        align-items: end;
        justify-content: space-between;
    }

    .top h3 {
        font-size: 1.25rem;
        text-transform: capitalize;
    }

    .top span {
        cursor: pointer;
        padding: 0.94rem;
        transition: all 0.3s linear;
        font-size: 2rem;
    }

    .top span:hover {
        color: var(--primary-color);
        transform: rotate(90deg);
    }

    .rate-info .info-text {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 1.25rem 0 1.19rem;
    }

    .rate-info .review-rating {
        justify-content: start;
        gap: 1rem;
        margin-bottom: 2.5rem;
    }

    .rate-info .rating-count {
        border-radius: 0.375rem;
        border: 1px solid var(--primary-text);
        background: var(--primary-light);
        box-shadow: 0px 12px 45px 0px rgba(74, 25, 172, 0.03);
        padding: 0.37rem 1.12rem;
    }

    .rate-info .rating-count h3 {
        color: var(--colors-dark-text);
        font-size: 1.125rem;
        font-weight: 500;
    }

    .rate-info h2 {
        color: var(--colors-dark-text);
        font-family: Inter;
        font-size: 2rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 2.5rem;
    }

    .service-cost {
        color: var(--primary-color);
    }

    .review-desc h3 {
        color: var(--colors-dark-text);
        font-family: Sofia Pro;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 0.62rem;
        text-transform: capitalize;
    }

    .review-desc textarea {
        border-radius: 0.625rem;
        border: 1px solid var(--colors-placeholder-text);
        background: var(--colors-white);
        width: 28.375rem;
        height: 10.3125rem;
        transition: all 0.3s linear;
        padding: 0.5rem;
    }

    .review-desc textarea:hover, input:hover {
        border-color: var(--primary-color);
    }

    .review-desc textarea:focus, input:focus {
        outline: var(--primary-color)
    }

    .rev-btn{
        padding: 0.94rem 4.56rem;
        text-transform: capitalize;
        color: var(--colors-white);
        font-family: Sofia Pro;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border-radius: 0.47319rem;
        margin-top: 1.88rem;
        transition: all 0.3s linear;
        cursor: pointer;
    }
</style>