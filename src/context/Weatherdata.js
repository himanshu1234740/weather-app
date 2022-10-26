import weatherState from './ContextApi'
import axios from 'axios'
import React, { useState } from 'react'

function Data(props) {
    const weatherData = []

    async function getData(state) {
        
        let city = ''
        if(state===undefined){
            city = 'panipat'
        }else{
            city = state.city
        }
        console.log(city)
        try {
            setLodings(true)
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d1a2702f5a511ef952774f2e66d9c687`)
            setLodings(false)
            setState(response.data.main)
            setWeather(response.data.weather)
            setCity(response.data)
            setSun(response.data.sys)
        } catch (error) {
            console.error(error)
        }


    }
    const [state, setState] = useState(weatherData)
    const [weather, setWeather] = useState(weatherData)
    const [city, setCity] = useState(weatherData)
    const [sun, setSun] = useState(weatherData)
    const [lodings, setLodings] = useState(true)

    return (
        <weatherState.Provider value={{ state, getData, weather, city, sun, lodings}} >
            {props.children}
        </weatherState.Provider>
    )
}
export default Data
