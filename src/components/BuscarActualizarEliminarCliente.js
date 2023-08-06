import React, { useState } from 'react';
import axios from 'axios';

export const BuscarActualizarEliminarCliente = () => {
  const [idCliente, setIdCliente] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [genero, setGenero] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [actualizacionExitosa, setActualizacionExitosa] = useState(false);
  const [eliminacionExitosa, setEliminacionExitosa] = useState(false); 

  const handleIdClienteChange = (event) => {
    setIdCliente(event.target.value);
  };

  const buscarCliente = () => {
    axios.get(`https://localhost:7095/Cliente/BuscarCliente?idCliente=${idCliente}`)
      .then(response => {
        const cliente = response.data;
        setNombre(cliente.nombre);
        setApellidoPaterno(cliente.apellidoPaterno);
        setApellidoMaterno(cliente.apellidoMaterno);
        setGenero(cliente.genero);
        setDireccion(cliente.direccion);
        setTelefono(cliente.telefono);
        setEmail(cliente.email);
      })
      .catch(error => {
        console.error('Error al obtener datos del Cliente:', error);
        setNombre('');
        setApellidoPaterno('');
        setApellidoMaterno('');
        setGenero('');
        setDireccion('');
        setTelefono('');
        setEmail('');
      });
  };

  const actualizarCliente = () => {
    const datosActualizados = {
      idCliente,
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      genero,
      direccion,
      telefono,
      email
    };
  
    axios.put(`https://localhost:7095/Cliente/ActualizarCliente`, datosActualizados)
      .then(response => {
        setActualizacionExitosa(true);
      })
      .catch(error => {
        console.error('Error al actualizar datos del cliente:', error);
        setActualizacionExitosa(false);
      });
  };

  const eliminarCliente = () => {
    axios.delete(`https://localhost:7095/Cliente/EliminarCliente?idCliente=${idCliente}`)
      .then(response => {
        setEliminacionExitosa(true);
        // Limpiar los campos después de eliminar el Cliente
        setNombre('');
        setApellidoPaterno('');
        setApellidoMaterno('');
        setGenero('');
        setDireccion('');
        setTelefono('');
        setEmail('');
      })
      .catch(error => {
        console.error('Error al eliminar al Cliente:', error);
        setEliminacionExitosa(false);
      });
  };

  return (
    <div className="container">
  <h2>Buscar, actualizar o eliminar cliente</h2>
  <div className="mb-3">
    <label htmlFor="idCliente" className="form-label">ID del Cliente:</label>
    <input type="text" className="form-control" value={idCliente} onChange={handleIdClienteChange} />
    <button className="btn btn-primary mt-2" onClick={buscarCliente}>Buscar</button>
  </div>

  {nombre && (
    <div>
      <h3>Cliente encontrado</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidoPaterno" className="form-label">Apellido Paterno:</label>
          <input type="text" className="form-control" value={apellidoPaterno} onChange={e => setApellidoPaterno(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidoMaterno" className="form-label">Apellido Materno:</label>
          <input type="text" className="form-control" value={apellidoMaterno} onChange={e => setApellidoMaterno(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">Género:</label>
          <input type="text" className="form-control" value={genero} onChange={e => setGenero(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <input type="text" className="form-control" value={direccion} onChange={e => setDireccion(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input type="text" className="form-control" value={telefono} onChange={e => setTelefono(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button className="btn btn-success me-2" onClick={actualizarCliente}>Actualizar</button>
        {actualizacionExitosa && <p className="text-success">¡Los datos del Cliente se actualizaron con éxito!</p>}
        <button className="btn btn-danger" onClick={eliminarCliente}>Eliminar</button>
        {eliminacionExitosa && <p className="text-success">¡El Cliente ha sido eliminado con éxito!</p>}
      </form>
    </div>
  )}
</div>
  );
}
