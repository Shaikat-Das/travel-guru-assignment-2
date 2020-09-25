import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Booking from './Components/Booking/Booking'
import Authentication from './Components/Authentication/Authentication'
import Search from './Components/Search/Search'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const UserContext = createContext();


function App() {

      const [loggedInUser, setLoggedInUser] = useState({});


  return (

        <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>       

      <Router>
      <Header></Header>

        <Switch>
              <Route path="/Home">
                <Home></Home>
              </Route>

              <PrivateRoute path="/Booking">
                <Booking></Booking>
              </PrivateRoute>

              <Route path="/Authentication">
                <Authentication></Authentication>
              </Route>

              <Route path="/Search">
                <Search></Search>
              </Route>

              <Route exact path="/">
                <Home></Home>
              </Route>
        </Switch>

      </Router>
     

      // </UserContext.Provider>

  
  );
}

export default App;
