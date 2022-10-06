import './App.css';
import Header from './components/Headers';
import User from './components/User';
const name = "Esengul";
const surname = "Cinel";
const isLoggenIn = true;

const friend=[
  {
    id:1,
    name:"Ayşe",
  },
  {
    id:2,
    name:"Fatma",
  },
  {
    id:3,
    name:"Hayriye",
  },
];
//{!isLoggenIn && `Giriş yapmadınız.`}
function App() {
  return (
    <>
      <User name="Esen" 
            surname="React" 
            //isLoggenIn={true}
            age={24}
            friends={friend}  
            adress={{tittle:"Pendik" , zip:3434}}/>



      <h1>{isLoggenIn && `Benim adim ${name}, soyadim ${surname}`}</h1>

      <h1>{isLoggenIn ? `Benim adim ${name}, soyadim ${surname}` : `Giriş yapmadınız`}</h1>

      <h1>Hello</h1>
      <h2>{name}</h2>
      <h2>{`Benim adim ${name}, soyadim ${surname}`}</h2>
      <Header />
      <p className="asd"> Deneeme</p>
      <label htmlFor="myinput">
        Name
        <input id="name"></input>
      </label>
    </>
  )
}

export default App;