import { ref, computed } from "vue"


const  id2monument = ref({})
const monumentsListReady = ref(false)

// Computed property to get all monuments
export const monuments = computed(() => {
    // If the monument list data is ready, return all monuments as an array
    if (monumentsListReady.value) {
        return Object.values(id2monument.value)
    }
    
    // If the monument list data is not ready, fetch it from the API
    fetch('/api/monument', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(response => response.json())
        .then(monumentlist => {
            console.log(monumentlist)
            // Populate the id2monument reference with fetched monument data
            for (const monument of Object.values(monumentlist)) {
                id2monument.value[monument.poi_id] = monument
            }
            // Set monumentList to true to indicate that the data is ready
            monumentsListReady.value = true
        })
    // Return null while waiting for the data to be fetched
    return null
})


const  id2poi = ref({})
const poisListReady = ref(false)

// Computed property to get all pois
export const pois = computed(() => {
    // If the poi list data is ready, return all pois as an array
    if (poisListReady.value) {
        return Object.values(id2poi.value)
    }
    
    // If the poi list data is not ready, fetch it from the API
    fetch('/api/poi', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(response => response.json())
        .then(poilist => {
            console.log(poilist)
            // Populate the id2poi reference with fetched poi data
            for (const poi of Object.values(poilist)) {
                id2poi.value[poi.poi_id] = poi
            }
            // Set poiList to true to indicate that the data is ready
            poisListReady.value = true
        })
    // Return null while waiting for the data to be fetched
    return null
})