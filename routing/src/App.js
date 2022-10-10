import './App.css';
import React from "react";

import About from "./components/About"
import Home from "./components/Home"
import Users from "./components/Users"
import User from "./components/User"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: "black", color: "#fff" }}
                to="/"
                exact
              >
                Home
              </NavLink>

            </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: "black", color: "#fff" }}
                to="/about"
                exact
              >
                About
              </NavLink>          
                </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: "black", color: "#fff" }}
                to="/users"
                exact
              >
                Users
              </NavLink>            </li>

          </ul>
        </nav>


        <Switch>
          {/* eger endpoint(path) about ise  about() fonksiyonunu çağır  çalıştır */}
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/user/:id" component={User}></Route>
          <Route path="/" component={Home}></Route>


        </Switch>
      </div>
    </Router>
  );
}




export default App;
