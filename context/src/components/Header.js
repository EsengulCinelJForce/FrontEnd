import React from 'react'

import ThemeContext from "../context/ThemeContext" 
import {useContext} from "react"  
function Header() {

    const {theme,setTheme} =useContext(ThemeContext);

  return ( <div>
      Acvtive theme: {theme}
      <button onClick={() => setTheme(theme === "Light" ? "dark" : "Light")}>Change theme</button>
    </div>
  )
  }

export default Header
