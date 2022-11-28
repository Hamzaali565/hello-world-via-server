import React from "react";
import { useState } from "react"
import axios from "axios"
import './index.css'
import { useEffect } from "react";
const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [cityName, setCityName] = useState("");
    useEffect(() => {

        const clickHandler = (e) => {
            // e.preventDefault();

            axios.get(`https://hamzaali.cyclic.app/weather`)
                .then(response => {
                    console.log(response.data);
                    setWeather(response.data)
                })
                .catch(err => {
                    console.log(err);
                })
        }

        clickHandler();
    }, [])

    return (

        <div>
            <h1 className="h1"> React Weather App</h1>
                <div className="mainGlass">
                    <div className="glass">
                        <div className="city">{weather.name}</div>
                        <div className="opposite">
                            <div className="TMM">

                                <div><span> Tempurature: </span>{Math.round(weather.temp)} °C</div>
                                <div><span>Min-Temp:</span> {Math.round(weather.temp_min)} °C </div>
                                <div><span>Max-Temp:</span> {Math.round(weather.temp_max)} °C</div>

                            </div>

                            <div className="HP">

                                <div><span>Humidity:</span> {weather.humidity}%</div>
                                <div><span>Pressure:</span> {weather.pressure}mb</div>

                            </div>
                        </div>
                    </div>
                </div>
            

        </div>



    )
}
export default Weather;