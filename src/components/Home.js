import React from 'react';
import casa1 from './casa1.jpg';
import casa2 from './casa2.jpeg';
import casa3 from './casa3.jpeg';
import Header from './Header/Header'

export const Home = () => {
  // Datos de ejemplo para la galería de imágenes de casas
  const houseImages = [
    { id: 1, src: casa1, alt: 'Casa 1' },
    { id: 2, src: casa2, alt: 'Casa 2' },
    { id: 3, src: casa3, alt: 'Casa 3' },
 
];
  return (
    <div className="container bg-">
    <Header/>


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
