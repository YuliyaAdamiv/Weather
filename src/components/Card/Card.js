import React from 'react'
import '../../App.css'
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherAction} from '../redux/slices/weatherSlices'
import { useHistory } from 'react-router-dom';


function Card(props) {
//     const [name, setName] = useLocalStorage("name", "");
//     console.log(name);
// const defaultList = [
//      { name: 'London' },
//      { name: 'Paris' },
//      { name: 'Tokyo' },
//      { name: 'Kiev' }
//     ];
//     const [list, updateList] = useState(defaultList);
//     if (name !== null){
//         defaultList.push({name: name});
//     }
//     console.log(defaultList)
   

// const handleRemoveItem = (e) => {
// const name = e.target.getAttribute("name")
//         updateList(list.filter(item => item.name !== name));
//       };
const history = useHistory();
const handleClick = () => history.push('/card/'+props.name)
  //dispatch action
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(fetchWeatherAction(props.name))
  },[])

function refreshPage(){ 
    window.location.reload(); 
}
  //select state from store
  const weather = useSelector((state)=> state.weather[props.name]) || {};

//   const weather = useSelector((state)=> state.weather[props.name]) || {};
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
            {/* <span name={props.name} className="span" onClick={handleRemoveItem}> */}
              x
            {/* </span> */}
    
    </div>
    
  );
}


export default Card