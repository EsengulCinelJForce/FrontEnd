import React from 'react'
import { Link, Route, Switch ,useRouteMatch} from 'react-router-dom'
import {useEffect,useState} from "react"
import axios from 'axios';
import User from "./User"

function Users() {
  const[users,setUsers]=useState([]);

  const{path,url}=useRouteMatch();
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data))  //bu endpointe istek attıktan sonra bi response gelecek ya onu setledik
  },[]);
  return (
    <div>
      <h1>Users</h1>
        <ul>
               {
                users.map((user) => (
                  <li key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                  </li>
                ))
               }
            </ul>

            <Switch>
              <Route exact path={path}>
                <h3>sdfs</h3>
              </Route>
              <Route  path={`${path}/:Id`} component={User}>
                <h3>sdfs</h3>
              </Route>
            </Switch>
    </div>
  )
}

export default Users
