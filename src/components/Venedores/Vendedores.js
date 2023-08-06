import React from 'react'
import AgregarVendedor from '../AgregarVendedor'
import ObtenerVendedores from '../ObtenerVendedores'
import BuscarVendedor from '../BuscarActualizarEliminarVendedor'
import Header from '../Header/Header'

const Vendedores = () => {
  return (
    <>
    <Header/>
    <AgregarVendedor/>
    <ObtenerVendedores/>
    <BuscarVendedor/>
    </>
  )
}

export default Vendedores