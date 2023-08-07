import React from 'react'
import AgregarConstructora from '../AgregarConstructora'
import ObtenerConstructoras from '../ObtenerConstructoras'
import BuscarConstructora from '../BuscarActualizarEliminarConstructora'
import Header from '../Header/Header'

const Constructoras = () => {
  return (
    <>
        <Header/>
        <AgregarConstructora/>
        <ObtenerConstructoras/>
        <BuscarConstructora/>
    </>
  )
}

export default Constructoras