import React from 'react'
import '../../App.css'
import { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherAction} from '../redux/slices/weatherSlices'
import { useHistory } from 'react-router-dom';

function Card(props) {
    const defaultList = [
        { name: "ItemOne" },
      ];
    
      const [list, updateList] = useState(defaultList);
    
      const handleRemoveItem = (e) => {
       const name = e.target.getAttribute("name")
        updateList(list.filter(item => item.name !== name));
      };
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
            {list.map(item => {
        return (
          <>
            <img className="refresh" onClick={ refreshPage } src="http://cdn.onlinewebfonts.com/svg/img_321592.png"/>
            <button className="card" onClick={handleClick}>
            <p>{props.name}</p>
            <p >
                {Math.ceil(Number(weather?.main.temp-273))}{" "}
                <span >°C</span>
            </p>
            </button>
            <span name={item.name} onClick={handleRemoveItem}>
              x
            </span>
          </>
        );
      })}
    
    </div>
    
  );
}


export default Card