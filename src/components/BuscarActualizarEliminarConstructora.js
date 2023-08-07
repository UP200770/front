import React, { useState } from 'react';
import axios from 'axios';

const BuscarActualizarEliminarConstructora = () => {
  const [id_constructora, setId_constructora] = useState('');
  const [razon_social, setRazon_social] = useState('');
  const [representante, setRepresentante] = useState('');
  const [contacto, setContacto] = useState('');
  const [estado, setEstado] = useState('');
  const [direccion, setDireccion] = useState('');
  const [codigo_postal, setCodigo_postal] = useState('');
  const [actualizacionExitosa, setActualizacionExitosa] = useState(false);
  const [eliminacionExitosa, setEliminacionExitosa] = useState(false); 

  const handleId_constructoraChange = (event) => {
    setId_constructora(event.target.value);
  };

  const buscarConstructora = () => {
    axios.get(`https://localhost:7095/Constructora/BuscarConstructora?id_constructora=${id_constructora}`)
      .then(response => {
        const constructora = response.data;
        setRazon_social(constructora.razon_social);
        setRepresentante(constructora.representante);
        setContacto(constructora.contacto);
        setEstado(constructora.estado);
        setDireccion(constructora.direccion);
        setCodigo_postal(constructora.codigo_postal);
      })
      .catch(error => {
        console.error('Error al obtener datos de la Constructora:', error);
        setRazon_social('');
        setRepresentante('');
        setContacto('');
        setEstado('');
        setDireccion('');
        setCodigo_postal('');
      });
  };

  const actualizarConstructora = () => {
    const datosActualizados = {
      id_constructora,
      razon_social,
      representante,
      contacto,
      estado,
      direccion,
      codigo_postal
    };
  
    axios.put(`https://localhost:7095/Constructora/ActualizarConstructora`, datosActualizados)
      .then(response => {
        setActualizacionExitosa(true);
      })
      .catch(error => {
        console.error('Error al actualizar datos de la Constructora:', error);
        setActualizacionExitosa(false);
      });
  };

  const eliminarConstructora = () => {
    axios.delete(`https://localhost:7095/Constructora/EliminarConstructora?id_constructora=${id_constructora}`)
      .then(response => {
        setEliminacionExitosa(true);
        // Limpiar los campos después de eliminar la constructora
        setRazon_social('');
        setRepresentante('');
        setContacto('');
        setEstado('');
        setDireccion('');
        setCodigo_postal('');
      })
      .catch(error => {
        console.error('Error al eliminar la Constructora:', error);
        setEliminacionExitosa(false);
      });
  };

  return (
    <div className="container">
  <h2>Buscar, Actualizar o Eliminar Constructora</h2>
  <div className="mb-3">
    <label htmlFor="id_constructora" className="form-label">ID de la Constructora:</label>
    <input type="text" className="form-control" value={id_constructora} onChange={handleId_constructoraChange} />
    <button className="btn btn-primary mt-2" onClick={buscarConstructora}>Buscar</button>
  </div>

  {razon_social && (
    <div>
      <h3>Constructora Encontrada</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="razon_social" className="form-label">Razón Social:</label>
          <input type="text" className="form-control" value={razon_social} onChange={e => setRazon_social(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="representante" className="form-label">Representante:</label>
          <input type="text" className="form-control" value={representante} onChange={e => setRepresentante(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="contacto" className="form-label">Contacto:</label>
          <input type="text" className="form-control" value={contacto} onChange={e => setContacto(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="estado" className="form-label">Estado:</label>
          <input type="text" className="form-control" value={estado} onChange={e => setEstado(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <input type="text" className="form-control" value={direccion} onChange={e => setDireccion(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="codigo_postal" className="form-label">Código Postal:</label>
          <input type="text" className="form-control" value={codigo_postal} onChange={e => setCodigo_postal(e.target.value)} />
        </div>
        <button className="btn btn-success me-2" onClick={actualizarConstructora}>Actualizar</button>
        {actualizacionExitosa && <p className="text-success">¡Los datos de la Constructora se actualizaron con éxito!</p>}
        <button className="btn btn-danger" onClick={eliminarConstructora}>Eliminar</button>
        {eliminacionExitosa && <p className="text-success">¡La Constructora ha sido eliminada con éxito!</p>}
      </form>
    </div>
  )}
</div>
  );
}

export default BuscarActualizarEliminarConstructora