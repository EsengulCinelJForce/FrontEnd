import {createContext ,useState} from "react"

const ThemeContext =createContext();

export const ThemeProvider = ({children}) => {     //themeprovider diye bi şey tanımladım sonra onu dışa aktardım

  const [theme,setTheme]=useState("dark");

  const values= {
    theme,
    setTheme
  };
  return<ThemeContext.Provider value={values}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeContext
