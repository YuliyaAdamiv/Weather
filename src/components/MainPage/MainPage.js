import React from 'react';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';
import Card from '../Card/Card';
import Header from '../Header/Header';
import CurrentWeatherData from '../CurrentWeatherData/CurrentWeatherData';
import './MainPage.css';

function MainPage() {
  let defaultCities = [
    {name: 'London'},
    {name: 'Paris'},
    {name: 'Tokyo'},
    {name: 'Kiev'},
  ];
  var cities = JSON.parse(localStorage.getItem('cities') || '{}');
  if (!Object.keys(cities).length) {
    cities = defaultCities;
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  return (
    <div>
      <h2>Weather App</h2>
      <CurrentWeatherData />
      <Header />
      <div className="App">
        {cities.map((item) => {
          return <Card key={item.name} name={item.name} />;
        })}
        <Link to="/add_city">
          <button className="btn">Add city</button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
