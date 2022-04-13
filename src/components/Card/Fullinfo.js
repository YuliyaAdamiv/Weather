import React from 'react'
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherAction} from '../redux/slices/weatherSlices'


function Fullinfo(props) {
    const name=props.match.params.name
    const dispatch = useDispatch()
useEffect(()=>{
    dispatch(fetchWeatherAction(name))
  },[])

  
    let weather = useSelector((state)=> state.weather[name])?.payload || {};
    console.log(weather)
    return (
    <section >
        {weather?.loading || !Object.keys(weather).length  ? (<h1>Loading please wait...</h1>) :weather?.error ? (<h1>{weather?.error?.message}</h1>) :(
          <div >
                    <div >
                        <h2>Weather App</h2>
                        <span >
                            {/* weather logo */}
                            <img
                                src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                                alt="/"
                            />
                        </span>
                        <h1 >
                            {weather?.weather[0].main}
                        </h1>{" "}
                    </div>
                    <h1 >
                    {Math.ceil(Number(weather?.main.temp-273))}{" "}
                    <span >°C</span>
                    </h1>
                    <h3 >
                    {weather?.name}, {weather?.sys?.country}
                    </h3>
                    <p >
                    The weather condition in {weather?.name},{" "}
                        {weather?.sys?.country} is described as :{" "}
                        {weather?.weather[0].description} with a temperature of{" "}
                        {Math.ceil(Number(weather?.main.temp-273))} °C and a humidity of{" "}
                        {weather?.main?.humidity} %
                    </p>
              </div>
        ) }
    </section>
    )
  }


export default Fullinfo