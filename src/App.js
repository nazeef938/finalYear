import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import FirstScreen from './component/FirstScreen/FirstScreen';
import Navbar from "./component/NavBar/Navbar";
import {Switch, Route } from "react-router-dom"; 
import SignupScreen from './component/SignupScreen/SignupScreen';
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
