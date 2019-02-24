import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import Citas from './components/Citas';


class App extends Component {

  state = {
    citas: []
  }

  componentDidMount() {
    const storaged = localStorage.getItem('citas');

    const citas = JSON.parse(storaged);

    this.setState({
      citas
    });
  }
  
  componentDidUpdate() {
    localStorage.setItem(
      'citas', JSON.stringify(this.state.citas)
    );
  }
  // componentWillMount() {
  //   console.log('yo me ejecuto antes');
  // }

  // componentWillUnmount() {
  //   console.log('yo hasta que cierra el componente');
  // }

  crearCita = (newCita) => {
    const citas = [...this.state.citas, newCita];

    this.setState({
      citas
    });
  }

  borrarCita = (id) => {

    // copiar el state actual
    const citas = [...this.state.citas];
    // borrar el state
    const citasUpdated = citas.filter(cita => cita.id !== id);

    // actualizar el state
    this.setState({
      citas: citasUpdated
    })
  }

  existeCita = () => {
    if (this.state.citas.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="container">
        <Header titulo={'Administador de Pacientes de Veterinaria'} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita 
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <Citas 
            borrarCita={this.borrarCita}
            mensaje={this.existeCita() ? 'Administra tus citas aquí' : 'No hay citas'}
            citas={this.state.citas}
            />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
