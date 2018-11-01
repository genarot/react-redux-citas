import React,{Component} from 'react';
import Cita from '../Cita';
 
//Redux
import {connect} from 'react-redux'
import {listarCitas} from '../Actions/citasActions'
import store from '../Store';

store.subscribe( () => {
    localStorage.setItem('citas', JSON.stringify(store.getState()))
})

class ListaCitas extends Component {
    componentDidMount() {
        this.props.listarCitas();
    }

    render() {
        const citas = this.props.citas.citas;
        
        const mensaje = citas.length > 0 ? 'Administra tus citas' : 'Agrega citas para comenzar';
        return (
            <div className="card mt-5 p-5 m-5">
                <h2 className="card-title text-center" >{mensaje}</h2>
                <div className="lista-citas">
                    {
                        citas.map( cita => <Cita key={cita.id} info={cita}/>)
                    }
                </div>
            </div>
        );
    }
}

const  mapStateToProps = (state) => {
    return {
        citas: state.citas
    }
}
export default connect(mapStateToProps, {listarCitas})(ListaCitas)