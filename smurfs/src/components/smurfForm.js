import React, {useState} from "react";

import {addNewSmurf, fetchNewSmurf} from "../actions/smurfActions";

import {connect} from "react-redux";

const SmurfForm = (props) => {
    const [smurfs, setSmurfs] = useState([{
        name: '',
        age: '',
        height: '',
        id: Date.now()
       }]);
      

       const handleChanges = e => {
        e.preventDefault();
        setSmurfs({...smurfs, [e.target.name]: e.target.value})
        // console.log(props.setSmurfs)
    }


const handleAddSmurf = e => {
    e.preventDefault();
    props.addNewSmurf({...smurfs});
    setSmurfs({name: '', age: '', height: ''})
}


    return (
        <div> 
            <form> 
                <input
                
                name="name"
                placeholder="Name"
                value={smurfs.name}
                onChange={handleChanges}  
                    
                />
                    <input
                
                name="age"
                placeholder="Age"
                value={smurfs.age}
                onChange={handleChanges}   
                />
                    <input
                
                name="height"
                placeholder="Height"
                value={smurfs.height}
                onChange={handleChanges}   
                />
    
                <button onClick={handleAddSmurf}> Add your own Smurf!</button> 
            </form>

        </div>
    );

}
const mapStateToProps = state => {
    return { state}
    
  }

export default connect(mapStateToProps, {addNewSmurf, fetchNewSmurf})(SmurfForm) ; 