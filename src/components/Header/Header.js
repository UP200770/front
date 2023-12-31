import React from 'react'

const Header = () => {
  return (
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
  )
}

export default Header