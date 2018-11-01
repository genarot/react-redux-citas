import {VALIDAR_FORMULARIO, MOSTRAR_ERROR} from '../Actions/types';

//cada reducer tiene su propio state
const initialState = {
    error: false
}

export default function( state= initialState, action ){
    switch( action.type) {
        case MOSTRAR_ERROR:
            return {
                error: action.payload
            }
        default:
            return state;
    }
}