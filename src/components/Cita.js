import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {
  
  eliminarCita = () => {
    this.props.borrarCita(this.props.info.id);
  }

  render() {

    const {mascota, dueno, fecha, hora, sintomas} = this.props.info;

    return (
      <div className='media mt-3'>
        <div className="media-body">
          <h3 className="mt-0">{mascota.toUpperCase()}</h3>
          <p className="card-text"><span>Nombre del Dueño: </span>{dueno}</p>
          <p className="card-text"><span>fecha: </span>{fecha}</p>
          <p className="card-text"><span>Hora: </span>{hora}</p>
          <p className="card-text"><span>Sintomas:</span></p>
          <p className="card-text">{sintomas}</p>

          <button onClick={this.eliminarCita} className="btn btn-danger">
            Eliminar &times;
          </button>
        </div>        
      </div>
    );
  }
}

Cita.propTypes = {
  borrarCita: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired
}

export default Cita;