import React,{Component} from 'react';

//Redux
import {connect}  from 'react-redux'
import {eliminarCita} from '../Actions/citasActions'

class Cita extends Component {
    borrarCita = (id) => {
        // console.log(this.props);
        this.props.eliminarCita(id)
    }
    render() {
        const {id, fecha,hora,mascota, propietario, sintomas} = this.props.info;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><span>Nombre Dueño:</span>: {propietario}</p>
                    <p className="card-text"><span>Fecha:</span>{fecha}</p>
                    <p className="card-text"><span>Hora:</span> {hora}</p>
                    <p className="card-text"><span>Sintomas:</span> {sintomas}</p>
                    <button className="btn btn-danger" onClick={ () => this.borrarCita(id) }>Borrar &times;</button> 
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        citas: state.citas
    }
}
export default connect(mapStateToProps, {eliminarCita}) (Cita)