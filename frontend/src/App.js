import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HomeScreen from './component/HomeScreen/HomeScreen';
import Navbar from "./component/NavBar/Navbar";
import AppContext from "./context/AppContext";
import {Switch, Route } from "react-router-dom"; 
import Alert from "./component/Alert/Alert"
import useSnackbar from "./customHooks/useSnackbar"
import SignupScreen from "./component/SignupScreen/SignupScreen"
import LoginScreen from './component/LoginScreen/LoginScreen';
function App() {
  const {snackbar,showSnackbar,closeSnackbar} = useSnackbar()
  return (
      <>
      <AppContext.Provider value={{showSnackbar}}>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={HomeScreen}/>
      <Route exact path="/signup" component={SignupScreen}/>
      <Route exact path="/login" component={LoginScreen}/>
      </Switch>
      <Alert {...snackbar} onClose={closeSnackbar}/>
      </AppContext.Provider>
      </>
  );
}

export default App;
