import React, { useState } from 'react';
import axios from 'axios';

export const AgregarCliente = () => {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [genero, setGenero] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Objeto con los datos del Cliente a enviar
    const ClienteData = {
      nombre: nombre,
      ApellidoPaterno: apellidoPaterno,
      ApellidoMaterno: apellidoMaterno,
      Genero: genero,
      Direccion:direccion,
      Telefono: telefono,
      Email: email
    };

    // Realizar la petición POST a la API para agregar el nuevo Cliente
    axios.post(`https://localhost:7095/Cliente/AgregarCliente`, ClienteData)
      .then(response => {
        // Limpiar los campos del formulario después de agregar el Cliente exitosamente
        setNombre('');
        setApellidoPaterno('');
        setApellidoMaterno('');
        setGenero('');
        setDireccion('');
        setTelefono('');
        setEmail('');

        console.log('Cliente agregado:', response.data);
      })
      .catch(error => {
        console.error('Error al agregar Cliente:', error);
      });
  };

  return (
    <div className="container">
    <h2>Agregar Cliente</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="Nombre" className="form-label">Nombre:</label>
        <input type="text" id="Nombre" className="form-control" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="ApellidoPaterno" className="form-label">Apellido Paterno:</label>
        <input type="text" id="ApellidoPaterno" className="form-control" value={apellidoPaterno} onChange={(event) => setApellidoPaterno(event.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="ApellidoMaterno" className="form-label">Apellido Materno:</label>
        <input type="text" id="ApellidoMaterno" className="form-control" value={apellidoMaterno} onChange={(event) => setApellidoMaterno(event.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="Genero" className="form-label">Género:</label>
        <select id="Genero" className="form-control" value={genero} onChange={(event) => setGenero(event.target.value)} required>
          <option value="">Seleccione una opción</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="Direccion" className="form-label">Dirección:</label>
        <input type="text" id="Direccion" className="form-control" value={direccion} onChange={(event) => setDireccion(event.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="Telefono" className="form-label">Teléfono:</label>
        <input type="text" id="Telefono" className="form-control" value={telefono} onChange={(event) => setTelefono(event.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">Email:</label>
        <input type="email" id="Email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </div>
      <div>
        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Agregar</button>
      </div>
    </form>
  </div>
  );
}
