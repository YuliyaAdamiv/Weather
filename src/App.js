import MainPage from './components/MainPage/MainPage'
import AddCity from './components/AddCity/AddCity'
import Fullinfo from './components/Card/Fullinfo'
import './App.css';
import {
  Switch,
  Route, 
} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
    <Switch>
             {/* <Route path='/' component={MainPage} /> */}
            <Route path='/MainPage' component={MainPage}  />   
            <Route path='/card/:id' component={Fullinfo} />
            <Route path='/add_city' component={AddCity} />
    </Switch>
    </div>
    );
  }
   
    


export default App;


