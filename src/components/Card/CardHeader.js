import React from 'react';
import '../../App.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherAction} from '../redux/slices/weatherSlices';

function CardHeader(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction(props.name));
  }, []);
  const weather = useSelector((state) => state.weather[props.name]) || {};
  console.log(props);
  return (
    <div>
      <button className="card-header">
        <p>{props.name}</p>
        <p>
          {Math.ceil(Number(weather.payload?.main.temp - 273))} <span>°C</span>
        </p>
      </button>
    </div>
  );
}

export default CardHeader;
