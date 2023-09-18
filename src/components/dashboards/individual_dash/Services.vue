<template>
    <div class="service-details">
        <div class="detail-head">
            <h1>Service Details</h1>
            <p>Home > Service</p>
        </div>
        <div class="columns">
            <div class="details col">
                <div class="service-img">
                    <img src="@/assets/images/service1.png">
                </div>
                <div class="service-info">
                    <div class="company-info">
                        <div class="comp-head">
                            <h3>Car cleaning</h3>
                            <p>CleanMech</p>
                        </div>
                        <div class="service-category">
                            <img src="@/assets/images/elipse.png" alt="">
                            <p>auto-wash</p>
                        </div>
                    </div>
                    <div class="rating-container">
                        <div class="rating">
                            <h3>4.0</h3>
                            <span class="material-icons">star</span>
                        </div>
                        <p class="review-count">277 reviews</p>
                    </div>
                    <div class="descr">
                        <h3>description</h3>
                        <p>Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.</p>
                    </div>
                    <div class="btns">
                        <button class="book-btn" @click="showPaymentWindow">Book now</button>
                        <button class="review-btn" @click="showReviewWindow">review</button>
                    </div>
                </div>
            </div>
            <div class="location col">
                <div class="left-col">
                    <div class="item">
                        <img src="@/assets/images/address.png" alt="">
                        <div class="texts">
                            <h3>address</h3>
                            <p>Mechanic Village <br>
                            No 22, Bolaji Mc Anthony way, opposite Law School, <br> Ikeja, Lagos State.</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/time.png" alt="">
                        <div class="texts">
                            <h3>opening hours</h3>
                            <p>Monday - Friday <br> 8:00 AM - 6:00 PM.</p>
                        </div>
                    </div>
                </div>
                <div class="right-col">
                    <img src="@/assets/images/map.png" alt="" class="map">
                </div>
            </div>
            <div class="reviews">
                <div class="detail-head review-head">
                    <h1 class="review-count">Reviews (273)</h1>
                    <a href="#" class="more-btn">See All > </a>
                </div>
                <div class="review-container">
                    <article class="review">
                        <div class="user-profile">
                            <img src="@/assets/images/rev-user.png" alt="author image" class="author-img">
                            <div class="author-details">
                                <h3 class="author-name">daniella wike</h3>
                                <p class="date">2 days ago</p>
                            </div>
                        </div>
                        <div class="review-text">
                            <p>Clean Mech is a company that your car the right service it needs with a unique and sparkling wash that leaves your car in good shape.</p>
                        </div>
                        <div class="review-rating">
                            <div class="stars">
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                            </div>
                            <div class="rating-count">
                                <h3>(3.5) Rating</h3>
                            </div>
                        </div>
                    </article>

                    <article class="review">
                        <div class="user-profile">
                            <img src="@/assets/images/rev-user.png" alt="author image" class="author-img">
                            <div class="author-details">
                                <h3 class="author-name">daniella wike</h3>
                                <p class="date">2 days ago</p>
                            </div>
                        </div>
                        <div class="review-text">
                            <p>Clean Mech is a company that your car the right service it needs with a unique and sparkling wash that leaves your car in good shape.</p>
                        </div>
                        <div class="review-rating">
                            <div class="stars">
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                            </div>
                            <div class="rating-count">
                                <h3>(3.5) Rating</h3>
                            </div>
                        </div>
                    </article>

                    <article class="review">
                        <div class="user-profile">
                            <img src="@/assets/images/rev-user.png" alt="author image" class="author-img">
                            <div class="author-details">
                                <h3 class="author-name">daniella wike</h3>
                                <p class="date">2 days ago</p>
                            </div>
                        </div>
                        <div class="review-text">
                            <p>Clean Mech is a company that your car the right service it needs with a unique and sparkling wash that leaves your car in good shape.</p>
                        </div>
                        <div class="review-rating">
                            <div class="stars">
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                                <span class="material-icons star">star</span>
                            </div>
                            <div class="rating-count">
                                <h3>(3.5) Rating</h3>
                            </div>
                        </div>
                    </article>
                
                </div>
            </div>
        </div>
       <ReviewSlide :whiteBg="bgWhite"/>
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
        <div class="book-toggle" :class="{ show: showBookPayment}">
            <div class="overlay">
            </div>
            <form class="add-review">
                <div class="top">
                    <h3>payment</h3>
                    <span class="material-icons" @click="handleClosePayWindow">close</span>
                </div>
                <div class="rate-info">
                    <h3 class="info-text">Enter your card details to complete the service rendered</h3>
                    <h2>Your total is <span class="service-cost">#2,500.00</span></h2>
                    <div class="review-desc">
                        <div class="input">
                            <label>Card Number</label>
                            <input type="text" placeholder="xxxx xxxx xxxx xxxx">
                        </div>
                        <div class="input">
                            <label>Card Name</label>
                            <input type="text" placeholder="Tola Adedeji">
                        </div>
                        <div class="flex-input">
                            <div class="input date">
                                <label>Exp. Date</label>
                                <input type="text" placeholder="MM/YYYY">
                            </div>
                            <div class="input cvv">
                                <label>CVV</label>
                                <input type="text" placeholder="385">
                            </div>
                        </div>

                    </div>
                </div>
                <button class="pay-btn">Pay</button>
            </form>
        </div>
    </div>
</template>

<script>
import DashSlot from '@/components/DashSlot.vue'
import ReviewSlide from '@/components/dashboards/individual_dash/ReviewSlide.vue'
import { ref } from 'vue'
    export default {
        components: { DashSlot, ReviewSlide },
        props: ['serviceId'],
        setup(){
            const services = [
                {
                    src: 'breakpad.png',
                    service: 'breakpad',
                    company: 'Bay Work',
                    rating: '3.5',
                    category: 'auto-repair',
                    id: 2
                },
                {
                    src: 'safework.png',
                    service: 'car servicing',
                    company: 'Safe Work',
                    rating: '4.0',
                    category: 'auto-repair',
                    id: 3
                },
                {
                    src: 'wheel-alignment.png',
                    service: 'wheel alignment',
                    company: 'Bay Work',
                    rating: '4.5',
                    category: 'auto-repair',
                    id: 4
                },
                {
                    src: 'overheating.png',
                    service: 'overheating',
                    company: 'MM Technicians',
                    rating: '3.0',
                    category: 'auto-repair',
                    id: 5
                },
                {
                    src: 'brake-parts.png',
                    service: 'break parts',
                    company: 'Bay Work',
                    rating: '4.0',
                    category: 'auto-parts',
                    id: 6
                },
                {
                    src: 'service1.png',
                    service: 'car cleaning',
                    company: 'CleanMech',
                    rating: '4.0',
                    category: 'auto-wash',
                    id: 1
                },
            ]

            const home = true
            const bgWhite = true
            
            const showAddReview = ref(false)
            const showBookPayment = ref(false)

            function showReviewWindow(){
                showAddReview.value = true
            }

            function handleCloseRevWindow(){
                showAddReview.value = false
            }

            function showPaymentWindow(){
                showBookPayment.value = true
            }

            function handleClosePayWindow(){
                showBookPayment.value = false
            }
            

            return { services, home, showAddReview, showReviewWindow, handleCloseRevWindow, handleClosePayWindow, showBookPayment, showPaymentWindow, bgWhite }
        }
    }
</script>

<style scoped>

    .service-details {
        position: relative;
    }
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

    .rev-btn, .pay-btn{
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

    label {
        color: var(--colors-dark-text);
        font-family: Sofia Pro;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        
    }

    input {
        border-radius: 0.625rem;
        border: 1px solid var(--colors-placeholder-text);
        background: var(--colors-white);
        display: block;
        padding: 1rem 1.87rem;
        width: 28.375rem;
        max-width: 90%;
        margin: 0.62rem 0 1.88rem;
        transition: all 0.3s linear;
    }

    input::placeholder {
        color: var(--colors-placeholder-text);
        font-family: Sofia Pro;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .flex-input {
        width: 28.375rem;
        max-width: 90%;
    }

    .flex-input div {
        display: inline-block;
    }

    .flex-input div:first-child {
        width: 70%;
        margin-right: 5%;
    }

    .flex-input div:last-child {
        width: 25%;
    }

    .flex-input input {
        width: 100%;
    }

    .reviews {
        margin: 3.8rem 0 2.5rem;
    }

    .review-head {
        margin-bottom: 1.56rem;
    }

    .review {
        padding: 2rem 1.56rem;
        border-radius: 0.625rem;
        border: 1px solid var(--primary-text);
        background: var(--colors-white);
    }

    .review-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.88rem;
    }

    .user-profile, .review-rating {
        display: flex;
        align-items: center;
        gap: 0.94rem;
        margin-bottom: 0.94rem;
    }

    .review-rating {
        justify-content: space-between;
        margin: 0;
        gap: 0;
    }

    .review-rating .stars {
        display: flex;
        align-items: center;
        gap: 0.31rem;
    }

    .stars .star {
        font-size: 1.5rem;
        color: var(--secondary-color);
    }

    .user-profile img {
        width: 2.8125rem;
        height: 2.8125rem;
        border-radius: 2.8125rem;
    }

    .author-details h3 {
        font-size: 1.125rem;
        font-weight: 500;
        text-transform: capitalize;
        /* margin-bottom: 0.31rem; */
    }

    .review-text p, .author-details p, .rating-count h3 {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.125rem;
    }


    .review-text p {
        line-height: normal;
        opacity: 0.8;
        margin-bottom: 1rem;
    }

     .rating-count h3 {
        color: var(--secondary-color-secondary-1);
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 1.125rem;
        line-height: 1.625rem;
    }

    .slides {
        gap: 2.5rem;
        width: 100%;
        max-width: 60rem;
        height: 100%;
        display: flex;
        overflow-y: auto;
        margin: 0 auto;
    }

    .slides::-webkit-scrollbar{
        display: none;
    }
    .slide {
        width: 16.5625rem;
        /* width: 40%; */
        height: 100%;
    }
    .service-details {
        width: 95%;
        margin: 3.6rem auto;
    }

    .detail-head {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.12rem;
    }

    .detail-head h1, .detail-head p, .author-details h3, .top h3 {
        color: var(--colors-dark-text);
        font-family: Inter;
        font-size: 1.625rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .other-services .detail-head h1 {
        font-size: 1.25rem;
        font-weight: 500;
    }

    .detail-head p {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 1rem;
        align-self: end;
    }

    .columns, .other-services {
        background: var(--colors-white);
        padding: 2.5rem;
        border-radius: 0.625rem;
    }

    .other-services {
        margin-top: 2.5rem;
    }

    .details {
        display: grid;
        align-items: end;
        grid-template-columns: 1fr 1fr;
        gap: 1.87rem;
        margin-bottom: 3.75rem;
    }

    .service-img {
        height: 20.8125rem;
        width: 100%;
        border-radius: 0.625rem;
    }

    .service-img img {
        height: 100%;
        width: 100%;
        border-radius: inherit;
    }

    .company-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.25rem;
    }

    .service-category {
        align-self: start;
    }

    .company-info h3, .company-info p, h3, .detail-head a{
        color: var(--colors-dark-text);
        font-family: Sofia Pro;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .slide-info h3 {
        font-size: 1.25rem;
        font-weight: 400;
        text-transform: capitalize;
    }

    .slide-info .rating {
        width: 3.3125rem;
    }

    .slide-info .rating h3 {
        font-size: 0.9375rem;
    }

    .slide-info .rating span {
        font-size: 0.9rem;
    }

     .detail-head a {
        color: var(--primary-color);
        font-size: 1rem;
        font-weight: 600;
        text-decoration-line: underline;
    }

    .company-info p {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 1.25rem;
    }

    .rating-container {
        display: flex;
        align-items: center;
        margin-bottom: 2.3rem;
        gap: 0.63rem;
    }

    .rating-container p {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.625rem;
    }

    .rating{
        width: 4.8125rem;
        height: 2.5625rem;
    }

    .rating h3 {
        color: var(--primary-color);
        font-size: 1.46825rem;
    }

     .rating span {
        font-size: 1.5rem;
    }

    .descr h3 {
        color: var(--colors-dark-text);
        font-family: Sofia Pro;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: capitalize;
        margin-bottom: 0.62rem;
    }

    .descr p {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.375rem;
        margin-bottom: 2.5rem;
    }

    .btns {
        display: flex;
        align-items: center;
        gap: 1.88rem;
    }

    .book-btn, .review-btn {
        width: 12.0625rem;
        font-family: Sofia Pro;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 0.94rem 0rem;
        border-radius: 0.47319rem;
        text-transform: capitalize;
        transition: all 0.3s linear;
        cursor: pointer;
    }

    .book-btn, .rev-btn, .pay-btn {
        background: var(--primary-color);
        color: var(--colors-white);
    }

    .book-btn:hover, .rev-btn:hover, .pay-btn:hover {
        background: #1d0252;
    }

    .review-btn {
        color: var(--primary-color);
        border: 1px solid #D4CCFF;
        background: var(--primary-light);
    }

    .review-btn:hover {
        border-color: #1d0252;
    }

    .location {
        display: grid;
        align-items: center;
        justify-content: space-between;
        grid-template-columns: repeat(2, 1fr);
    }

    .item {
        display: flex;
        gap: 1rem;
        align-items: start;
        margin-bottom: 2.12rem;
    }

    .item:last-of-type {
        margin-bottom: 0;
    }

    .item img {
        display: block;
    }

    .item h3 {
        color: var(--colors-dark-text);
        font-size: 1.125rem;
        text-transform: capitalize;
    }

    .item p {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
    }

    .right-col .map {
        width: 100%;
        height: 100%;
        display: block;
    }

</style>
