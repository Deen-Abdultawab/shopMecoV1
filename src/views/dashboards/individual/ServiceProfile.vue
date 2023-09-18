<template>
    <DashSlot >
        <div class="user-profile">
            <div class="dash-header">
                <div class="rating">
                    <h3>4.0</h3>
                    <span class="material-icons icon">star</span>
                </div>
            </div>
            <div class="ceo-details">
                <div class="info">
                    <div class="profile">
                        <div class="profile-img">
                            <img src="@/assets/images/profile-img-3.png"  alt="">
                        </div>
                        <div class="details">
                            <h3 class="profile-name">Robert Fox</h3>
                            <p class="position">CEO, MM Technicians</p>
                        </div>
                    </div>
                    <div class="qualifications">
                        <div class="row">
                            <div class="img">
                                <img src="@/assets/images/experience.png" alt="">
                            </div>
                            <h3>10 years of experience.</h3>
                        </div>
                        <div class="row">
                            <div class="img">
                                <img src="@/assets/images/studied.png" alt="">
                            </div>
                            <h3>Studied Mechanical Engineering.</h3>
                        </div>
                        <div class="row">
                            <div class="img">
                                <img src="@/assets/images/graduated.png" alt="">
                            </div>
                            <h3>Graduated from University of Lagos, Lagos, Nigeria.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-line"></div>
            <div class="company-details">
                <h1>Company details</h1>
                <div class="detail-grid">
                    <div class="col-1">
                        <div class="row-1">
                            <img src="@/assets/images/company-thumb.png" alt="">
                            <div>
                                <h3>MM Technicians</h3>
                                <p>Auto Mechanic Company</p>
                            </div>
                        </div>
                        <div class="row-2">
                            <h3>Description</h3>
                            <p>MM Technicians is a company that your car the right service it needs with a unique automechanic shop that links you with the best. MM Technicians is a company that your car the right service it needs with a unique automechanic shop that links you with the best</p>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="location">
                            <h2>Address</h2>
                            <div class="item">
                                <img src="@/assets/images/address.png" alt="">
                                <div class="texts">
                                    <p>Mechanic Village <br>
                                    No 22, Bolaji Mc Anthony way, opposite Law School, Ikeja, Lagos State.</p>
                                </div>
                            </div>
                            <h2>Opening hours</h2>
                            <div class="item">
                                <img src="@/assets/images/time.png" alt="">
                                <div class="texts">
                                    <p>Monday - Friday <br> 8:00 AM - 6:00 PM.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-line"></div>
            <div class="workshop-images">
                <h2>workshop images</h2>
                <div class="img-grid">
                    <div class="grid-1">
                        <div class="col">
                            <img src="@/assets/images/grid1.png" alt="" class="img1">
                            <img src="@/assets/images/grid2.png" alt="" class="img2">
                            <img src="@/assets/images/grid3.png" alt="" class="img3">
                        </div>
                    </div>
                    <div class="grid-2">
                        <div class="col">
                            <img src="@/assets/images/grid4.png" alt="" class="img4">
                            <img src="@/assets/images/grid5.png" alt="" class="img5">
                            <img src="@/assets/images/grid+.png" alt="" class="img+">
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-line"></div>
            <div class="review-cont">
                <ReviewSlide />
            </div>
            <div class="border-line"></div>
            <div class="reviews">
                <div class="review-head">
                    <h1 class="review-count">Reviews (273)</h1>
                    <btn class="more-btn" @click="showRevWindow">Write a review</btn>
                </div>
                <div class="review-container">
                    <article class="review" v-for="review in reviews" :key="review.id">
                        <div class="user-profile">
                            <img :src="require(`@/assets/images/${review.src}`)" alt="author image" class="author-img">
                        </div>
                        <div class="col-container">
                            <div class="top-row">
                                <div class="author-details">
                                    <h3 class="author-name">{{ review.name }}</h3>
                                    <p class="date">{{ review.date }}</p>
                                </div>
                                <div class="stars">
                                    <span class="material-icons star">star</span>
                                    <span class="material-icons star">star</span>
                                    <span class="material-icons star">star</span>
                                    <span class="material-icons star">star</span>
                                    <span class="material-icons star">star</span>
                                </div>
                            </div>
                            <div class="review-text">
                                <p>{{ review.text }}.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="rev-toggle" :class="{ show: showAddReview}">
                <div class="overlay"></div>
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
        </div>
    </DashSlot>
</template>

<script>
import DashSlot from '@/components/DashSlot.vue'
import ReviewSlide from '@/components/dashboards/individual_dash/ReviewSlide.vue'
import { ref } from 'vue'
    export default {
        components: { DashSlot, ReviewSlide },
        props: ['serviceId'],
        setup(){
            const reviews = [
                {
                    id: 1,
                    src: 'rev-user.png',
                    name: 'daniella wike',
                    date: '2 days ago',
                    text: 'Clean Mech is a company that your car the right service it needs with a unique and sparkling wash that leaves your car in good shape.'
                },
                {
                    id: 2,
                    src: 'rev-user.png',
                    name: 'daniella wike',
                    date: '2 days ago',
                    text: 'Clean Mech is a company that your car the right service it needs with a unique and sparkling wash that leaves your car in good shape.'
                },
                {
                    id: 3,
                    src: 'rev-user.png',
                    name: 'daniella wike',
                    date: '2 days ago',
                    text: 'Clean Mech is a company that your car the right service it needs with a unique and sparkling wash that leaves your car in good shape.'
                }
            ]
            const showAddReview = ref(false)


            function showRevWindow(){
                showAddReview.value = true
            }

            function handleCloseRevWindow(){
                showAddReview.value = false
            }
           
            
            return { reviews, showRevWindow, showAddReview, handleCloseRevWindow }
        }
    }
</script>

<style scoped>

    /* add review */
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
        color: var(--colors-dark-text);
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
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
        display: flex;
        align-items: center;
        gap: 0.94rem;
        margin-bottom: 0.94rem;
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
        color: var(--secondary-color-secondary-1);
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 1.125rem;
        line-height: 1.625rem;
        font-weight: 500;
        font-family: Sofia Pro;
        font-style: normal;
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
        background: var(--primary-color);
    }

    .rev-btn:hover {
        background: #1d0252;
    }

    /* add review end */

    .user-profile {
        position: relative;
    }
    .review-cont {
        width: 87%;
        margin: 0 auto;
    }
    .border-line {
        border: 1px solid #B5B5B5;
        height: 0.0625rem;
        margin: 2.5rem auto;
        opacity: 0.5;
        background: var(--colors-placeholder-text);
        width: 95%;
    }
    .dash-header {
        width: 95%;
        margin: 1.94rem auto 2.5rem;
        border-radius: 0.9375rem;
        display: flex;
        justify-content: end;
        height: 10.625rem;        
        background: #7B61FF url('@/assets/images/head-bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        z-index: 9;
    }

    .rating {
        position: absolute;
        right: 2.31rem;
        top: 1.85rem;
        width: 4.8125rem;
        height: 2.5625rem;
    }
    .rating h3 {
        color: var(--primary-color);
        text-align: right;
        font-family: Sofia Pro;
        font-size: 1.46825rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    
    .ceo-details {
        width: 100%;
        margin-top: -7rem;
        padding-left: 5rem;
        z-index: 99999;
        display: block;
        position: relative;
    }

    .profile-img {
        width: 9.375rem;
        height: 9.375rem;
        padding: 0.2rem;
        background: rgba(251, 251, 254, 0.98);
        border-radius: 0.625rem;
    }

    .profile {
        width: 9.375rem;
        margin-bottom: 1.87rem;
    }

    .profile-img img {
        width: 100%;
        border-radius: 0.625rem;
    }

    .details h3, .company-details h1, .workshop-images h2 {
        color: var(--colors-dark-text);
        font-family: Inter;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .row {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .row h3, .col-1 .row-1 h3, .col-1 .row-1 p, .row-1 .col-2 h3, .row-1 .col-2 p, .col-2 h2,  .item p , .details p {
        color: var(--colors-dark-text);
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

     .details p {
        color: var(--primary-gray);
        font-size: 0.8rem;
        font-weight: 500;
    }

    .company-details, .workshop-images {
        width: 87%;
        margin: 0 auto;
    }
    .company-details h1 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1.25rem;
    }

    .detail-grid {
        display: grid;
        grid-template-columns: 3fr 1.3fr;
        gap: 1rem;
    }

    .col-1 .row-1 {
        display: flex;
        align-items: center;
        gap: 0.94rem;
        margin-bottom: 1.87rem;
    }

    .col-1 .row-1 img {
        width: 3.9375rem;
        height: 3.9375rem;
        border-radius: 0.4375rem;
    }
    .col-1 .row-1 h3 {
        color: var(--colors-dark-text);
        font-size: 1.375rem;
        font-weight: 500;
    }
    .col-1 .row-1 p {
        color: var(--primary-gray);
        font-weight: 500;
    }

    .col-1 .row-2 h3 {
        color: var(--colors-dark-text);
        font-size: 1.125rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .col-1 .row-2 p  {
        color: var(--primary-gray);
        line-height: 1.375rem;
        width: 90%;
    }

    .col-2 h2 {
        margin-bottom: 0.5rem;
    }

    .item {
        display: flex;
        align-items: start;
        gap: 0.63rem;
    }

    .item:first-of-type {
        margin-bottom: 1.87rem;
    }

    .item p {
        color: var(--colors-inactive-color);
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    .col-2 img {
        width: 2.5rem;
        height: 2.5rem;
    }

    .workshop-images h2 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1.25rem;
        text-transform: capitalize;
    }

    .workshop-images img {
        width: 100%;
        height: 100%;
    }

    .img-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    .col {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        height: 100%;
        gap: 1rem;
    }

    .img3 {
        grid-row: 1/3;
        grid-column: 2;
    }

    .img4 {
        grid-column: 1/3;
    }

    .reviews {
        width: 87%;
        margin: 0 auto;
    }

    .reviews .review-head {
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: space-between;
        margin-bottom:1rem;
    }

    .review-head h3, .more-btn {
        color: var(--colors-dark-text);
        font-family: Inter;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .more-btn {
        border-radius: 0.625rem;
        background: var(--primary-color);
        padding: 0.87rem 2.31rem;
        color: #FFF;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.3s linear;
    }

    .more-btn:hover {
        background: #1d0252;
    }

    .review-container {
        height: 14rem;
        overflow-y: auto;
    }

    .review-container::-webkit-scrollbar{
        display: none;
    }

    .review {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.94rem;
        margin-bottom: 2.5rem;
    }

    .review img {
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 3.125rem;
    }

    .author-name {
        color: var(--colors-dark-text);
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: capitalize;
        margin-bottom: 0.31rem;
    }

    .review .date {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .top-row {
        display: flex;
        align-items: center;
        gap: 0.63rem;
        margin-bottom: 0.87rem;
    }

    .review-text {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.375rem; /* 137.5% */
        width: 85%;
    }

    .stars {
        display: flex;
        align-items: center;
        gap: 0.31rem;
       
    }

    .stars .star {
        font-size: 1.5rem;
        color: var(--secondary-color);
    }



    

    




</style>
