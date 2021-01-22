const CITY_URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip="
const STREET_URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address"
const token = "35c1b92f08dcd22fce83bc90ae710f7b6fcdf6af";

const commonOptions = {
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    }
}

export const ServerAPI = {
    getMyIP: async () => {
        let response = await fetch('https://ipapi.co/json/')
        let data = await response.json()
        return data.ip
           
    },
    getMyCity: async (userIP) => {
        let response = await fetch(CITY_URL + userIP, {
            method: "GET",
           ...commonOptions
        })
        let data = await response.json()
        return data.location.data.city
    },
    getStreets: async (query) => {
        let response = await fetch(STREET_URL, {
            method: "POST",
           ...commonOptions,
           body: JSON.stringify({query, count: 5})
        })
        let data = await response.json()
        return data.suggestions
    }


}