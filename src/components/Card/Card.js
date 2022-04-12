import React from 'react'
import '../../App.css'
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherAction} from '../redux/slices/weatherSlices'
import { useHistory } from 'react-router-dom';

function Card(props) {
  const history = useHistory();
  const handleClick = () => history.push(`/card/${props.id}`);
  //dispatch action
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchWeatherAction(props.name))
  },[])

  function refreshPage(){ 
    window.location.reload(); 
}
  //select state from store
  const state = useSelector((state)=>state)
  const {weather, loading, error}=state
  console.log(state)
  return (
    <div>
        <button className="card" onClick={handleClick}>
            <p>{props.name}</p>
            <p >
                {Math.ceil(Number(weather?.main.temp-273))}{" "}
                <span >°C</span>
            </p>
        </button>
     <button className="btn" onClick={ refreshPage }>Update <br/>weather</button>
    </div>
    
  );
}


export default Card