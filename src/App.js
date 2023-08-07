import 'bootstrap/dist/css/bootstrap.min.css';
import Vendedores from './components/Venedores/Vendedores'
import Casas from './components/Casas/Casas'
import Constructoras from './components/Constructoras/Constructoras'
import Clientes from './components/Clientes/Clientes'
import { BuscarActualizarEliminarVendedor } from './components/BuscarActualizarEliminarVendedor';
import { ObtenerCasas } from './components/ObtenerCasas';
import { AgregarCasa } from './components/AgregarCasa';
import { BuscarActualizarEliminarCasa } from './components/BuscarActualizarEliminarCasa';
import { ObtenerClientes } from './components/ObtenerClientes';
import { AgregarCliente } from './components/AgregarCliente';
import { BuscarActualizarEliminarCliente } from './components/BuscarActualizarEliminarCliente';
import { ObtenerConstructoras } from './components/ObtenerConstructoras';
import { AgregarConstructora } from './components/AgregarConstructora';
import { BuscarActualizarEliminarConstructora } from './components/BuscarActualizarEliminarConstructora';
import {Home} from './components/Home'

import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      children: [
        { path: '/', element: <Home /> },
        { path: '/vendedores', element: <Vendedores /> },
        { path: '/casas', element: <Casas /> },
        { path: '/constructoras', element: <Constructoras /> },
        { path: '/clientes', element: <Clientes/> }
      ],
    },
  ]);

  return (
    <div class="container">
      <div class="row">
      <RouterProvider router={router} />
        {/* <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-danger">
            <Home/>
              <ObtenerVendedores/>
              
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-danger">
              <AgregarVendedor/>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-danger">
              <BuscarActualizarEliminarVendedor/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-success">
              <ObtenerCasas/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-success">
              <AgregarCasa/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-success">
              <BuscarActualizarEliminarCasa/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-warning">
              <ObtenerClientes/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-warning">
              <AgregarCliente/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-warning">
              <BuscarActualizarEliminarCliente/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-primary">
              <ObtenerConstructoras/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-primary">
              <AgregarConstructora/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body bg-primary">
              <BuscarActualizarEliminarConstructora/>
            </div>
          </div>
        </div>
 */}      </div>
    </div>
  );
}

export default App;
