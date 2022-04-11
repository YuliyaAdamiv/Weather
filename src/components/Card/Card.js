import React from 'react'
import '../../App.css'
import { useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherAction} from '../redux/slices/weatherSlices'
import { useHistory } from 'react-router-dom';

function Card() {
   const name="London"
   const history = useHistory();
  const handleClick = () => history.push('/some-route');
  //dispatch action
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchWeatherAction(name))
  },[])
  //select state from store
  const state = useSelector((state)=>state)
  const {weather, loading, error}=state
  console.log(state)
  return (
    <div>
        <button className="card" onClick={handleClick}>
         <p>{name}</p>
         <p >
            {Math.ceil(Number(weather?.main.temp-273))}{" "}
            <span >°C</span>
        </p>
        
     </button>
    
     
    </div>
  );
}


export default Card