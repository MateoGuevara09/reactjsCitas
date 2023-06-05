
const Cita =  (props) => {
    const eliminar = () => {
        const nuevoArray = [...props.cita]
        nuevoArray.splice(props.punto,1)
        props.setcitas(nuevoArray)
    }

    return (
        <div className="cita" display= "">
            <p>Mascota: <span>{props.Mascota}</span></p>
            <p>Dueño: <span>{props.Dueño}</span></p>
            <p>Fecha: <span>{props.Fecha}</span></p>
            <p>Hora: <span>{props.Hora}</span></p>
            <p>Sintomas: <span>{props.Sintomas}</span></p>
            <button className="button elimnar u-full-width" onClick={eliminar}>Eliminar ×</button>
        </div>
    )
}

export default Cita;