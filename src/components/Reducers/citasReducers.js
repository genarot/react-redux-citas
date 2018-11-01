import {LISTAR_CITAS, AGREGAR_CITA, BORRAR_CITA} from '../Actions/types';

const initialState = {
    citas: [
        // { id: 'cita15405883712', fecha: "2018-12-31",hora: "01:00", mascota: "Odie", propietario: "Odie", sintomas: "addad", telefono: "2322316"}, 
        // { id: 'cita154058837251', mascota: "Mongo", propietario: "Odie", telefono: "2322316", fecha: "2018-12-31", hora: "01:00",sintomas: "Diarrea"}
    ]
}

export default  function( state = initialState, action) {
    switch( action.type ) {
        case LISTAR_CITAS:
            return {
                ...state
            };
        case BORRAR_CITA:
            return {
                ...state,
                citas:state.citas.filter( (cita) => cita.id !== action.payload)
            };
        case AGREGAR_CITA:
            let citas = state.citas;
            citas.push(action.payload);        
            return {
                ...state, 
                citas: citas
            };
        default:
            return state;
    }
}