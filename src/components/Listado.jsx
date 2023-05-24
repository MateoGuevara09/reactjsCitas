import React from "react";
const Listado = (props) => {
    <div className="container">
        <div className="cita" key={props.Mascota}>
            <p>Mascota: <span>{props.Mascota}</span></p>
            <p>Dueño: <span>{props.Dueño}</span></p>
            <p>Fecha: <span>{props.Fecha}</span></p>
            <p>Hora: <span>{props.Hora}</span></p>
            <p>Sintomas: <span>{props.Sintomas}</span></p>
            <button className="button elimnar u-full-width">Eliminar ×</button>

        </div>
        <br></br>
    </div>
};
export default Listado;