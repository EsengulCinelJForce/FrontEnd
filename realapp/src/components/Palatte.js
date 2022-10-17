import React from 'react'

import { useState } from 'react'
import { send } from "../socketApi"   //socketApi içindeki fonksiyonu kullandık.
function Palatte() {

    const [color, setColor] = useState("#000");

    return (
        <div className="palette">
            <input type="color"
             value={color}
             onChange={(e)=>setColor(e.target.value)}/>  {/* inputun(ekranda girdiğim) değeri state içine yazmak için */}
            <button onClick={()=>send(color)}> Click</button>   {/* butona basıldıktan sonra rengi backend e göndermem lazım */}

        </div>
    )
}

export default Palatte
