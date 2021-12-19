import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import FirstScreen from './FirstScreen';
import Navbar from "./Navbar";
import {Switch, Route } from "react-router-dom"; 
import SignupScreen from './SignupScreen';
function App() {
  return (
      <>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={FirstScreen}/>
      <Route exact path="/SignupScreen" component={SignupScreen}/>
      </Switch>
      </>
  );
}

export default App;
