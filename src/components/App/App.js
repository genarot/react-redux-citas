import React, { Component } from 'react';
import Header from '../Header';
import Agregarcita from '../AgregarCita.js';
import ListaCitas from '../ListaCitas';

//Redux
import {Provider} from 'react-redux'
import store from '../Store';

class App extends Component {
    render() {
      
      return (
        <Provider store={store}>
          <div className="App">
            <Header titulo={'Administrador de Pacientes Veterinaria'} />

            <div className="row" >
              <div className="col-md-6">
                <Agregarcita />
              </div>
              <div className="col-md-6">
                <ListaCitas/>
              </div>
            </div>
          </div>
        </Provider>
      );
    }
}
export default App;