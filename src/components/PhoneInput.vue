<template>
  <MazPhoneNumberInput
    v-model="phoneNumber"
    show-code-on-list
    color="info"
    :preferred-countries="['NG', 'BE', 'DE', 'US', 'GB']"
    :ignored-countries="['AC']"
    @update="results = $event"
    :success="results?.isValid"
    default-country-code="NG"
  />
</template>

<script>
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import 'maz-ui/css/main.css'
import 'maz-ui/css/aos.css'
import { ref } from 'vue'
    export default {
        components: { MazPhoneNumberInput },
        setup(){
            const phoneNumber = ref()
            const results = ref()
            return { phoneNumber, results }
        }
    }
</script>

<style scoped>

</style>