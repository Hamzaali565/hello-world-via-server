import React from "react";
import { useState } from "react"
import axios from "axios"
import './index.css'



const Weather = () => {

    const [weather, setWeather] = useState(null);
    const [cityName, setCityName] = useState("");

    // useEffect(() => {
    let baseUrl = "";
    if (window.location.href.split(":")[0] === "http") {
        baseUrl = "http://localhost:3000";
    }


    const submitHandler = (e) => {
        e.preventDefault();

        axios.get(`${baseUrl}/weather/${cityName}`)
            
        
        .then(response => {
                console.log(response.data);
                setWeather(response.data)
            })


            .catch(err => {
                console.log(err);
            })
    }

    // submitHandler();
    // }, [])

    return (

        <div>
            <h1 className="h1"> React Weather App</h1>
            <form onSubmit={submitHandler}>
                <input className="input" type="text"
                    required placeholder="Enter Your City Name"
                    onChange={(e => { setCityName(e.target.value) })} />
            </form>
            <div className="mainGlass">
                {(weather === null) ? null :
                    <div className="glass">
                        <div className="city">{weather.city}</div>
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
                }
            </div>

        </div>



    )
}
export default Weather;