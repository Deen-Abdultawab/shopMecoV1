<template>
    <div class="dash-container">
        <div class="left-col sidebar">
            <router-link :to="{ name: 'home'}">
                <div class="logo">
                    <img src="@/assets/images/Maskgroup.png" alt="">
                </div>
            </router-link>
            <div class="links-container">
                <ul class="dash-links navs" ref="dashLinks">
                        <li class="dash-link" :class="{ activeLink: home}">
                            <router-link :to="{ name: 'dashboard', params:{ userId: 1}}" class="dash-flex">
                                        <img src="@/assets/images/dashboard-icon-gray.png" alt="">
                                        Home
                            </router-link>
                        </li>
                        <li class="dash-link" :class="{ activeLink: bookings}">
                            <router-link :to="{ name: 'bookings'}" class="dash-flex">
                                        <img src="@/assets/images/car-icon.png" alt="">
                                        Booking
                            </router-link>
                        </li>
                        <li class="dash-link" :class="{ activeLink: service}">
                            <router-link :to="{ name: 'serviceDash'}" class="dash-flex">
                                    <img src="@/assets/images/service-icon.png" alt="">
                                    Services
                            </router-link>
                        </li>
                        <li class="dash-link" :class="{ activeLink: messages}">
                            <router-link :to="{ name: 'messagesDash', params:{ userId: 1}}" class="dash-flex">
                                <img src="@/assets/images/comment.png" alt="">
                                Messages
                            </router-link>
                        </li>
                </ul>
                <ul class="dash-links user-icons" ref="dashLinks2">
                        <li class="dash-link user" :class="{ activeLink: settings}">
                            <router-link :to="{ name: 'userSettings', params:{ userId: 1}}" class="dash-flex">
                                    <img src="@/assets/images/settings.png" alt="">
                                    Settings
                            </router-link>
                        </li>
                        <li class="dash-link user dash-flex" :class="{ activeLink: signout}" @click="handleLogout">
                            <img src="@/assets/images/signout.png" alt="">
                            Log out
                        </li>
                </ul>
            </div>
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
            <div class="window-container" :class="{ show: showWindow }">
                <div class="overlay"></div>
                <div class="log-out">
                    <div class="logout-window">
                        <div class="logout-head">
                            <h3>logout</h3>
                            <span class="material-icons" @click="closeLogout">close</span>
                        </div>
                        <p>Are you sure you want to logout? If yes, then, lets do this again</p>.
                        <div class="btns">
                            <button class="logout-btn">logout</button>
                            <button class="cancel-btn">cancel</button>
                        </div>
                    </div>
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
        props: ['home', 'service', 'bookings', 'messages', 'settings', 'signout'],
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
            const signout = ref(false)
            const showWindow = ref(false)
            const dashLinks = ref(null)
            const dashLinks2 = ref(null)
            const activeNav = ref(null)
            const list = ref([])
            


            function notiToggle(){
                showNoti.value = !showNoti.value
                if(showNoti.value){
                    noti.value.style.height = `${noti.value.scrollHeight}px`
                } else {
                    noti.value.style.height = '0'
                }
            }

            function handleLogout(){
                const list1 = [...dashLinks.value.children]
                const list2 = [...dashLinks2.value.children]
                list.value = [...list1, ...list2]
                list.value.forEach((list)=>{
                    if(list.classList.contains('activeLink')){
                        activeNav.value = list
                    }
                    list.classList.remove('activeLink')
                })
                signout.value = true
                showWindow.value = true
            }

            function closeLogout(){
                list.value.forEach((list)=>{
                    list.classList.remove('activeLink')
                })
                signout.value = false
                showWindow.value = false
                activeNav.value.classList.add('activeLink')
            }


            return { notifications, notiToggle, showNoti, noti, signout, handleLogout, showWindow, dashLinks, dashLinks2, closeLogout}
        }
    }
</script>

<style scoped>

    .logout-head {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;
    }

    .logout-head h3 {
        color: var(--colors-dark-text);
        font-family: Inter;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: capitalize;
    }

    .logout-head span {
        font-size: 1.5rem;
        padding: 0.3rem;
        cursor: pointer;
        transition: all 0.3s linear;
    }

    .logout-head span:hover {
        color: var(--primary-color);
    }

    .logout-window p {
        color: var(--primary-gray);
        font-family: Sofia Pro;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 2.5rem;
    }

    .btns button {
        border-radius: 0.47319rem;
        padding: 0.94rem 3.1rem;
        font-family: Sofia Pro;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: capitalize;
        cursor: pointer;
        transition: all 0.3s linear;
    }

    .logout-btn {
        background: var(--primary-color);
        color: var(--colors-white);
    }

    .logout-btn:hover {
        background: #1d0252;
    }

    .btns button.cancel-btn {
        color: var(--primary-color);
        padding: 0.94rem 1.87rem;
    }

    .right-col {
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
        opacity: 0;
        z-index: -1;
    }
    .show .overlay{
        opacity: 1;
        z-index: 99999;
    }
    .log-out {
        max-width: 90%;
        width: 47.5rem;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 0.625rem;
        background: #FFF;
        padding: 1.87rem 2.5rem 2.5rem;
        transition: all 0.3s linear;
        opacity: 0;
        z-index: -1;
    }

    .show .log-out {
        opacity: 1;
        z-index: 99999999;
    }

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
        height: 7rem;
        margin: 1.61rem auto 0rem;
    }

    .logo img {
        width: 8.75rem;
    }

    .left-col {
        background: var(--primary-color);
    }
    
    .head-input::placeholder, .head-input, .dash-links .dash-link, .user-info .name, .user-info .status {
        font-size: 1rem;
        font-family: Sofia Pro;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

    }
    .dash-links {
        width: 10.875rem;
        height: auto;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .links-container {
        height: 85%;
        display: grid;
        grid-template-rows: 1f auto;
    }

    .dash-links:last-of-type {
        padding-bottom: 5rem;
        height: auto;
    }

    .dash-flex {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--primary-text);
        font-size: 1.125rem;
        font-weight: 500;
        padding: 0.4375rem 0.5rem;
        border-radius: 0.375rem;
        width: 100%;
        transition: all 0.3s linear;
    }

    .dash-links .dash-link {
        width: 100%;
        cursor: pointer;
        transition: all 0.3s linear;
        border-radius: 0.375rem;
    }

    .dash-link.activeLink .dash-flex, .dash-link.activeLink.dash-flex {
        color: var(--primary-color);
        background: var(--primary-light);
    }

    .dash-link.activeLink img{
        filter: grayscale(100%) sepia(0%) hue-rotate(180deg) brightness(5%) saturate(5%);
    }

    .dash-links .dash-flex:hover {
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