<template>
    <div class="dash-container">
        <div class="left-col sidebar">
           <div class="logo">
            <img src="@/assets/images/Maskgroup.png" alt="">
           </div>
           <ul class="dash-links navs">
            <li class="dash-link active-link">
                <img src="@/assets/images/dashboard-icon-gray.png" alt="">
                Home
            </li>
            <li class="dash-link">
                <img src="@/assets/images/car-icon.png" alt="">
                Booking
            </li>
            <li class="dash-link">
                <img src="@/assets/images/service-icon.png" alt="">
                Services
            </li>
            <li class="dash-link">
                <img src="@/assets/images/comment.png" alt="">
                Messages
            </li>
           </ul>
           <ul class="dash-links user-icons">
            <li class="dash-link user">
                <img src="@/assets/images/settings.png" alt="">
                Settings
            </li>
            <li class="dash-link user">
                <img src="@/assets/images/signout.png" alt="">
                Log out
            </li>
           </ul>
        </div>
        <div class="right-col">
            <div class="header">
                <div class="input">
                    <img src="@/assets/images/search.png" alt="">
                    <input type="text" class="head-input" placeholder="search or type">
                </div>
                <div class="profile">
                    <img src="@/assets/images/Notification.png" alt="" class="noti" @click="notiToggle">
                    <div class="user-details">
                        <div class="user-img">
                            <img src="@/assets/images/user-img.png" alt="">
                        </div>
                        <div class="user-info">
                            <h3 class="name">Tiamiyu Mubarak</h3>
                            <p class="status">User</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="notification" :class="{ show: showNoti }" ref="noti">
                <div class="noti-head">
                    <h3>Notifications</h3>
                    <button>clear all</button>
                </div>
                <div class="noti-body">
                    <article class="notif" v-for="noti in notifications" :key="noti">
                        <div class="noti-info">
                            <div class="noti-title">
                                <span class="check"></span>
                                <h3>{{ noti.notification }}</h3>
                            </div>
                            <div class="noti-details">
                                <p class="desc">{{ noti.description }}</p>
                                <p class="date">{{ noti.date }}</p>
                            </div>
                        </div>
                        <div class="noti-icon">
                            <img :src="require(`@/assets/images/${noti.icon}`)" class="noti-img">
                        </div>
                    </article>
                </div>
            </div>
            <div class="section-container">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        setup(){
            const notifications = [
                {
                    notification: 'Password updated',
                    description: 'Your paassword has been successfully change',
                    date: 'Apr 7, 2022 at 11:15 am',
                    icon: 'green-noti.png',
                },
                {
                    notification: 'Sucessfully booked',
                    description: 'You have successfully booked breakpad service',
                    date: 'Apr 7, 2022 at 10:21 am',
                    icon: 'blue-noti.png',
                },
                {
                    notification: 'new message',
                    description: 'You have sa message from MM technicians',
                    date: 'Apr 7, 2022 at 10:21 am',
                    icon: 'blue-noti.png',
                },
                {
                    notification: 'missed voice call',
                    description: 'You missed a call from MM Technicians',
                    date: 'Apr 7, 2022 at 09:45 am',
                    icon: 'red-noti.png',
                },
            ]
            const showNoti = ref(false)
            const noti = ref(null)


            function notiToggle(){
                showNoti.value = !showNoti.value
                if(showNoti.value){
                    noti.value.style.height = `${noti.value.scrollHeight}px`
                } else {
                    noti.value.style.height = '0'
                }
            }


            return { notifications, notiToggle, showNoti, noti }
        }
    }
</script>

<style scoped>

    .notification {
        width: 27.5rem;
        position: absolute;
        top: 5.6875rem;
        right: 1.25rem;
        border-radius: 0.625rem;
        background: var(--colors-white);
        box-shadow: 0px 12px 45px 0px rgba(74, 25, 172, 0.12);
        z-index: 99999999;
        transition: all 0.3s linear;
        height: 0;
        overflow: hidden;
    }

    .notification.show {
        height: auto;
    }

    .noti-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.81rem;
        border-bottom: 1px solid #F7F7FD;
        margin-bottom: 0.81rem;
    }

    .noti-head h3 {
        color: var(--colors-dark-text);
        font-size: 1rem;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
    }

    .noti-head button {
        color: var(--primary-color);
        text-align: right;
        font-size: 0.75rem;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem;
    }

    .noti-body {
        padding: 0 1rem;
        /* border: 1px solid red; */
    }

    .notif {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #F7F7FD;
        padding: 0.75rem 0rem 0.75rem 0.75rem;
        margin-bottom: 0.75rem;
        
    }

    .notif:last-of-type{
        border-bottom: none;
    }

    .noti-title {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .noti-title h3 {
        color: var(--black-1);
        font-size: 0.875rem;
        font-family: Sofia Pro;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
        text-transform: capitalize;
    }

    .noti-details {
        padding-left: 1.25rem;
    }

    .desc {
        color: var(--colors-placeholder-text);
        font-size: 0.8125rem;
        font-family: Sofia Pro;
        font-style: normal;
        font-weight: 400;
        line-height: 1.125rem;
    }

    .date {
        color: var(--primary-gray);
        /* text-align: center; */
        font-size: 0.75rem;
        font-family: Sofia Pro;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
    }

    .check {
        width: 0.625rem;
        height: 0.625rem;
        display: block;
        border-radius: 0.625rem;
        background: var(--primary-color);    
    }
    .dash-container {
        display: grid;
        grid-template-columns: 15.63rem 1fr;
        min-height: 100vh;
        font-family: Sofia Pro;
    }

    .logo {
       width: 10.875rem;
        height: 1.96256rem;
        margin: 1.61rem auto 4.72rem;
    }

    .logo img {
        width: 8.75rem;
    }

    .left-col {
        background: var(--primary-color);
    }
    
    .head-input::placeholder, .head-input, .dash-links li, .user-info .name, .user-info .status {
        font-size: 1rem;
        font-family: Sofia Pro;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

    }
    .dash-links {
        width: 10.875rem;
        margin: 0 auto 34rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .dash-links li {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--primary-text);
        font-size: 1.125rem;
        font-weight: 500;
        padding: 0.4375rem 0.5rem;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: all 0.3s linear;
    }

    .dash-link.active-link {
        color: var(--primary-color);
        background: var(--primary-light);
    }

    .dash-link.active-link img{
        filter: grayscale(100%) sepia(0%) hue-rotate(180deg) brightness(5%) saturate(5%);
    }

    .dash-links li:hover {
        background: var(--primary-light);
        color: var(--primary-color);
    }

    .dash-link img {
        transition: all 0.3s linear;
        /* filter: grayscale(100%); */
    }

    .dash-link:hover img{
        filter: grayscale(100%) sepia(0%) hue-rotate(180deg) brightness(5%) saturate(5%);
    }


    .right-col {
        background: rgba(251, 251, 254, 0.98);
        width: 100%;
        height: 100%;
        position: relative;
    }

    .header {
        padding: 1.25rem 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #F7F7FD;
        border-bottom: 1px solid #F7F7FD;
    }
    .input, .profile, .user-details {
        display: flex;
        align-items: center;
    }
    .profile {
        gap: 1.25rem;
    }

    .user-details {
        gap: 0.65rem;
    }

    .user-info .name {
        font-size: 0.875rem;
        font-family: Open Sans;
        font-weight: 600;
    }
    .user-info .status {
        color: #7C7C7C;
        font-size: 0.875rem;
        font-family: Sofia Pro;
        font-weight: 400;
    }

    .input {
        width: 28.75rem;
        height: 2.9375rem;
        gap: 0.31rem;
        padding: 0 0.63rem;
        border-radius: 0.5rem;
        border: 1px solid #D4CCFF;
        background: var(--colors-white);
        transition: all 0.3s linear;
    }

    .input:hover {
        border-color: var(--primary-color);
    }

    .user-img {
        border-radius: 2.5rem;
    }

    .user-img img {
        border-radius: 2.5rem;
        width: 100%;
    }

    .input input {
        background: inherit;
        flex: 1;
        height: 70%;
    }

    .input input:focus {
        outline: none;
        border: none;
    }

    .noti, .user-img {
        cursor: pointer;
    }
</style>