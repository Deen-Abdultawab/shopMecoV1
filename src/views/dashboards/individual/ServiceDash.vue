<template>
    <DashSlot :service="service">
        <section class="service-dash">
            <h1>Services</h1>
            <div class="service-container">
                <form class="filters">
                    <div class="type layout">
                        <div class="top">
                            <h2>Type of service</h2>
                            <span class="material-icons">keyboard_arrow_up</span>
                        </div>
                        <div class="checkboxes">
                            <div class="checkbox">
                                <input type="checkbox">
                                <label>Auto Wash</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox">
                                <label>Auto Repair</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox">
                                <label>Auto Service</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox">
                                <label>Auto Part</label>
                            </div>
                        </div>
                    </div>
                    <div class="availability layout">
                        <div class="top">
                            <h2>Availability</h2>
                            <span class="material-icons">keyboard_arrow_up</span>
                        </div>
                        <div class="checkboxes">
                            <div class="checkbox">
                                <input type="checkbox">
                                <label>All services</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox">
                                <label>Services closer to my location</label>
                            </div>
                        </div>
                    </div>
                    <div class="rate layout">
                        <div class="top">
                            <h2>Rating</h2>
                            <span class="material-icons">keyboard_arrow_up</span>
                        </div>
                        <div class="rate-input checkboxes">
                            <input type="range" min="0" max="100">
                            <div class="rate-value">
                                <h3>3.5</h3>
                            </div>
                        </div>
                    </div>
                    <button class="filter-btn">apply filters</button>
                </form>
                <ServiceCards />
            </div>
        </section>
    </DashSlot>
</template>

<script>
import ServiceCards from '@/components/dashboards/individual_dash/ServiceCards.vue'
import DashSlot from '@/components/DashSlot.vue'
    export default {
        components: { ServiceCards, DashSlot },
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

            const service = true
            const showReview = true

            

            return { services, service, showReview }
        }
    }
</script>

<style scoped>
    .service-container {
        display: grid;
        grid-template-columns: 1.3fr 3fr;
        gap: 1rem;
    }

    .service-dash {
        padding: 3.19rem 3.12rem;
    }

    h1, .top h2 {
         font-family: Inter;
         color: var(--colors-dark-text);
         font-style: normal;
    }

    h1 {
        color: var(--colors-dark-text);
        font-family: Inter;
        font-size: 1.75rem;
        font-weight: 600;
        margin-bottom: 1.31rem;
        line-height: normal;
    }

    .filters {
        padding-top: 1rem;
    }

    .checkboxes {
        padding: 0.6rem;
    }

    input {
        cursor: pointer;
    }

    input[type=checkbox] {
        width: 1.125rem;
        height: 1.125rem;
    }

    input[type=range]{
        width: 100%;
        margin-bottom: 0.7rem;
    }
    .checkbox {
        display: flex;
        gap: 1rem;
        align-items: center;
        padding: 0.5rem 0;
    }
    .checkboxes label {
        color: var(--colors-dark-text);
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: 150%; /* 1.5rem */
        letter-spacing: 0.0275rem;
        text-transform: none;
    }

    .layout {
        border-radius: 0.25rem;
        background: var(--colors-white);
        margin-bottom: 1.25rem;
        padding: 0.375rem 0.75rem;
    }
    .top {
        display: flex;
        align-items: center;
        justify-content: space-between; 
    }

    .top h2 {
        font-size: 1rem;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: 0.022rem;
    }

    .filter-btn {
        color: var(--colors-white);
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0275rem;
        background: var(--primary-color);
        padding: 0.69rem 0.94rem;
        border-radius: 0.3125rem;
        text-transform: capitalize;
        width: 80%;
        transition: all 0.3s linear;
        cursor: pointer;
    }

    .filter-btn:hover {
        background: #1d0252;
    }

    .rate-value {
       width: auto;
       display: flex;
       justify-content: end;
    }

    .rate-value h3 {
        color: var(--colors-dark-text);
        text-align: right;
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border-radius: 0.375rem;
        border: 1px solid var(--primary-text);
        background: var(--primary-light);
        box-shadow: 0px 12px 45px 0px rgba(74, 25, 172, 0.03);
        padding: 0.38rem 1rem;
    }

</style>
