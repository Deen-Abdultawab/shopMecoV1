<template>
    <DashSlot :messages="messages">
        <section class="message-dash">
            <div class="contact-list">
                <div class="top-row">
                    <h1>messages</h1>
                    <div class="input-field custom-input">
                        <img src="@/assets/images/search.png" alt="">
                        <input type="text" placeholder="Search messages...">
                    </div>
                </div>
                <div class="contact-container">
                    <!-- <h3>Start a chat</h3> -->
                    <article class="contact-card" v-for="chat of chatList" :key="chat.id">
                        <img :src="require(`@/assets/images/${chat.src}`)" alt="" class="profile-img">
                        <div class="chat-info">
                            <h3>{{ chat.name }}</h3>
                            <p>{{ chat.role }}</p>
                        </div>
                        <div class="status">
                            <h3 class="time">10:33 AM</h3>
                            <div class="msg-status">
                                <article v-if="chat.delivered">
                                    <img src="@/assets/images/ic-complete.png" alt="">
                                </article>
                                <article v-if="chat.read">
                                    <img src="@/assets/images/read-ic.png" alt="">
                                </article>
                                <article v-if="chat.pending">
                                    <span class="pending">{{ chat.num }}</span>
                                </article>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="chat">
                <div class="top-row">
                    <div class="user-info"></div>
                    <div class="media">
                        <div class="img-container">
                            <img src="@/assets/images/video.png" alt="">
                        </div>
                        <div class="img-container">
                            <img src="@/assets/images/call.png" alt="">
                        </div>
                        <div class="img-container">
                            <img src="@/assets/images/options.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="btm-row">
                    <div class="chats emptyList">
                        <h3>No messages yet</h3>
                    </div>
                    <div class="chat-footer custom-input">
                        <img src="@/assets/images/link.png" alt="">
                        <input type="text" placeholder="Type something">
                        <img src="@/assets/images/message.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    </DashSlot>

</template>

<script>
import DashSlot from '@/components/DashSlot.vue'
    export default {
        components: { DashSlot },
        props: ['userId'],
        setup(){
           const messages = true
           const chatList = [
                {
                    id: 1,
                    src: 'profile-img-1.png',
                    name: 'jerome bell',
                    role: 'CEO, CleanMech',
                    time: '10:36 AM',
                    delivered: true
                },
                {
                    id: 2,
                    src: 'profile-img-2.png',
                    name: 'ahmed lawan',
                    role: 'CEO, BayWork',
                    time: '8:44 AM',
                    read: true
                },
                {
                    id: 3,
                    src: 'profile-img-3.png',
                    name: 'robert fox',
                    role: 'CEO, MM Tech..',
                    time: 'yesterday',
                    pending: true,
                    num: 2
                },
           ]

           return { messages, chatList }
           
        }
        
    }
</script>

<style scoped>
.message-dash {
    width: 95%;
    margin: 1.81rem auto 2.5rem;
    border-radius: 0.625rem;
    background: var(--colors-white);
    display: grid;
    grid-template-columns: 1.4fr 3fr;
    gap: 1.5rem;
    min-height: 50rem;
    height: 100%;
    padding: 1.87rem 2.5rem 0;
    
}

.contact-list {
    display: grid;
    grid-template-rows: auto 1fr;
}

.contact-list h1 {
    color: var(--colors-dark-text);
    font-family: Inter;
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 1.25rem;
}

.custom-input {
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid #D4CCFF;
    background: #F5F3FE;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.chat-footer {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
}

.chat-footer img {
    cursor: pointer;
}

.custom-input:hover {
    border-color: var(--btn-hover-bg);
}

input {
    background: transparent;
    color: var(--colors-inactive-color);
    font-family: Sofia Pro;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: var(--transition);
}

input:focus {
    outline: none;
    border-color: var(--btn-hover-bg);
}

.contact-container {
    margin-top: 2.5rem;
}

.emptyList {
    display: grid;
    place-items: Center;
    height: 100%;
    width: 100%;
    margin-top: 0;
}

.emptyList h3 {
    color: var(--colors-placeholder-text);
    font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.chat {
    border-radius: 0.625rem;
    border: 1px solid #E9E5FF;
    background: var(--colors-white);
    margin-bottom: 1.87rem;
   display: grid;
    grid-template-rows: auto 1fr;
}

.chat .top-row {
    border-bottom: 1px solid #E9E5FF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.12rem 1.88rem;
}

.top-row .media {
    display: flex;
    align-items: center;
    gap: 0.63rem;
}

.img-container {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #F2F6F8;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: var(--transition);
}

.img-container:hover {
    background: #E9E5FF;
}

.img-container img {
  width: 1rem;
  height: 1rem;
}

.btm-row {
    display: grid;
    grid-template-rows: 1fr auto;
    padding: 1.88rem;
}

.pending {
    width: 1.2rem;
    height: 1.2rem;
    display: grid;
    place-items: center;
    background: var(--secondary-red);
    border-radius: 50%;
    color: #FFF;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.contact-card {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    gap: 0.94rem;
    margin-bottom: 1.88rem;
    padding: 0.5rem 0.88rem;
    border-radius: 0.4375rem;
    cursor: pointer;
    transition: var(--transition);
}

.contact-card:hover, .active {
    background: var(--colors-light-primary, #F5F3FF);
}

.chat-info h3 {
    color: var(--colors-dark-text);
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 0.3rem;
    text-transform: capitalize;
}

.chat-info p {
    color: var(--colors-inactive-color);
    font-family: Sofia Pro;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.status h3 {
    color: #A9ABAD;
    text-align: right;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.msg-status {
    display: flex;
    justify-content: flex-end;
}

.profile-img {
    width: 3.13613rem;
    height: 3.125rem;
    border-radius: 3.125rem;
}




   

</style>