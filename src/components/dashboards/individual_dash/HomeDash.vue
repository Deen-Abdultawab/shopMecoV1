<template>
    <div class="dash-header">
        <div class="intro">
            <h1>Hi Mubaarak</h1>
            <p>Welcome to your one-stop auto mechanic shop</p>
        </div>
        <div class="img">
            <img src="@/assets/images/car_part_seller.png" alt="">
        </div>
    </div>
    <div class="service-container">
        <div class="sort">
            <label > Sort by:</label>
            <div class="custom">
                <select>
                    <option value="">All services</option>
                </select>
            </div>
        </div>
        <div class="services">
            <article class="service" v-for="service in services" :key="service">
                <img :src="require(`@/assets/images/${service.src}`)" alt="" class="service-img">
                <div class="service-info">
                    <div class="details">
                        <h3>{{ service.service }}</h3>
                        <p>{{ service.company }}</p>
                    </div>
                    <div class="rating">
                        <h3>{{ service.rating }}</h3>
                        <span class="material-icons">star</span>
                    </div>
                </div>
                <div class="footer">
                    <router-link class="service-btn" :to="{ name: 'serviceDetail', params:{ serviceId: service.id}}">
                        view details
                    </router-link>
                    
                    <div class="service-category">
                        <img src="@/assets/images/elipse.png" alt="">
                        <p>{{ service.category }}</p>
                    </div>
                </div>
            </article>
        </div>
    </div>
    <button class="load-btn">
        <img src="@/assets/images/load.png" alt="">
        load more...
    </button>

</template>

<script>
    export default {
        setup(){
            const services = [
                {
                    src: 'service1.png',
                    service: 'car cleaning',
                    company: 'CleanMech',
                    rating: '4.0',
                    category: 'auto-wash',
                    id: 1
                },
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
                }
            ]


            return { services }
        }
        
    }
</script>

<style scoped>
    .dash-header {
        width: 90%;
        /* width: 67.0625rem; */
        margin: 4.31rem auto 2.5rem;
        border-radius: 0.9375rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10.625rem;
        /* background: #7029FF; */
        
        background: linear-gradient(to right, #7B61FF, #691FFF);
    }

    .intro {
        padding-left: 3.38rem;
    }

    .intro h1, .intro p {
        color: var(--primary-text);
        font-size: 1.25rem;
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .intro p {
        color: var(--colors-white);
        font-size: 1.875rem;
        font-weight: 500;
        width: 30.25rem;
        margin-top: 0.5rem;
    }

    .img {
        align-self: end;
    }

    .img img {
        display: block;
        height: inherit;
        /* border: 1px solid red solid yellow; */
    }

    .service-container {
        width: 95%;
        margin: 0 auto;
        border-radius: 0.625rem;
        background: var(--colors-white);
        padding: 1.25rem 1.87rem;
    }

    .sort {
        margin-bottom: 0.94rem;
        width: 17.8125rem;
        display: flex;
        align-items: center;
        gap: 0.62rem;
    }

    .sort label {
        color: var(--secondary-text);
        font-size: 0.875rem;
        font-family: Sofia Pro;
        font-style: normal;
        font-weight: 500;
        line-height: 1.375rem;
    }

    .sort .custom {
        flex: 1;
        padding: 0.5625rem 0.9375rem;
        border-radius: 0.3125rem;
        background: var(--primary-light);
    }

    .sort select {
        width: 100%;
        background: inherit;
        cursor: pointer;
    }

    select:focus {
        border-color: transparent;
        outline: none;
    }

    .service {
        width: auto;
        border-radius: 0.66288rem;
        border: 1.353px solid var(--primary-text);
        background: var(--colors-white);
        padding: 1.25rem;
        display: grid;
        row-gap: 1.31rem;
    }

    .service-img {
        width: 100%;
    }

    .service-info, .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    h3, .details p {
        color: var(--colors-dark-text);
        font-size: 1.375rem;
        font-family: Sofia Pro;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: capitalize;
    }

    .details p {
        color: var(--primary-gray);
        font-size: 1rem;
    }

    .rating h3 {
        color: var(--primary-color);
        font-size: 1rem;
    }

    .rating span {
        color: var(--secondary-color);
        font-size: 1rem;
    }

    .services {
        display: grid;
        gap: 1.25rem;
        /* align-items: center; */
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .service-btn, .service-category, .load-btn{
        font-family: Sofia Pro;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .service-btn, .load-btn {
        cursor: pointer;
        transition: all 0.3s linear;
    }

    .service-btn {
        border-radius: 0.33144rem;
        background: var(--primary-color);
        color: var(--colors-white, #FFF);
        font-size: 0.875rem;
        padding: 0.8rem 1.2rem;
        text-transform: capitalize;
    }

    .service-category {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    .service-category p {
        color: var(--primary-gray);
        font-size: 0.875rem;
        text-transform: capitalize;
    }

    .load-btn {
        display: flex;
        align-items: center;
        width: auto;
        margin: 3.75rem auto;
        padding: 0.6875rem 1.875rem;
        justify-content: center;
        gap: 0.625rem;
        border-radius: 0.3125rem;
        background: var(--colors-white);
        box-shadow: 0px 12px 45px 0px rgba(74, 25, 172, 0.12);
        color: var(--primary-color);
        font-size: 1rem;
    }

    

</style>