export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_X_RapidAPI_Key,
    'X-RapidAPI-Host': import.meta.env.VITE_X_RapidAPI_Host,
  },
}

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
 
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
