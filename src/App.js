import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import FirstScreen from './component/FirstScreen/FirstScreen';
import Navbar from "./component/NavBar/Navbar";
import {Switch, Route } from "react-router-dom"; 
import SignupScreen from './component/SignupScreen/SignupScreen';
import LoginScreen from './component/LoginScreen/LoginScreen';
function App() {
  return (
      <>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={FirstScreen}/>
      <Route exact path="/signup" component={SignupScreen}/>
      <Route exact path="/login" component={LoginScreen}/>
      </Switch>
      </>
  );
}

export default App;
