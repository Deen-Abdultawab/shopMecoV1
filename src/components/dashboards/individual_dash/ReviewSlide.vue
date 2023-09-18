<template>
    <div class="other-services" :class="{ bg: whiteBg }">
        <div class="detail-head">
            <h1>Services by this company</h1>
            <div class="more-btn">
                <a href="#">See All</a>
                <span class="material-icons">arrow_forward_ios</span>
            </div>
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
</template>

<script>
    export default {
        props: [ 'bgWhite' ],
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
        width: 100%;
        /* margin: 0 auto; */
        display: flex;
        overflow-y: auto;
        gap: 5%;
    }
    .slides::-webkit-scrollbar{
        display: none;
    }
    .slide {
        flex: 1 0 25%;
        height: 100%;
    }
    .slide img {
        display: block;
        width: 100%;
        border-radius: 0.625rem;
        height: 10.3125rem;
        margin-bottom: 1.25rem;
    }
     .slide-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: auto;
    }
    .slide-info h3 {
        text-transform: capitalize;
        color: var(--colors-dark-text);
        font-family: Sofia Pro;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .rating {
        border-radius: 0.625rem;
        background: var(--primary-light);
        padding: 0.7rem 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-self: end;
    }
    .slide-info .rating {
        width: 3.3125rem;
    }
     .slide-info .rating h3 {
        color: var(--primary-color);
        text-align: right;
        font-family: Sofia Pro;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 0.9375rem;
    }
    .slide-info .rating span {
        font-size: 0.9rem;
    }

    .other-services {
        width: 100%;
        margin: 0 auto;
    }

    .detail-head {
        display: flex;
        align-items: end;
        justify-content: space-between;
        margin-bottom: 1.8rem;

    }
    .other-services .detail-head h1 {
        color: var(--colors-dark-text);
        font-family: Inter;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .more-btn {
        display: flex;
        gap: 0.3rem;
        align-items: center;
    }

    .more-btn a {
        color: var(--primary-color);
        text-align: right;
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration-line: underline;
        cursor: pointer;
    }

    .more-btn span {
        font-size: 0.7rem;
        font-weight: bold;
        color: var(--primary-color);
    }

    .bg {
        background: var(--colors-white);
        width: 100%;
    }

    

</style>