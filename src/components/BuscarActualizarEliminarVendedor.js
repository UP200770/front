import React, { useState } from 'react';
import axios from 'axios';

export const BuscarActualizarEliminarVendedor = () => {
  const [idVendedor, setIdVendedor] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [genero, setGenero] = useState('');
  const [rfc, setRFC] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [actualizacionExitosa, setActualizacionExitosa] = useState(false);
  const [eliminacionExitosa, setEliminacionExitosa] = useState(false); 

  const handleIdVendedorChange = (event) => {
    setIdVendedor(event.target.value);
  };

  const buscarVendedor = () => {
    axios.get(`https://localhost:7095/Vendedor/BuscarVendedor?idVendedor=${idVendedor}`)
      .then(response => {
        const vendedor = response.data;
        setNombre(vendedor.nombre);
        setApellidoPaterno(vendedor.apellidoPaterno);
        setApellidoMaterno(vendedor.apellidoMaterno);
        setGenero(vendedor.genero);
        setRFC(vendedor.rfc);
        setTelefono(vendedor.telefono);
        setEmail(vendedor.email);
      })
      .catch(error => {
        console.error('Error al obtener datos del vendedor:', error);
        setNombre('');
        setApellidoPaterno('');
        setApellidoMaterno('');
        setGenero('');
        setRFC('');
        setTelefono('');
        setEmail('');
      });
  };

  const actualizarVendedor = () => {
    const datosActualizados = {
      idVendedor,
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      genero,
      rfc,
      telefono,
      email
    };
  
    axios.put(`https://localhost:7095/Vendedor/ActualizarVendedor`, datosActualizados)
      .then(response => {
        setActualizacionExitosa(true);
      })
      .catch(error => {
        console.error('Error al actualizar datos del vendedor:', error);
        setActualizacionExitosa(false);
      });
  };

  const eliminarVendedor = () => {
    axios.delete(`https://localhost:7095/Vendedor/EliminarVendedor?idVendedor=${idVendedor}`)
      .then(response => {
        setEliminacionExitosa(true);
        // Limpiar los campos después de eliminar el vendedor
        setNombre('');
        setApellidoPaterno('');
        setApellidoMaterno('');
        setGenero('');
        setRFC('');
        setTelefono('');
        setEmail('');
      })
      .catch(error => {
        console.error('Error al eliminar al vendedor:', error);
        setEliminacionExitosa(false);
      });
  };

  return (
    <div className="container">
  <h2>Buscar, actualizar o eliminar vendedor</h2>
  <div className="mb-3">
    <label htmlFor="idVendedor" className="form-label">ID del Vendedor:</label>
    <input type="text" className="form-control" value={idVendedor} onChange={handleIdVendedorChange} />
    <button className="btn btn-primary mt-2" onClick={buscarVendedor}>Buscar</button>
  </div>

  {nombre && (
    <div>
      <h3>Vendedor encontrado</h3>
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
          <label htmlFor="rfc" className="form-label">RFC:</label>
          <input type="text" className="form-control" value={rfc} onChange={e => setRFC(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input type="text" className="form-control" value={telefono} onChange={e => setTelefono(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button className="btn btn-success me-2" onClick={actualizarVendedor}>Actualizar</button>
        {actualizacionExitosa && <p className="text-success">¡Los datos del vendedor se actualizaron con éxito!</p>}
        <button className="btn btn-danger" onClick={eliminarVendedor}>Eliminar</button>
        {eliminacionExitosa && <p className="text-success">¡El vendedor ha sido eliminado con éxito!</p>}
      </form>
    </div>
  )}
</div>
  );
}
