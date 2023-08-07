import React, { useState } from 'react';
import axios from 'axios';

const AgregarConstructora = () => {
  const [razon_social, setRazon_social] = useState('');
  const [representante, setRepresentante] = useState('');
  const [contacto, setContacto] = useState('');
  const [estado, setEstado] = useState('');
  const [direccion, setDireccion] = useState('');
  const [codigo_postal, setCodigo_postal] = useState('');


  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Objeto con los datos del vendedor a enviar
    const constructoraData = {
      razon_social: razon_social,
      representante: representante,
      contacto: contacto,
      estado: estado,
      direccion: direccion,
      codigo_postal: codigo_postal,
    };

    // Realizar la petición POST a la API para agregar el nuevo vendedor
    axios.post(`https://localhost:7095/Constructora/AgregarConstructora`, constructoraData)
      .then(response => {
        // Limpiar los campos del formulario después de agregar el vendedor exitosamente
        setRazon_social('');
        setRepresentante('');
        setContacto('');
        setEstado('');
        setDireccion('');
        setCodigo_postal('');

        console.log('Constructora agregada:', response.data);
      })
      .catch(error => {
        console.error('Error al agregar Constructora:', error);
      });
  };

  return (
    <div className="container">
      <h2>Agregar Constructora</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="razon_social" className="form-label">Razón Social:</label>
          <input type="text" id="razon_social" className="form-control" value={razon_social} onChange={(event) => setRazon_social(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="representante" className="form-label">Representante:</label>
          <input type="text" id="representante" className="form-control" value={representante} onChange={(event) => setRepresentante(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="contacto" className="form-label">Contacto:</label>
          <input type="text" id="contacto" className="form-control" value={contacto} onChange={(event) => setContacto(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="estado" className="form-label">Estado:</label>
          <input type="text" id="estado" className="form-control" value={estado} onChange={(event) => setEstado(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <input type="text" id="direccion" className="form-control" value={direccion} onChange={(event) => setDireccion(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="codigo_postal" className="form-label">Código Postal:</label>
          <input type="text" id="codigo_postal" className="form-control" value={codigo_postal} onChange={(event) => setCodigo_postal(event.target.value)} required />
        </div>
        <div>
          <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Agregar</button>
        </div>
      </form>
    </div>
  );
}

export default AgregarConstructora