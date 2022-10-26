import React from 'react'
import createData from '../context/ContextApi'
import location from '../img/location.png'
import { useContext } from 'react'
import rainImg from '../img/rain.png'
import logo from '../img/main.png'
import clear from '../img/clear.png'
import mist from '../img/mist.png'
import smoke from '../img/smoke.png'
import './style.css'

export default function Detail(props) {
    const data = useContext(createData)
    const { state, weather, city, sun } = data

    let rain = ''
    for (let i = 0; i < weather.length; i++) {
        rain = rain + weather[i].main
    }
    let weatherForcastImages;
    if (rain === "ThunderstormRain" || rain === "Rain") {
        weatherForcastImages = rainImg
    } else if(rain === 'Clouds') {
        weatherForcastImages = logo
    }else if(rain==='Mist'||rain==='Haze'){
        weatherForcastImages = mist
    }
    else if(rain==='Clear'){
        weatherForcastImages = clear
    }else if(rain==='Smoke'){
        weatherForcastImages = smoke
    }else{
        weatherForcastImages = mist
    }

    return (
        <>
            <p className='currentdate' >{new Date().toDateString()}</p>
            <p><img height='20px' width='20px' src={location} alt="..." />{city.name}</p>
            <img  className="checkWeather" src={weatherForcastImages} alt="..." />
            <h1>{Math.ceil(props.temperature - 273)}° C</h1>
            <hr />
            <div className="container my-2 d-flex detail">
                <div className="humidity1 ">
                    <h4 >{state.humidity}%</h4>
                    <p className="detail">Humidity</p>
                </div>
                <div className="humidity">
                    <h4>{state.pressure} hPa</h4>
                    <p className="detail">Pressure</p>
                </div>
                <div className="humidity">
                    <h4>{Math.ceil(state.temp_max - 273)}°C</h4>
                    <p className="detail">Temp-Min</p>
                </div>
                <div className="humidity">
                    <h4>{Math.ceil(state.temp_max - 273)}°C</h4>
                    <p className="detail">Temp-Max</p>
                </div>
                <div className="humidity">
                    <h4>{rain}</h4>
                    <p className="detail">Main</p>
                </div>
                <div className="humidity">
                    <h4>3.72</h4>
                    <p className="detail">Wind-Speed</p>
                </div>
            </div>
        </>
    )
}
