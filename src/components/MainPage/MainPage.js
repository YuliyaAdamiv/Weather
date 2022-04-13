
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from '../Card/Card'
import './MainPage.css';



function MainPage() {
    
  return (
    <div className="App">
    <h2>Weather App</h2>
    <Card name="London" id='1'/>
    <Card name="Paris" id='2'/>
    <Card name="Tokyo" id='3'/>
    <Card name="Kiev" id='4'/>
    <Link to="/add_city"><button className="btn">Add city</button></Link>
    </div>
    );
  }
   
    


export default MainPage;

