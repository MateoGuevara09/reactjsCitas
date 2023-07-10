import React from "react";
import Cita from "./Cita";
import { PropTypes } from "prop-types";
const Listado = (props) => {
    return(
    <div className="container">
        {props.citas.map((cita, i) => <Cita key={i} {...cita} setcitas={props.setCitas} cita={props.citas} punto={i}/>)}
    </div>
    )
};
Listado.propTypes = {
    citas: PropTypes.array.isRequired,
    setCitas: PropTypes.func.isRequired
}
export default Listado;