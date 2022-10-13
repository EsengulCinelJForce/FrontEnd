import {useContext} from "react"

import UserContext from "../context/UserContext"

function Profile() {

    const {user,setUser} =useContext(UserContext);
    console.log(user);

    const handleLogin= ()=> {
        setTimeout(()=> {
            setUser({id:1,username:"ecinel", bio:"deneme"})
        },1500)
    }

    const handleLogout= ()=>[
        setUser(null)
    ]
    return (
    <div>
        <br></br>
        <button onClick={handleLogin}>Login</button>
      <code>{JSON.stringify(user)}</code>

      <br></br>

{     user && <button onClick={handleLogout}>Logout</button>}
    </div>
  )
}

export default Profile
