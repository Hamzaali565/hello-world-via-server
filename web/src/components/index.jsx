import React from "react";
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react";
const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [cityName, stCityName] = useState("");
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
            {/* <h1 className="h1"> React Weather App</h1>
            <form onSubmit={submitHandler}>
                <input className="input" type="text" required placeholder="Enter Your City Name" onChange={(e => { setCityName(e.target.value) })} />
            </form>
            {(weather === null) ? null :
                <div className="mainGlass">
                    <div className="glass">
                        <div className="city">{weather.data.name}</div>
                        <div className="opposite">
                            <div className="TMM">

                                <div><span> Tempurature: </span>{Math.round(weather.data.main.temp)} °C</div>
                                <div><span>Min-Temp:</span> {Math.round(weather.data.main.temp_min)} °C </div>
                                <div><span>Max-Temp:</span> {Math.round(weather.data.main.temp_max)} °C</div>

                            </div>

                            <div className="HP">

                                <div><span>Humidity:</span> {weather.data.main.humidity}%</div>
                                <div><span>Pressure:</span> {weather.data.main.pressure}mb</div>

                            </div>
                        </div>
                    </div>
                </div>
            } */}

        </div>



    )
}
export default Weather;