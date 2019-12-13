import React,{useState} from "react";
import "./App.css";
// import axios from "axios";

import Smurfs from "../components/smurfs";
import SmurfForm from "../components/smurfForm";





const App = () =>  {
 



    return (
      <div className="App">
        <h1>CREATE YOUR OWN SMURF!</h1>
        <div>Enter down below to add a new smurf!</div><br/>
      <SmurfForm /> 
      <Smurfs/>
      
      </div>
    );
           
}


export default (App);
