import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink exact activeClassName="active" className ="nav-link" to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink exact activeClassName="active" className ="nav-link" to="/usuarios">Usuarios</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink exact activeClassName="active" className ="nav-link" to="/cadastros">Cadastros</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar