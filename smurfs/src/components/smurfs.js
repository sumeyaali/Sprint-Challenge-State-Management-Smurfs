import React, {useState} from "react";
import axios from "axios";
import Smurf from "../components/smurf";

import {fetchNewSmurf} from "../actions/smurfActions";

import {connect} from "react-redux";


const Smurfs = (props) => {

const[smurfs, setSmurfs]= useState([{
        name: " ",
        age: " ",
        height: " ",
        id: Date.now()
    }]);



const handleChanges = e => {
    e.preventDefault();
    setSmurfs({smurfs: e.target.value})
}

const handleAddSmurf = e => {
    e.preventDefault();
    props.addNewSmurf(props.smurfs)
}


return (
    <div>
        <div>
            {smurfs.map(smurf => (
                <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height}/>
            ))}
            </div>
            <input
            type="text"
            name="smurfs"
            value={smurfs}
            onChange={handleChanges}   
            />
            <button onClick={handleAddSmurf}> Add your own Smurf!</button>   
     </div>
  )
}
const mapStateToProps = state => {
    return {
        smurf: state.smurfs
    }
}


export default connect(mapStateToProps, {fetchNewSmurf})(Smurfs);