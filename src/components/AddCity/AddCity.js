import React from 'react';
import './AddCity.css';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherAction} from '../redux/slices/weatherSlices';
import {useHistory} from 'react-router-dom';

function AddCity() {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  let weather = useSelector((state) => state.weather[name])?.payload || {};

  useEffect(() => {
    dispatch(fetchWeatherAction(name));
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
    dispatch(fetchWeatherAction(e.target.value));
  };

  const onAdd = (name) => {
    var cities = JSON.parse(localStorage.getItem('cities'));
    cities.push({name: name});
    localStorage.setItem('cities', JSON.stringify(cities));
    console.log(cities);
    history.push('/', {cities});
  };

  return (
    <section>
      <h2> Add City</h2>
      <input
        value={name}
        onChange={handleChange}
        placeholder="Write a city + click"
      ></input>
      <button
        onClick={() => {
          onAdd(name);
        }}
      >
        Add
      </button>
      {weather?.loading || !Object.keys(weather).length ? (
        <h1>Loading please wait...</h1>
      ) : weather?.error ? (
        <h1>{weather?.error?.message}</h1>
      ) : (
        <div>
          <div>
            <h2>Weather App</h2>
            <span>
              <img
                src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                alt="/"
              />
            </span>
            <h1>{weather?.weather[0].main}</h1>{' '}
          </div>
          <h1>
            {Math.ceil(Number(weather?.main.temp - 273))} <span>°C</span>
          </h1>
          <h3>
            {weather?.name}, {weather?.sys?.country}
          </h3>
          <p>
            The weather condition in {weather?.name}, {weather?.sys?.country} is
            described as : {weather?.weather[0].description} with a temperature
            of {Math.ceil(Number(weather?.main.temp - 273))} °C and a humidity
            of {weather?.main?.humidity} %
          </p>
        </div>
      )}
    </section>
  );
}

export default AddCity;
