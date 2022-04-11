import Card from './components/Card/Card'
import Fullinfo from './components/Card/Fullinfo'
import './App.css';
import {
  Switch,
  Route, 
} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
    <h2>Weather App</h2>
    <Switch>
            <Route path='/1' component={Card}  />
            <Route path='/some-route' component={Fullinfo} />
    </Switch>
    </div>
    );
  }
   
    


export default App;


