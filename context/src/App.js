import './App.css';
import Contaniner from './components/Contaniner';

import { ThemeProvider} from "./context/ThemeContext"

import { UserProvider} from "./context/UserContext"
function App() {
  return (
    <ThemeProvider>
     <UserProvider>

     <Contaniner/>
     </UserProvider>
    </ThemeProvider>
    
  )
}

export default App;
