import React from 'react'
import "./AddCity.css"
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {fetchWeatherAction} from '../redux/slices/weatherSlices'
import { useLocalStorage } from "../AddCity/useLocalStorage";
import Fullinfo from '../Card/Fullinfo';

function AddCity(props) {
    const [name, setName] = useLocalStorage("name", "");
  //dispatch action
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(fetchWeatherAction(props.name))
    },[])
  
  // const weather = useSelector((state)=> state.weather[props.name]) || {};
  return (
      <section >
          <h2 > Add City</h2> 
          <input value={name}
          onClick={()=>dispatch(fetchWeatherAction(name))}
          onChange={e=>setName(e.target.value)}
            placeholder="Write a city + click"
          ></input>
          <Fullinfo/>
        {/* {loading ? (<h1>Loading please wait...</h1>) :error ? (<h1>{error?.message}</h1>) :(
          <div >
          <div >
            <div >
              <div >
                <div >
                  <span >
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
            </div>
          </div>
        </div>
     
        ) } */}
         </section>
  );
}

export default AddCity