import React from 'react';
import casa1 from './casa1.jpg';
import casa2 from './casa2.jpeg';
import casa3 from './casa3.jpeg';
import Fondo from '../components/FondoC.jpg'
import Header from './Header/Header'
import Swiper from './Swiper/Swiper'

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


      <div className="container mb-5">
        <h2 className="mb-4">Bienvenido a Nuestra Inmobiliaria</h2>
        <Swiper/>
      </div>

      <div className='container'>
        <div className="relative isolate overflow-hidden bg-gray-900  sm:py-32">
          <div
            className="d-flex align-items-center justify-content-center position-relative"
            style={{
              backgroundImage: `url(${Fondo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '50vh', // Ajusta la altura según tus necesidades
              
            }}
          >
          <div className="position-absolute top-50 start-50 translate-middle text-white text-center p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(5px)',
            borderRadius: '10px',
          }}>
          <h1>Inmobiliaria Lee</h1>
          <p>Encuentra el hogar de tus sueños</p>
        </div>
      </div>        
                {/* <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                /> */}
            </div>
      </div>
    </div>
  );
};

export default Home;
