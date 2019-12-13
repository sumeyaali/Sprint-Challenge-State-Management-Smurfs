import React, { Component } from "react";
import "./App.css";
import {connect} from "react-redux";

import Smurfs from "../components/smurfs";

import {fetchNewSmurf} from "../actions/smurfActions";



const App = (props) => {







    return (
      <div className="App">
        <Smurfs key={props.id} name={props.name} age={props.age} heigh={props.height}/>

        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {fetchNewSmurf})(App);
