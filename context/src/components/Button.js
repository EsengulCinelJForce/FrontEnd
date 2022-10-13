import ThemeContext from "../context/ThemeContext" //hangi context i kullanacaksan dahil ettik
import {useContext} from "react"  //bu context i kullanabilmek için 

function Button() {
   // const data = useContext(ThemeContext); bunu şu şekilde de yapabiliriz
   const {theme,setTheme} =useContext(ThemeContext);
   // console.log(data);    
  //  return (<div> Button {data}</div>) // gelen değeri de bu şekilde yazdırdık ekrana {data} ve burada string gönderiyoduk 
  //artık obje

  return(
    <div>
        Acvtive theme: {theme}
                            {/* theme light ise dark yap yoksa light yani if else yazımı  */}
        <button onClick={() => setTheme(theme ==="Light" ? "dark" : "Light")}> change theme</button>
    </div>
  ) 
}

export default Button
