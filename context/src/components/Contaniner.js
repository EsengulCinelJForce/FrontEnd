import React from 'react'
import Button from './Button';
import Header from './Button';

import  {useContext} from "react"
import ThemeContext from "../context/ThemeContext"
import Profile from './Profile';
function Contaniner() {
    const{theme}=useContext(ThemeContext);
    console.log(theme);

  return (
    <div className={`app ${theme=== "dark" ? theme: ""}`}>   {/* birden fazla class kullanmak için backtic arasına  */}
       <Button/>
      <br></br>
      <hr></hr>
      <Header/>
      <br></br>
      <hr></hr>
      <Profile/>
    </div>
  )
}

export default Contaniner
