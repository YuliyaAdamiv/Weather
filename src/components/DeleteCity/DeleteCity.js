import React from 'react'
import { useLocalStorage } from "../AddCity/useLocalStorage";

export default function DeleteCity() {

const [name, setName] = useLocalStorage("name", "");
console.log(name);
return (
          <div className="App">
            <h2>Delete City</h2>
         </div>
  )
}
