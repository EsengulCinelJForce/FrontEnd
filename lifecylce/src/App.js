import { isVisible } from "@testing-library/user-event/dist/utils";
import Counter from "./Component/Counter";
import {useState} from "react";
function App() {

  const[isVisible,setIsVisible]=useState(true);
 


  return (
   <div>
    {isVisible && <Counter/>}
    <br></br>
    <button onClick={()=>setIsVisible(!isVisible)}>Toggle</button>

   </div>
  );
}

export default App;
