import React, {useEffect} from "react";
import axios from "axios";

import Smurf from "../components/smurf";


import {fetchNewSmurf} from "../actions/smurfActions";

import {connect} from "react-redux";



const Smurfs = (props) => {
console.log(props)
// const[smurfs, setSmurfs]= useState();

useEffect(() => {
    props.fetchNewSmurf();
},[])


return (
    <div>
            <div>
            {props.state.smurfs.map(smurf => (
            <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height}/>
            ))}
            </div>
            
            
     </div>
  )
}
const mapStateToProps = state => {
    console.log(state)
    return { state }
}


export default connect(mapStateToProps, {fetchNewSmurf})(Smurfs);