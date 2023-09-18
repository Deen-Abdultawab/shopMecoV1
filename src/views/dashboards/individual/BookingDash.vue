<template>
    <DashSlot :bookings="bookings">
        <div class="booking-dash">
            <div class="booking-head">
                <h1>Booking</h1>
                <div class="booking-sort">
                    <h3>Sort by <span class="sort-text">{{ sortValue }}</span></h3>
                    <div class="sort-btns" @click="sortToggle">
                        <span class="material-icons key" v-if="!showSort">keyboard_arrow_up</span>
                        <span class="material-icons key" v-else>keyboard_arrow_down</span>
                    </div>
                </div>
                <ul class="sort-options" ref="options" @click="handleSort" :class="{ show: showSort }">
                    <li class="option active">Default</li>
                    <li class="option">Booking date</li>
                    <li class="option">Paid</li>
                    <li class="option">Unpaid</li>
                    <li class="option">Booking status</li>
                </ul>
            </div>
            <div class="bookings-container">
                <div class="bookings-cards" v-for="booking in bookedServices" :key="booking.id">
                    <div class="service-profile">
                        <div class="profile-img">
                            <img :src="require(`@/assets/images/${booking.src}`)"  alt="">
                        </div>
                        <div class="details">
                            <h3 class="profile-name">{{ booking.name }}</h3>
                            <p class="position">{{ booking.role }}</p>
                        </div>
                        <router-link :to="{ name: 'serviceProfile', params: { serviceId: booking.id }}">
                            <button class="view-btn">view profile</button>
                        </router-link>
                    </div>
                    <div class="service-info">
                        <div class="company-info">
                            <h3>{{ booking.service }}</h3>
                            <p>{{ booking.company }}</p>
                        </div>
                        <div class="rating-container">
                            <div class="rating">
                                <h3>{{ booking.rating }}</h3>
                                <span class="material-icons icon">star</span>
                            </div>
                            <p class="review-count">{{ booking.reviews }} reviews</p>
                        </div>
                        <div class="descr">
                            <p>{{ booking.descr }}</p>
                        </div>
                        <div class="btns">
                            <router-link :to="{ name: 'serviceDetail', params: { serviceId: booking.id }}">
                                <button class="detail-btn">service details</button>
                            </router-link>
                        </div>
                    </div>
                    <div class="booking-info">
                        <div class="date">
                            <h3>date booked</h3>
                            <div class="info">
                                <div class="img-icons book-date">
                                    <div class="img">
                                        <img src="@/assets/images/ic-calender.png" alt="">
                                    </div>
                                    <h3 class="date">{{ booking.date }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="status">
                            <h3>booking status</h3>
                            <div class="info">
                                <div class="img-icons complete" v-if="booking.status">
                                    <div class="img">
                                        <img src="@/assets/images/ic-complete.png" alt="">
                                    </div>
                                    <h3 class="date">completed</h3>
                                </div>
                                <div class="img-icons uncomplete" v-else>
                                    <div class="img">
                                        <img src="@/assets/images/ic-uncomplete.png" alt="">
                                    </div>
                                    <h3 class="date">uncompleted</h3>
                                </div>
                            </div>
                        </div>
                        <div class="payment">
                            <h3>payment</h3>
                            <div class="info">
                                <div class="img-icons paid" v-if="booking.payment">
                                    <div class="img">
                                        <img src="@/assets/images/ic-paid.png" alt="">
                                    </div>
                                    <h3 class="date">completed</h3>
                                </div>
                                <div class="img-icons unpaid" v-else>
                                    <div class="img">
                                        <img src="@/assets/images/ic-not-paid.png" alt="">
                                    </div>
                                    <h3 class="date">unpaid</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </DashSlot>
</template>

<script>
import DashSlot from '@/components/DashSlot'
import { ref } from 'vue'
    export default {
        components: { DashSlot },
        setup(){
            const bookings = true
            const bookedServices = [
                {
                    src: 'profile-img-1.png',
                    name: 'jerome bell',
                    role: 'CEO, CleanMech',
                    service: 'Car Cleaning',
                    company: 'CleanMech',
                    rating: '4.5',
                    reviews: '277',
                    descr: 'Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians'.substring(0, 100) + '...',
                    date: '7th April, 2022',
                    status: true,
                    payment: false,
                    id: 1
                },
                {
                    src: 'profile-img-2.png',
                    name: 'ahmed lawan',
                    role: 'CEO, BayWork',
                    service: 'Break Parts(complete set)',
                    company: 'BayWork',
                    rating: '4.0',
                    reviews: '162',
                     descr: 'Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians'.substring(0, 100) + '...',
                    date: '7th April, 2022',
                    status: false,
                    payment: false,
                    id: 2
                },
                {
                    src: 'profile-img-3.png',
                    name: 'robert fox',
                    role: 'CEO, MM Technicians',
                    service: 'Car Overheating',
                    company: 'MM Technicians',
                    rating: '3.0',
                    reviews: '30',
                     descr: 'Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians'.substring(0, 100) + '...',
                    category: 'auto-repair',
                    date: '7th April, 2022',
                    status: true,
                    payment: true,
                    id: 3
                },
                
            ]

            const options = ref(null)
            const sortValue = ref('Default')
            const showSort = ref(false)

            function handleSort(e){
                let targetElement = e.target
                if(targetElement.classList.contains('option')){
                    let optionsElement = [...options.value.children]
                    console.log(optionsElement)
                    optionsElement.forEach((option)=>{
                        option.classList.remove('active')
                    })
                    targetElement.classList.add('active')
                    sortValue.value = targetElement.innerHTML
                }
            }

            function sortToggle(){
                showSort.value = !showSort.value
            }


            return { bookings, bookedServices, options, handleSort, sortValue, showSort, sortToggle }
        }
    }
</script>

<style scoped>
    .key {
        cursor: pointer;
        transition: all 0.3s linear;
    }  

    .key:hover {
        transition: scale(1.01);
        color: var(--primary-color);
    }
    .sort-options {
        position: absolute;
        top: 2.1rem;
        right: 0;
        width: 9.5rem;
        border-radius: 0.625rem;
        background: var(--colors-white);
        box-shadow: 0px 12px 45px 0px rgba(74, 25, 172, 0.12);
        transition: all 0.3s linear;
        overflow: hidden;
        height: 0;
    }

    .show {
        padding: 0.94rem 1.25rem;
        height: auto;
    }

    .option {
        color: var(--colors-placeholder-text); 
        font-family: Sofia Pro;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-bottom: 0.3rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #F9F9F9;
        cursor: pointer;
        transition: all 0.3s linear;
    }

    .option:hover {
        transform: scale(1.02);
    }

    .active {
        font-weight: 500;
        color: var(--primary-color);
    }
     .booking-dash {
        width: 90%;
        margin: 3.19rem auto;
    }
    .bookings-cards {
        border-radius: 0.625rem;
        background: var(--colors-white);
        display: grid;
        grid-template-columns: auto 1fr auto;
        padding: 1.69rem;
        gap: 1.87rem;
        margin-bottom: 1.25rem;
        border-radius: 0.625rem;
        box-shadow: 0px 12px 45px 0px rgba(74, 25, 172, 0.06);
    }
     .booking-head {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.12rem;
        position: relative;
    }

    .booking-head h1, .details h3 {
        color: var(--colors-dark-text);
        font-family: Inter;
        font-size: 1.625rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .booking-sort {
        display: flex;
        gap: 0.3rem;
        align-items: center;
    }

    .booking-sort h3, .sort-text, .view-btn, .details p, .company-info h3, .company-info p, .rating-container h3 {
        color: var(--colors-dark-text);
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .sort-text {
        color: var(--primary-color);
        text-decoration-line: underline;
        padding-left: 0.2rem;
    }

    .profile-img img {
        width: 100%;
        border-radius: 0.625rem;
        box-shadow: 0px 12px 45px 0px rgba(74, 25, 172, 0.12);
    }

    .details {
        width: 100%;
        margin: 0.61rem 0 1.25rem;
        text-align: center;
    }

    .details h3 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.7rem;
        text-transform: capitalize;
    }

    .details p {
        color: var(--primary-gray);
        font-size: 0.875rem;
        font-weight: 500;
    }

    .view-btn, .detail-btn {
        border-radius: 0.47319rem;
        border: 1.514px solid #D4CCFF;
        background: var(--primary-light);
        padding: 0.94rem 2.31rem;
        width: 100%;
        color: var(--primary-color);
        font-size: 1.25rem;
        font-weight: 500;
        text-transform: capitalize;
        transition: all 0.3s linear;
        cursor: pointer;
    }

    .view-btn:hover {
        border-color: #1d0252;
    }

    .detail-btn:hover {
        background: #1d0252;
    }

    .service-info {
        display: grid;
        align-items: end;
    }

    .company-info {
        margin-bottom: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.56rem;
    }

    .company-info h3 {
        font-size: 1.8125rem;
        font-weight: 500;
    }

    .company-info p {
        color: var(--primary-gray);
        font-size: 1.375rem;
        font-weight: 500;
    }

     .rating-container {
        display: flex;
        align-items: center;
        margin-bottom: 1.56rem;
        gap: 0.63rem;
    }

    .rating-container h3 {
        color: var(--primary-color);
        font-size: 1.46825rem;
        font-weight: 500;
    }

    .rating-container p, .descr p {
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

    .rating .icon {
       font-size: 1.30506rem;
    }

    .descr p {
        font-size: 1.125rem;
        line-height: 1.3125rem;
        width: 27.9375rem;
        max-width: 100%;
    }

    .detail-btn {
        width: 11.375rem;
        color: var(--colors-white);
        background: var(--primary-color);
        padding: 0.94rem 0;
        margin-top: 2.81rem;
    }

    .booking-info {
        display: grid;
        gap: 0.8rem;
    }

    .booking-info h3 {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.625rem;
        text-transform: capitalize;
        margin-bottom: 0.15rem;
    }

    .img-icons {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .img-icons img {
        display: block;
    }

    .img-icons .date {
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.625rem;
    }

    .book-date h3 {
        color: var(--primary-color);
    }

    .complete h3, .paid h3 {
        color: var(--colors-success);
    }

    .uncomplete h3, .unpaid h3 {
        color: var(--colors-warning);
    }

    .img {
        width: 2.125rem;
        height: 2.125rem;
        display: grid;
        place-items: center;
        border-radius: 50%;
    }

    .book-date .img {
        background: var(--primary-text);
    }

    .complete .img, .paid .img {
        background: var(--colors-bg-success);
    }
    .uncomplete .img, .unpaid .img {
        background: var(--error);
    }

</style>