import React from 'react'
import AgregarCasa from '../AgregarCasa'
import ObtenerCasas from '../ObtenerCasas'
import BuscarCasa from '../BuscarActualizarEliminarCasa'
import Header from '../Header/Header'

const Casas = () => {
  return (
    <>
    <Header/>
    <AgregarCasa/>
    <ObtenerCasas/>
    <BuscarCasa/>
    </>
  )
}

export default Casas