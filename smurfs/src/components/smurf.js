import React from "react";


const Smurf = (props) => {
    return (
        <div>
            <p>{props.id}</p>
            <p>My name is {props.name}</p>
            <p>I am {props.age} years old!</p>
            <p>I am {props.height} tall!</p>
        </div>
    )
}

export default Smurf;