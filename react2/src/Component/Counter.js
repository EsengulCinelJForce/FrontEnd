import {useState} from "react";

function Counter(){
    const [count, setCount]=useState(0);

    //her zaman decrease de oldugu gibi kısa yazımlar olmuyor 
    //o yüzden fonksiyon oluşturduk. 
    const increase = () => {
        setCount(count +1);
    };
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
            <button onClick={increase}>Increase</button>

        </div>
    )
}

export default Counter;