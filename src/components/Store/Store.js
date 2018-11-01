import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//Importar los reducers
import reducerPrincipal from '../Reducers'

const middleware = [thunk];

// console.log(reducerPrincipal);
const storageState = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : {};

const store = createStore(
    reducerPrincipal, 
    storageState, //Initial state
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;