import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ObtenerVendedores = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la petición GET a la API local
    axios.get('https://localhost:7095/Vendedor')
      .then(response => {
        setData(response.data); // Guardar los datos de la respuesta en el estado
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);

  return (
    <div className="container">
    <h2>Vendedores</h2>
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>idVendedor</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Género</th>
            <th>RFC</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((vendedor, index) => (
            <tr key={index}>
              <td>{vendedor.idVendedor}</td>
              <td>{vendedor.nombre}</td>
              <td>{vendedor.apellidoPaterno}</td>
              <td>{vendedor.apellidoMaterno}</td>
              <td>{vendedor.genero}</td>
              <td>{vendedor.rfc}</td>
              <td>{vendedor.telefono}</td>
              <td>{vendedor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}
