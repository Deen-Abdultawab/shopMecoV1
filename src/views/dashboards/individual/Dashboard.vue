<template>
   <DashSlot :home="home">
        <HomeDash />
   </DashSlot>
</template>

<script>
import HomeDash from '@/components/dashboards/individual_dash/HomeDash.vue';
import DashSlot from '@/components/DashSlot.vue'
import { ref } from 'vue';
    export default {
        components: { HomeDash, DashSlot},
        setup(){
            const home = true


            return {home}
        }
    }
</script>

<style scoped>


</style>