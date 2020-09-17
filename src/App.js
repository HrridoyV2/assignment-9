
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Book from './Components/Book/Book';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';
import Shipment from './Components/Shipment/Shipment';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/spot/:id'>
            <Book></Book>
          </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/:id/shipment'>
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path='/'>
              <Home></Home>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
