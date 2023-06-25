import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'maz-ui/css/main.css'
import '@/assets/global.css'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import vue3GoogleLogin from 'vue3-google-login'



const app = createApp(App)


app.component('MazPhoneNumberInput', MazPhoneNumberInput)

app.use(vue3GoogleLogin, {
  clientId: '878928492782-sqiktdghqo15amc647aueq05ich1ptjp.apps.googleusercontent.com'
})

app.use(router).mount('#app')
