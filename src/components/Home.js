import React from 'react';
import casa1 from './casa1.jpg';
import casa2 from './casa2.jpeg';
import casa3 from './casa3.jpeg';

import { Container, Row, Col } from 'react-bootstrap';

export const Home = () => {
  // Datos de ejemplo para la galería de imágenes de casas
  const houseImages = [
    { id: 1, src: casa1, alt: 'Casa 1' },
    { id: 2, src: casa2, alt: 'Casa 2' },
    { id: 3, src: casa3, alt: 'Casa 3' },
 
];
  return (
    <div className="container bg-">
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Inmobiliaria</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/vendedores">Vendedores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/casas">Casas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/constructoras">Constructoras</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/clientes">Clientes</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <div className="container">
  <h2 className="mb-4">Bienvenido a Nuestra Inmobiliaria</h2>

  <div className="row">
    {houseImages.map((image) => (
      <div key={image.id} className="col-md-4 mb-4">
        <img src={image.src} alt={image.alt} className="img-fluid rounded" />
      </div>
    ))}
  </div>
</div>
</div>
  );
};

export default Home;