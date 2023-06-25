import { ref } from "vue";

function fetchData(){
    const error = ref('')
    const document = ref([])
    const isLoading = ref(true)

    async function getData(source){
        isLoading.value = true
        try {
            const response = await fetch(source)
            if(!response.ok){
                throw Error('no data available')
            }
            document.value = await response.json()
            isLoading.value = false
        } catch (err) {
            console.log(err.message)
            error.value = err.message
            isLoading.value = false
        }
    }

    

    return { error, document, getData, isLoading}
}

export default fetchData