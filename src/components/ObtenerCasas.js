import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ObtenerCasas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la petición GET a la API local
    axios.get('https://localhost:7095/Casa')
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
  <h2>Casas</h2>
  <div>
    <table className="table">
      <thead>
        <tr>
          <th>idCasa</th>
          <th>Tipo</th>
          <th>Dirección</th>
          <th>Ancho</th>
          <th>Largo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((casa, index) => (
          <tr key={index}>
            <td>{casa.idCasa}</td>
            <td>{casa.tipo}</td>
            <td>{casa.direccion}</td>
            <td>{casa.ancho}</td>
            <td>{casa.largo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}
