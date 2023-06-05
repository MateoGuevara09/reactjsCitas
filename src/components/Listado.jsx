import React from "react";
import Cita from "./Cita";
const Listado = (props) => {
    console.log(props.citas)
    return(
    <div className="container">
        {props.citas.map((cita, i) => <Cita key={i} {...cita}/>)}
    </div>
    )
};
export default Listado;