<template>
    <DashSlot :service="service">
        <Services />
    </DashSlot>
</template>

<script>
import DashSlot from '@/components/DashSlot.vue'
import Services from '@/components/dashboards/individual_dash/Services.vue'
    export default {
        components: { DashSlot, Services },
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


            return { services, service}
        }
    }
</script>

<style scoped>


</style>
