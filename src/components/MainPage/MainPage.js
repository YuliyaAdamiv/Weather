
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from '../Card/Card'
import './MainPage.css';



function MainPage() {
  const defaultCities = [
    { name: 'London' },
    { name: 'Paris' },
    { name: 'Tokyo' },
    { name: 'Kiev' }
   ];
   //localstorage add default cities
   //const city = default
   //if localstorage contains name get list
   //if localstorage not contains name get default
  return (
    <div className="App">
    <h2>Weather App</h2>
    {defaultCities.map(item => {
        return <Card key={item.name} name={item.name}/>
      })}
    <Link to="/add_city"><button className="btn">Add city</button></Link>
    </div>
    );
  }
   
    


export default MainPage;

