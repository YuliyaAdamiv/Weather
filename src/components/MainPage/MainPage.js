import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from '../Card/Card'
import { useLocalStorage } from "../AddCity/useLocalStorage";
import './MainPage.css';



function MainPage() {
const [name, setName] = useLocalStorage("name", "");
console.log(name);
let defaultCities = [
  { name: 'London' },
  { name: 'Paris' },
  { name: 'Tokyo' },
  { name: 'Kiev' }
];
let cities=null;

if (name ==='') {
  cities=name
} else if (name===undefined) {
  cities=defaultCities
}
else {
  cities=name
  defaultCities.push({name: name});
}
console.log(defaultCities)
// function arrayRemove(defaultCities, value) { 
    
//   return defaultCities.filter(function(ele){ 
//       return ele != value; 
//   });
// }
// var result = arrayRemove(defaultCities, name);
// console.log(result)

// const onClick=(name)=>{
//   if (name===defaultCities.name){
//       var result = arrayRemove(defaultCities, name);
//       console.log(result)
//   }
// }
return (
          <div className="App">
            <h2>Weather App</h2>
            {defaultCities.map(item => {
              return <Card key={item.name} name={item.name}/>
            })}
            <Link to="/add_city"><button className="btn">Add city</button></Link>
            {/* <Link to="/delete_city"><button className="btn" onClick={onClick}>Delete city</button></Link> */}
          </div>
    );
  }
   
    


export default MainPage;

