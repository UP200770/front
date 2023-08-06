import React from 'react'
import AgregarCliente from '../AgregarCliente'
import ObtenerClientes from '../ObtenerClientes'
import BuscarCliente from '../BuscarActualizarEliminarCliente'
import Header from '../Header/Header'

const Clientes = () => {
  return (
    <>
        <Header/>
        <AgregarCliente/>
        <ObtenerClientes/>
        <BuscarCliente/>
    </>
  )
}

export default Clientes