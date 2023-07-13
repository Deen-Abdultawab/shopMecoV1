<template>
    <DashSlot>
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
                            <button class="book-btn">Book now</button>
                            <button class="review-btn">review</button>
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
            </div>
            <div class="other-services">
                <div class="detail-head">
                    <h1>Other service by your company</h1>
                    <a href="#" class="more-btn">See All > </a>
                </div>
                <div class="other-container slides">
                    <article class="slide" v-for="service in services" :key="service">
                        <img :src="require(`@/assets/images/${service.src}`)" alt="" class="slide-img">
                        <div class="slide-info">
                            <h3>{{ service.service }}</h3>
                            <div class="rating">
                                <h3>{{ service.rating }}</h3>
                                <span class="material-icons">star</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </DashSlot>
</template>

<script>
import DashSlot from '@/components/DashSlot.vue'
    export default {
        components: { DashSlot },
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

            return { services }
        }
    }
</script>

<style scoped>

    .slides {
        gap: 2.5rem;
        max-width: 100%;
        width: 60rem;
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
    }
    .slide img {
        display: block;
        width: inherit;
        border-radius: 0.625rem;
        height: 10.3125rem;
        margin-bottom: 1.62rem;
    }

    .slide-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .service-details {
        width: 95%;
        margin: 3.6rem auto;
    }

    .detail-head {
        width: 100%;
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.12rem;
    }

    .detail-head h1, .detail-head p {
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
        border: 1px solid red;
       
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
    }

    .book-btn {
        background: var(--primary-color);
        color: var(--colors-white);
    }

    .review-btn {
        color: var(--primary-color);
        border: 1px solid #D4CCFF;
        background: var(--primary-light);
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
        /* border: 1px solid red; */
        width: 100%;
        height: 100%;
        display: block;
    }

</style>
