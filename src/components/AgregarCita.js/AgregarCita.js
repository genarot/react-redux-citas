import React,{Component} from 'react';
import uuidv1 from 'uuid/v1';

//Redux
import {connect} from 'react-redux'
import {agregarCita} from '../Actions/citasActions'
import {mostrarError} from '../Actions/errorActions'

class Agregarcita extends Component {

    nombreMascotaRef = React.createRef();
    nombreDuenoRef  = React.createRef();
    telefonoRef     = React.createRef();
    fechaRef        = React.createRef();
    horaRef         = React.createRef();
    sintomasRef     = React.createRef();
    
    componentWillMount() {
        this.props.mostrarError(false);
    }
    crearNuevaCita = (e) => {
        e.preventDefault();

        
        const  mascota=    this.nombreMascotaRef.current.value,
            propietario= this.nombreMascotaRef.current.value,
            fecha=      this.fechaRef.current.value, 
            hora=       this.horaRef.current.value,
            sintomas=   this.sintomasRef.current.value
         
        if ( mascota === '' || propietario === '' || fecha === '' || sintomas === '') {
            this.props.mostrarError(true)
        } else {
            this.props.mostrarError(false);
            const nuevaCita = {
                id: uuidv1(),
                mascota:    this.nombreMascotaRef.current.value,
                propietario: this.nombreMascotaRef.current.value,
                telefono:   this.telefonoRef.current.value,
                fecha:      this.fechaRef.current.value, 
                hora:       this.horaRef.current.value,
                sintomas:   this.sintomasRef.current.value
            }
            this.props.agregarCita(nuevaCita);
            e.currentTarget.reset();
        }
    }

    renderError(error ) {
        if (error ) {
            return <div class="alert alert-danger" role="alert">
                        <h3>Todos los campos son requeridos</h3>
                    </div>    
        } else {
            return null
        }
    }

    render() {
        const existeError = this.props.error;
        console.log('error', existeError);
        
        return (
            <div className="card mt-5 p-5 m-5">
                    <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                    <form onSubmit={this.crearNuevaCita}>
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota:</label>
                                <div className="col-sm-4 col-lg-10">
                                    <input type="text" ref={this.nombreMascotaRef} id="mascota" className="form-control" placeholder="Nombre Mascota"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño:</label>
                                <div className="col-sm-4 col-lg-10">
                                    <input type="text" id="cliente" ref={this.nombreDuenoRef} className="form-control"  placeholder="Nombre Dueño de la Mascota"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                    <label className="col-sm-4 col-lg-2 col-form-label">Teléfono:</label>
                                    <div className="col-sm-4 col-lg-10">
                                        <input type="tel" id="telefono" ref={this.telefonoRef} className="form-control"  placeholder="Número de Teléfono"/>
                                    </div>
                                </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Fecha:</label>
                                <div className="col-sm-4 col-lg-10">
                                    <input type="date" id="fecha" ref={this.fechaRef} className="form-control"/>
                                </div>
                            </div>

                             <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Hora:</label>
                                <div className="col-sm-4 col-lg-10">
                                    <input type="time" id="hora" ref={this.horaRef} className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Sintomas:</label>
                                <div className="col-sm-4 col-lg-10">
                                    <textarea id="sintomas" ref={this.sintomasRef} className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="form-group row justify-content-end">
                                <div className="col-sm-3">
                                    <button type="submit" className="btn btn-success w-100">Agregar</button>
                                </div>
                            </div>
                    </form>
                    {this.renderError(existeError)}
            </div>
        );
    }
}

const  mapStateToProps = function(state) {
    return{
        citas: state.citas.citas,
        error: state.error.error
    }
}
export default connect(mapStateToProps, {agregarCita, mostrarError}) (Agregarcita)