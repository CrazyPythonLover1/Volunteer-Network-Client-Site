import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import VolunteerRegistration from './components/VolunteerRegistration/VolunteerRegistration';
import Login from './components/Login/Login';
import AddEvent from './components/AddEvent/AddEvent';
import EventTasks from './components/EventTasks/EventTasks';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
   
      <Router>
        <Switch>
        <Route exact path='/'>
            <Home/>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/:orgName/registration">
            <VolunteerRegistration/>
          </Route>
          <Route path="/addevent">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/eventtasks">
            <EventTasks/>
          </Route>
          
        </Switch>
      </Router>
    
    </UserContext.Provider>
  );
}

export default App;
