import React from "react";
import Cita from "./Cita";
const Listado = (props) => {
    return(
    <div className="container">
        {props.citas.map((cita, i) => <Cita key={i} {...cita} setcitas={props.setCitas} cita={props.citas} punto={i}/>)}
    </div>
    )
};
export default Listado;