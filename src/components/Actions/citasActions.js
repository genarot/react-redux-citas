import { LISTAR_CITAS, AGREGAR_CITA, BORRAR_CITA} from './types'

export const agregarCita = (cita) => {
    return {
        type: AGREGAR_CITA,
        payload: cita
    }
}

export const listarCitas = () => {
    return {
        type: LISTAR_CITAS
    }
}

export const eliminarCita = (id) => {
    return {
        type: BORRAR_CITA,
        payload: id
    }
};