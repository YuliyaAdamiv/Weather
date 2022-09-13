import CitySearch from '../CitySearch/CitySearch';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import WeatherForecast from '../WeatherForecast/WeatherForecast';
// Styles:

// Hooks:
import {useState} from 'react';
// API:
import {WEATHER_API_URL, WEATHER_API_KEY} from '../../API';

function CurrentWeatherData() {
  // Set pieces of state:
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const onSearchChangeHandler = (searchData) => {
    // Get location of city:
    const [latitude, longitude] = searchData.value.split(' ');
    // Fetch data for current weather from API:
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    // Fetch data for weather forecast from API:
    const weatherForecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    // Execute fetching:
    Promise.all([currentWeatherFetch, weatherForecastFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const weatherForecastResponse = await response[1].json();

        // Update state:
        setCurrentWeather({
          city: searchData.label,
          ...currentWeatherResponse,
        });
        setWeatherForecast({
          city: searchData.label,
          ...weatherForecastResponse,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <CitySearch onSearchChange={onSearchChangeHandler} />
      {currentWeather && <CurrentWeather currentWeatherData={currentWeather} />}
      {weatherForecast && (
        <WeatherForecast weatherForecastData={weatherForecast} />
      )}
    </div>
  );
}

export default CurrentWeatherData;
