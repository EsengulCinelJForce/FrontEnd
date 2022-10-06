import './App.css';

import {useState} from "react";
import Counter from './Component/Counter';
import InputExample from './Component/InputExample';


function App() {

const[name,setName] =useState("Esengül");
const[age,setAge]=useState(24);
const[friends, setFriends]=useState(["Ahmet","Mehmet"]);
const[adress,setAdress]=useState({tittle:"İstanbul", zip:3434});

  return (
   <div className="App">
    <h1> merhaba  {name} !</h1>
    <h2>{age}</h2>

    <button onClick={() => setName("Cinel")} >Click name</button>
    <button onClick={() => setAge(26)} >Click age</button>
    <hr/>
    <br></br>
    <h2>Friends</h2>

    {
      friends.map((friend,index)=> 
              <div key={index}>{friend}
              </div>)
    }
    <button onClick={() => setFriends([...friends, "Ayşe"])} >Add new friend</button>


    <hr/>
    <br></br>
    <h2>Adress</h2>

    {
      <div>{adress.tittle}  {adress.zip}</div>
    }

    <button onClick={() => setAdress({...adress, tittle:"Ankara" })} > Change address</button>

    <hr/>
    <br></br>
    <h2>Sayaç</h2>
    <Counter/>

    <hr/>
    <br></br>
    <h2>Input</h2>
    <InputExample/>

   </div>
   
   

  

  );
}

export default App;
