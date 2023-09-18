<template>
    <DashSlot :settings="settings" >
        <div class="setting-dash">
            <h1>Settings</h1>
            <section class="section-container">
                <ul class="section-head section" ref="section" @click="handlePageSwitch">
                    <li class="link active" data-id="profile">account info</li>
                    <li class="link" data-id="password">manage password</li>
                    <li class="link" data-id="service">car & service info</li>
                    <li class="link" data-id="help">help center</li>
                </ul>
                <article class="user-profile-section sec-container" v-if="profile">
                    <div class="profile-details section">
                        <h3>your profile picture</h3>
                        <div class="profile-img-menu">
                            <div class="prof-img">
                                <img src="@/assets/images/user-img.png" alt="profile image">
                            </div>
                            <button class="upload-btn sofia">upload picture</button>
                            <button class="remove-btn sofia">remove picture</button>
                        </div>
                    </div>
                    <form class="info-section side-padding" :class="{ editable: edit}">
                        <div class="info-head">
                            <h3 class="sofia">personal information</h3>
                            <div class="edit" @click="handleEdit">
                                <span class="material-icons">edit</span>
                                <a href="#" class="sofia">edit</a>
                            </div>
                        </div>
                        <div class="form">
                            <div class="input">
                                <label>Your fullname</label>
                                <input type="text" placeholder="Tolulope Ololade">
                            </div>
                            <div class="input">
                                <label>Email address</label>
                                <input type="email" placeholder="almubaarak.dev@gmail.com">
                            </div>
                            <div class="input">
                                <label>Phone number</label>
                                <input type="number" placeholder="09021284572">
                            </div>
                            <div class="input address">
                                <label>Address</label>
                                <textarea placeholder="12, Gavin stree, beside Zida primary school, tanke, Ilorin, Kwara State." ></textarea>
                            </div>
                        </div>
                        <button class="save-btn sofia">save</button>
                    </form>
                </article>

                <article class="password-section sec-container" v-if="password">
                    <form id="password" class="side-padding">
                        <div class="input">
                            <label>Password</label>
                            <input type="password" placeholder="**********">
                        </div>
                        <div class="input">
                            <label>new password</label>
                            <input type="password" placeholder="**********">
                        </div>
                        <div class="input">
                            <label>confirm password</label>
                            <input type="password" placeholder="**********">
                        </div>
                        <button class="update-btn">update</button>
                    </form>
                </article>

                <article class="car-service-section sec-container" :class="{ editable: serviceEdit }" v-if="service">
                    <form id="service-info">
                        <div class="section">
                            <div class="side-padding">
                                <div class="info-head">
                                    <h3>car information</h3>
                                    <div class="edit" @click="handleServiceEdit">
                                        <span class="material-icons">edit</span>
                                        <a href="#">edit</a>
                                    </div>
                                </div>
                                <div class="service-info">
                                    <div class="input">
                                        <label>Car name</label>
                                        <input type="text" placeholder="Mercedes Benz">
                                    </div>
                                    <div class="input">
                                        <label>Car model</label>
                                        <input type="text" placeholder="AMG GT">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="side-padding">
                            <div class="info-head">
                                <h3>required service</h3>
                                <div class="edit">
                                    <span class="material-icons">add</span>
                                    <a href="#">add service</a>
                                </div>
                            </div>
                            <div id="service-options">
                                <div class="checkbox sofia">
                                    <input type="checkbox">
                                    <label>Bodywork</label>
                                </div>
                                <div class="checkbox sofia">
                                    <input type="checkbox">
                                    <label>Airconditioning</label>
                                </div>
                                <div class="checkbox sofia">
                                    <input type="checkbox">
                                    <label>Automechanic</label>
                                </div>
                                <div class="custom-input">
                                    <select name="service" id="service">
                                        <option value="">- - Select - -</option>
                                        <option value="">1998</option>
                                        <option value="">1998</option>
                                        <option value="">1998</option>
                                        <option value="">1998</option>
                                        <option value="">1998</option>
                                        <option value="">1998</option>
                                        <option value="">1998</option>
                                        <option value="">1998</option>
                                    </select>
                                </div>
                            </div>
                            <button class="update-btn">update</button>
                        </div>
                    </form>
                </article>
                <article class="help-section sec-container" v-if="help">
                    <div class="section noti">
                    <div class="info-head side-padding">
                        <h3>notifications</h3>
                    </div>
                    <div class="toggle-btns side-padding">
                        <div class="toggle">
                            <div class="label">
                                <h4 class="sofia">New message</h4>
                                <p class="sofia">Recieve a notification for a new message</p>
                            </div>
                            <div class="toggle-btn" :class="{ activeToggle: clickToggle1 }">
                                <span class="oval" @click="toggleSwitch1"></span>
                            </div>
                        </div>
                        <div class="toggle">
                            <div class="label">
                                <h4 class="sofia">Successfully booked</h4>
                                <p class="sofia">Receive a notification when you book a service</p>
                            </div>
                            <div class="toggle-btn" :class="{ activeToggle: clickToggle2 }">
                                <span class="oval" @click="toggleSwitch2"></span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="help-center side-padding">
                        <div class="info-head">
                            <h3>Help Center</h3>
                        </div>
                        <div class="row">
                            <div class="img">
                                <img src="@/assets/images/email.png" alt="">
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>Send us your complaint and we'll respond shortly.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="img">
                                <img src="@/assets/images/volume.png" alt="">
                            </div>
                            <div>
                                <h3>social media</h3>
                                <p>Reach out to us on social media and we'll get back to you.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="img">
                                <img src="@/assets/images/phone.png" alt="">
                            </div>
                            <div>
                                <h3>phone call</h3>
                                <p>We're available 24/7 to respong to your calls.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    
    </DashSlot>
</template>

<script>
import DashSlot from '@/components/DashSlot.vue'
import { ref } from 'vue'
    export default {
        components: { DashSlot },
        setup(){
            const settings = true
            const edit = ref(false)
            const serviceEdit = ref(false)
            const clickToggle1 = ref(false)
            const clickToggle2 = ref(false)
            const section = ref(null)
            const profile = ref(true)
            const service = ref(false)
            const help = ref(false)
            const password = ref(false)

            function handlePageSwitch(e){
                let targetElement = e.target
                if(targetElement.classList.contains('link')){ 
                    const sections = [...section.value.children]
                    const elementID = targetElement.dataset.id
                    sections.forEach((section)=>{
                        section.classList.remove('active')
                    })
                    
                    targetElement.classList.add('active')
    
    
                    if(elementID === 'profile'){
                        service.value = false
                        password.value = false
                        help.value = false
                        profile.value = true
                    }
                    if(elementID === 'help'){
                        service.value = false
                        password.value = false
                        profile.value = false
                        help.value = true
                    }
                    if(elementID === 'service'){
                        help.value = false
                        password.value = false
                        profile.value = false
                        service.value = true
                    }
                    if(elementID === 'password'){
                        help.value = false
                        profile.value = false
                        service.value = false
                        password.value = true
                    }
                }
            }

            function toggleSwitch1(){
                clickToggle1.value = !clickToggle1.value
            }
            function toggleSwitch2(){
                clickToggle2.value = !clickToggle2.value
            }

            function handleEdit(){
                edit.value = true
            }

            function handleServiceEdit(){
                serviceEdit.value = true
            }

            return { settings, edit, handleEdit, serviceEdit, handleServiceEdit, clickToggle1, toggleSwitch1, clickToggle2, toggleSwitch2, section, handlePageSwitch, profile, service, help, password}
        }
    }
</script>

<style scoped>

    .setting-dash {
        padding: 3.19rem 3.12rem;
    }

    .inter {
         font-style: normal;
        font-weight: 600;
        line-height: normal;
        font-family: Inter;
    }

    .sofia, label {
        font-family: Sofia Pro;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

     label {
        text-transform: none;
        color: var(--colors-inactive-color);
        font-size: 1rem;
    }

    input, .address textarea {
        display: block;
        margin: 0.62rem 0 1.88rem;
        border-radius: 0.625rem;
        border: 1px solid var(--colors-placeholder-text);
        background: #FFF;
        width: 26.625rem;
        max-width: 90%;
        color: var(--colors-dark-text);
        font-family: Sofia Pro;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 1rem 1.88rem;
        transition: all 0.3s linear;
    }

    .info-section input, .info-section textarea, .service-info input  {
        pointer-events: none;
    }

    input:hover, .address textarea:hover, .custom-input:hover {
        border-color: var(--primary-color);
    }

    input:focus, .address textarea:focus, .custom-input:focus {
        outline: none;
        border-color: var(--primary-color);
    }

    input::-webkit-inner-spin-button, input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* input[type='number'] {
        -moz-appearance: textfield;
    } */

    .address input:-moz-placeholder {
       width: 22.1875rem;
       display: block;
    }
    .save-btn, .update-btn {
        border-radius: 0.47319rem;
        background: var(--primary-color);
        padding: 0.9375rem 2.5rem;
        color: var(--colors-white, #FFF);
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0.63rem 0 2.5rem;
        text-transform: capitalize;
        transition: all 0.3s linear;
        cursor: pointer;
        opacity: 0;
        z-index: -1;
    }

    .update-btn {
        opacity: 1;
        z-index: 99;
    }
    .editable input, .editable textarea {
        pointer-events: all;
    }

    .editable .save-btn {
        opacity: 1;
        z-index: 99;
    }

    h1 {
        color: var(--colors-dark-text);
        font-family: Inter;
        font-size: 1.625rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 1.25rem;
    }

    .section-container {
        border-radius: 0.625rem;
        background: var(--colors-white);
        z-index: 9999;
        padding: 0 1.87rem;
    }

    .section-head {
        display: flex;
        align-items: center;
        padding: 1.87rem 0.63rem 0;
        gap: 1.5rem;
    }
    .section-head .link {
        padding: 0.75rem 1.25rem;
        color: var(--colors-placeholder-text);
        font-family: Sofia Pro;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: capitalize;
        cursor: pointer;
        background: var(--colors-white);
        transition: all 0.3s linear;
    }

    .section-head .link:hover {
        color: var(--primary-color);
    }

    .section-head.section {
        margin-bottom: 2.5rem;
    }
    .section {
        padding-bottom: 1.25rem;
        border-bottom: 2px solid var(--colors-placeholder-text);
    }

    .section-head .active {
        color: var(--primary-color);
        border-bottom: 1px solid var(--primary-color);
    }

    .side-padding {
        padding: 0 0.63rem;
    }

    .profile-details {
        padding: 0 0.63rem;
    }
    .profile-details h3 {
        color: var(--colors-dark-text);
        font-family: Sofia Pro;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 2.5rem 0 0.81rem;
        text-transform: capitalize;
    }

    .profile-img-menu {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding-bottom: 1.88rem;
    }

    .profile-img-menu .prof-img {
        width: 4.375rem;
        height: 4.375rem;
        border-radius: 4.375rem;
    }

    .prof-img img {
        width: 100%;
    }

    .profile-img-menu button {
        border-radius: 0.4375rem;
        padding: 0.5625rem 1.5625rem;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: capitalize;
        cursor: pointer;
        transition: all 0.3s linear;
    }

    .profile-img-menu .upload-btn {
        color: var(--colors-white, #FFF);
        background: var(--primary-color);
    }

    .profile-img-menu .upload-btn:hover, .save-btn:hover, .update-btn:hover {
        background: var(--btn-hover-bg);
    }

    
    .profile-img-menu .remove-btn {
        color: var(--primary-color);
        border: 0.697px solid #D4CCFF;
        background: var(--primary-light);
    }
    
    .profile-img-menu .remove-btn:hover {
        border-color: var(--btn-hover-bg);
    }

    .info-head {
        margin-top: 1.88rem;
        display: flex;
        gap: 1.25rem;
        margin-bottom: 1.88rem;
    }

    .info-head h3 {
        color: var(--colors-dark-text);
        font-size: 1.125rem;
        text-transform: capitalize;
    }

    .info-head .edit {
        display: flex;
        gap: 0.19rem;
        cursor: pointer;
        padding: 0.2rem 0.5rem;
        border-radius: 0.2rem;
        transition: all 0.3s linear;
    }

    .edit:hover{
        background: var(--primary-text);
    }

    .edit span {
        color: var(--primary-color);
        font-size: 1.2rem;
    }

    .edit a {
        font-size: 1rem;
        font-weight: 600;
        text-decoration-line: underline;
        text-transform: capitalize;
        color: var(--primary-color);
    }

    input[type=checkbox] {
        display: inline-block;
        margin: 0;
        width: 1rem;
        height: 1rem;
        border-radius: 0.17044rem;
    }

    .checkbox {
        display: flex;
        gap: 0.94rem;
        align-items: center;
        margin-bottom: 1.25rem;
    }

    .checkbox label {
        color: var(--colors-dark-text);
        font-size: 1.125rem;
        
    }

    .custom-input {
        border-radius: 0.625rem;
        border: 1px solid var(--colors-placeholder-text);
        background: #FFF;
        width: 26.625rem;
        max-width: 90%;
        margin: 1.88rem 0 2.5rem;
        padding: 1rem 1.88rem;
    }

    .custom-input select {
        width: 100%;
        height: 100%;
        border-color: transparent;
    }

    select:focus {
        outline: none;
    }

    .toggle {
        /* border: 1px solid red; */
        display: flex;
        width: 70%;
        align-items: center;
        justify-content: space-between;
    }

    .toggle:last-of-type{
        margin: 2.5rem 0 1.87rem;
    }

    .toggle h4 {
        color: var(--colors-dark-text);
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .toggle p {
        color: var(--primary-gray);
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    .toggle-btn {
        width: 3.5rem;
        height: 1.5rem;
        background: var(--primary-text);
        display: flex;
        align-items: center;
        border-radius: 1.5rem;
        padding: 0.3rem;
        justify-content: start;
        transition: all 0.3s linear;
        cursor: pointer;
        transition: var(--transition);
    }

    .activeToggle{
        justify-content: end;
        background: var(--primary-color);
    }

    .toggle-btn .oval {
        background: var(--colors-white);
        height: 100%;
        width: 30%;
        border-radius: 50%;
    }

    .row {
        border-radius: 0.625rem;
        background: #F7F6FF;
        max-width: 70%;
        width: 29.375rem;
        height: 4.375rem;
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding: 0.62rem;
        margin-bottom: 1.87rem;
        cursor: pointer;
        transition: all 0.3s linear;
        border: 1px solid transparent;
    }

    .row:hover {
        border-color:var(--btn-hover-bg);
    }

    .row .img {
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 0.625rem;
        background: #FFF;
        padding: 0.56rem;
    }

    .row h3 {
        color: var(--primary-color);
        font-family: Sofia Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.25rem;
        margin-bottom: 0.5rem;
        text-transform: capitalize;
    }

    .row p {
        color: var(--colors-inactive-color);
        font-family: Sofia Pro;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
    }

    .help-center {
        padding-bottom: 3.4rem;
    }



</style>