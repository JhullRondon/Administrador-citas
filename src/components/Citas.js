import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

class Citas extends Component {
  render() {
    //recibir mensaje desde el app
    const mensaje = this.props.mensaje;
    return (
      <div className='card mt-5'>
        <div className='card-body'>
          <h2 className='card-title text-center'>{mensaje}</h2>
          <div className='lista-citas'>
            {
              Object.keys(this.props.citas).map(cita => (
                <Cita 
                key={cita}
                info={this.props.citas[cita]}
                borrarCita={this.props.borrarCita}
              />               
              ))
            }
          </div>
        </div>        
      </div>
    );
  }
}

Citas.propTypes = {
  borrarCita: PropTypes.func.isRequired,
  mensaje: PropTypes.string.isRequired,
  citas: PropTypes.array.isRequired
}

export default Citas;