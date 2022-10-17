import './App.css';
import Palatte from './components/Palatte';

import { init ,subscriber} from "./socketApi"
import { useEffect,useState } from "react"

function App() {
  const[activeColor, setActiveColor]=useState("#282c34")
  useEffect(() => {
    init()

    subscriber((color) => {   //subscriber metoduna bir parametre geçtik. çünkü setActivecolor'u socket api altında kullanamayız.
      setActiveColor(color)  //callback fonksiyonu bu cb
    })
  }, [])



  return (
    <div className="App" style={{backgroundColor: activeColor}}>
      <Palatte />
    </div>
  );
}

export default App;
