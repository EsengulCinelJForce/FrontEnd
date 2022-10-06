import React from 'react'
import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0);


    useEffect(() => {
        console.log("Component mount edildi ! ")
        //bana verilen number'ın değerini bu fonk sayesinde her saniye sürekli artırabilirim.
        setInterval(()=>{
            setNumber((n)=>n+1)  //burada aldığım parametre n aslında number'ın kendisi artırmayı böyle de yapabiliriz
         },1000)

    }, [])

    useEffect(() => {
        console.log("number state güncellendi ! ")
    }, [number])

    return (
        <div >
            <h1> {number} </h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
            
        </div>
    )
}

export default Counter
