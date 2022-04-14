import React from 'react'
import '../../App.css'
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherAction} from '../redux/slices/weatherSlices'
import { useHistory } from 'react-router-dom';


function Card(props) {
const history = useHistory();
const handleClick = () => history.push('/card/'+props.name)
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(fetchWeatherAction(props.name))
  },[])

function refreshPage(){ 
    window.location.reload(); 
}
const weather = useSelector((state)=> state.weather[props.name]) || {};
return (
    <div>
            <img className="refresh" onClick={ refreshPage } src="http://cdn.onlinewebfonts.com/svg/img_321592.png"/>
            <button className="card" onClick={handleClick}>
            <p>{props.name}</p>
            <p>
                {Math.ceil(Number(weather.payload?.main.temp-273))}{" "}
                <span >°C</span>
            </p>
            </button>
            
    </div>
    
  );
}


export default Card